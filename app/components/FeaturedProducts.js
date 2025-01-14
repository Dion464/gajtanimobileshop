"use client";
import { motion } from "framer-motion";
import { productImages } from "../config/images";

const featuredProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "FLAGSHIP",
    image: productImages.iphone,
    specs: ["A17 Pro", "Titanium Design", "48MP Camera"],
  },
  {
    id: 2,
    name: "Samsung S24 Ultra",
    category: "FLAGSHIP",
    image: productImages.samsung,
    specs: ["Snapdragon 8 Gen 3", "AI Features", "200MP Camera"],
  },
  {
    id: 3,
    name: "Apple Watch Ultra",
    category: "WEARABLE",
    image: productImages.appleWatch,
    specs: ["Titanium Case", "Action Button", "Advanced GPS"],
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-full w-[1px] bg-[#808080]/10 transform translate-x-1/2"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl font-bold tracking-tight text-[#333333]">
            PRODUKTET <span className="text-[#ff0000]">KRYESORE</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-[#ff0000] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-[#f5f5f5] p-8 relative">
                {/* Decorative elements */}
                <div className="absolute -inset-1 border border-[#333333] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                <div className="absolute -inset-1 border border-[#ff0000] rotate-2 group-hover:rotate-0 transition-transform duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Product Image */}
                  <div className="relative aspect-square mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm tracking-widest text-[#ff0000] mb-1">
                        {product.category}
                      </p>
                      <h3 className="text-2xl font-bold text-[#333333]">
                        {product.name}
                      </h3>
                    </div>

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
