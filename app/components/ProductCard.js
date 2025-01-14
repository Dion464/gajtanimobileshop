import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="group relative">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-[#333333]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-sm text-[#ff0000]">{product.category}</p>
            <h3 className="text-xl font-bold text-white">{product.name}</h3>
            <p className="text-sm text-[#cccccc]">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
