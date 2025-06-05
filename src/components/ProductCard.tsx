export type ProductProps = {
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({ name, price, image }: ProductProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-sm border border-border bg-card text-card-foreground hover:shadow-md transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-contain"
        loading="lazy"
      />
      <div className="p-4 space-y-1">
        <h3 className="font-semibold text-lg truncate">{name}</h3>
        <p className="text-primary font-medium">{price}</p>
      </div>
    </div>
  );
}