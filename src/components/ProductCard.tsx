import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import StarRating from "./StarRating";

export type ProductProps = {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  category: string;
};

export default function ProductCard({ id, name, price, image, rating, category }: ProductProps) {
  function AddToCart(productId: number) {
    console.log("Produto adicionado ao carrinho:", productId);
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-sm border border-border bg-card text-card-foreground hover:shadow-md transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-contain"
        loading="lazy"
      />
      <div className="p-4 space-y-1">
        <span className="text-xs text-muted-foreground capitalize">{category}</span>
        <h3 className="font-semibold text-lg truncate">{name}</h3>
        <p className="text-primary font-bold">{price}</p>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground p-2">
        <span className="ml-1">({rating.toFixed(1)})</span>
        <StarRating rating={rating} />
      </div>
      <div className="p-2 flex justify-between items-center">
        <Button
          variant="default"
          onClick={() => AddToCart(id)}
          className="gap-2 cursor-pointer"
        >
          <ShoppingCart size={18} />
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  );
}