"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 'iphone15pro',
    name: 'iPhone 15 Pro Max',
    category: 'NEXT-GEN FLAGSHIP',
    description: 'Experience the future of mobile computing with the most advanced iPhone ever created. Featuring groundbreaking A17 Pro chip and revolutionary camera system.',
    image: '/iphone15promax.avif'
  },
  {
    id: 'samsungs24',
    name: 'Samsung Galaxy S24 Ultra',
    category: 'AI POWERHOUSE',
    description: 'Unleash the power of AI with Galaxy S24 Ultra. Revolutionary mobile intelligence meets unparalleled performance.',
    image: '/samsungs24.avif'
  },
  {
    id: 'galaxyfold',
    name: 'Galaxy Z Fold 5',
    category: 'TRANSFORMATIVE TECH',
    description: 'Redefine possibilities with the ultimate foldable experience. Where innovation meets versatility.',
    image: '/GALAXYZFOLD.avif'
  }
  // ... add more products as needed
];

export default function FeaturedProducts() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-6 hover:bg-[#f8f8f8] transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-[300px] w-full mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <p className="text-[#ff0000] text-sm tracking-widest">
                  {product.category}
                </p>
                <h3 className="text-xl font-bold text-[#333333]">
                  {product.name}
                </h3>
                <p className="text-[#808080] text-sm line-clamp-2">
                  {product.description}
                </p>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff0000] group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
