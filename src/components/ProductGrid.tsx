import { useEffect, useState } from "react";
import type { ProductProps } from "./ProductCard";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

type APIProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: { rate: number; count: number };
};

export default function ProductGrid() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const categoriesRes = await fetch("https://fakestoreapi.com/products/categories");
        if (!categoriesRes.ok) throw new Error("Erro ao carregar categorias.");

        const categoriesData: string[] = await categoriesRes.json();
        setCategories(categoriesData);

        const productsRes = await fetch("https://fakestoreapi.com/products");
        if (!productsRes.ok) throw new Error("Erro ao carregar produtos.");

        const productsData: APIProduct[] = await productsRes.json();

        const transformed: ProductProps[] = productsData.map((item) => ({
          id: item.id,
          name: item.title,
          price: `R$ ${item.price.toFixed(2).replace(".", ",")}`,
          image: item.image,
          rating: item.rating.rate,
          category: item.category,
        }));

        setProducts(transformed);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Erro ao carregar os dados.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Produtos em destaque
      </h2>

      {error && (
        <p className="text-red-500 text-center font-bold mb-6">
          {error}
        </p>
      )}

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <Button
          variant={selectedCategory === "all" ? "default" : "outline"}
          onClick={() => setSelectedCategory("all")}
          className="cursor-pointer"
        >
          Todas
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="capitalize cursor-pointer"
          >
            {category}
          </Button>
        ))}
      </div>

      {loading && !error && (
        <p className="text-center text-muted-foreground text-primary font-bold">
          Carregando produtos...
        </p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </section>
  );
}