"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { productImages } from "../config/images";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "FLAGSHIP",
    description: "The most powerful iPhone ever",
    image: productImages.iphone,
    specs: ["A17 Pro", "Titanium Design", "48MP Camera"],
  },
  {
    id: 2,
    name: "Samsung S24 Ultra",
    category: "FLAGSHIP",
    description: "Ultimate Android Experience",
    image: productImages.samsung,
    specs: ["Snapdragon 8 Gen 3", "AI Features", "200MP Camera"],
  },
  {
    id: 3,
    name: "Apple Watch Ultra",
    category: "WEARABLE",
    description: "Adventure awaits",
    image: productImages.appleWatch,
    specs: ["Titanium Case", "Action Button", "Advanced GPS"],
  },
  {
    id: 4,
    name: "AirPods Max",
    category: "AUDIO",
    description: "Immersive sound experience",
    image: productImages.airpods,
    specs: ["Active Noise Cancellation", "Spatial Audio", "20h Battery"],
  },
  {
    id: 5,
    name: "iPad Pro",
    category: "TABLET",
    description: "Your next computer is not a computer",
    image: productImages.ipad,
    specs: ["M2 Chip", "Liquid Retina XDR", "Apple Pencil"],
  },
  {
    id: 6,
    name: "MacBook Air",
    category: "LAPTOP",
    description: "Incredibly capable. Phenomenally portable",
    image: productImages.macbook,
    specs: ["M2 Chip", "18h Battery", "Fanless Design"],
  },
];

export default function Products() {
  return (
    <section className="py-32 bg-[#f5f5f5] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-full w-[1px] bg-[#808080]/10 transform translate-x-1/2"
          />
        ))}
      </div>

      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#ff0000]" />

      <div className="max-w-7xl mx-auto px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl font-bold tracking-tight text-[#333333]">
            TË GJITHA <span className="text-[#ff0000]">PRODUKTET</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-[#ff0000] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white p-8 relative">
                {/* Decorative elements */}
                <div className="absolute -inset-1 border border-[#333333] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                <div className="absolute -inset-1 border border-[#ff0000] rotate-2 group-hover:rotate-0 transition-transform duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Category Tag */}
                  <div className="absolute top-4 left-0 bg-[#ff0000] text-white px-4 py-1 text-sm tracking-wider">
                    {product.category}
                  </div>

                  {/* Product Image */}
                  <div className="relative aspect-square mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                      quality={100}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[#333333]">
                      {product.name}
                    </h3>

                    <p className="text-[#808080]">{product.description}</p>

                    {/* Specs */}
                    <div className="space-y-2">
                      {product.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-[#808080]"
                        >
                          <div className="w-1 h-1 bg-[#ff0000] mr-2" />
                          {spec}
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-[#333333] text-white text-sm tracking-widest hover:bg-[#ff0000] transition-colors"
                    >
                      SHIKO DETAJET
                    </motion.button>
                  </div>
                </div>

                {/* Red accent line */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#ff0000] group-hover:h-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
