import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=12");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Produtos em destaque
      </h2>
      {loading ? (
        <p className="text-center text-muted-foreground text-primary">Carregando produtos...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.title}
              price={`R$ ${product.price.toFixed(2).replace(".", ",")}`}
              image={product.image}
            />
          ))}
        </div>
      )}
    </section>
  );
}