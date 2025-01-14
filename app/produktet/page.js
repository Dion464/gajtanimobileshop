"use client";
import { motion } from "framer-motion";
import { productImages } from "../config/images";

const allProducts = [
  // Apple Products
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "APPLE FLAGSHIP",
    description: "The most powerful iPhone ever",
    image: productImages.iphone,
    specs: ["A17 Pro Chip", "Titanium Design", "48MP Camera"],
  },
  {
    id: 2,
    name: "Apple Watch Ultra 2",
    category: "APPLE WEARABLE",
    description: "Adventure awaits",
    image: productImages.appleWatch,
    specs: ["Titanium Case", "Action Button", "Advanced GPS"],
  },
  {
    id: 3,
    name: "MacBook Air M2",
    category: "APPLE LAPTOP",
    description: "Power. It's in the Air",
    image: productImages.macbook,
    specs: ["M2 Chip", "18h Battery", "Fanless Design"],
  },
  {
    id: 4,
    name: "iPad Pro",
    category: "APPLE TABLET",
    description: "Supercharged by M2",
    image: productImages.ipad,
    specs: ["M2 chip", "Liquid Retina XDR", "ProMotion"],
  },
  // Samsung Products
  {
    id: 5,
    name: "Samsung S24 Ultra",
    category: "SAMSUNG FLAGSHIP",
    description: "Ultimate Android Experience",
    image: productImages.samsung,
    specs: ["Snapdragon 8 Gen 3", "AI Features", "200MP Camera"],
  },
  {
    id: 6,
    name: "Samsung Galaxy Z Fold5",
    category: "SAMSUNG FOLDABLE",
    description: "Unfold your world",
    image: productImages.fold,
    specs: ["Flex Hinge", '7.6" Display', "IPX8 Water Resistant"],
  },
  {
    id: 7,
    name: "Samsung Galaxy Watch6",
    category: "SAMSUNG WEARABLE",
    description: "Advanced health monitoring",
    image: productImages.watch,
    specs: ["BioActive Sensor", "Sapphire Crystal", "40h Battery"],
  },
  {
    id: 8,
    name: "Samsung Galaxy Tab S9 Ultra",
    category: "SAMSUNG TABLET",
    description: "The ultimate tablet experience",
    image: productImages.tab,
    specs: ['14.6" AMOLED', "S Pen included", "Snapdragon 8 Gen 2"],
  },
];

export default function ProductsPage() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allProducts.map((product, index) => (
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
                  {/* Product Image */}
                  <div className="relative aspect-square mb-6 bg-[#f5f5f5] p-4">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
