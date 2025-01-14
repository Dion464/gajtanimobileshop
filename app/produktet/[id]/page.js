"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { productImages } from "../../config/images";

const productDetails = {
  iphone: {
    name: "iPhone 15 Pro Max",
    category: "FLAGSHIP",
    description: "The most powerful iPhone ever created",
    image: productImages.iphone,
    specs: [
      { label: "Processor", value: "A17 Pro Chip" },
      { label: "Camera", value: "48MP Main Camera" },
      { label: "Display", value: '6.7" Super Retina XDR' },
      { label: "Material", value: "Titanium Design" },
    ],
    features: [
      "Advanced Camera System",
      "All-day Battery Life",
      "ProMotion Technology",
      "Ceramic Shield",
    ],
  },
};

export default function ProductDetail({ params }) {
  const product = productDetails[params.id];

  return (
    <div className="min-h-screen bg-[#f5f5f5] pt-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative aspect-square bg-white p-8">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <p className="text-[#ff0000] text-sm tracking-widest">
                {product.category}
              </p>
              <h1 className="text-4xl font-bold text-[#333333] mt-2">
                {product.name}
              </h1>
              <p className="text-[#808080] mt-4">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#333333]">
                SPECIFICATIONS
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="bg-white p-4">
                    <p className="text-sm text-[#808080]">{spec.label}</p>
                    <p className="text-[#333333] font-bold mt-1">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#333333]">KEY FEATURES</h2>
              <div className="space-y-2">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-[#ff0000]" />
                    <p className="text-[#808080]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-[#333333] text-white py-4 hover:bg-[#ff0000] transition-colors tracking-widest"
              >
                ADD TO CART
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 border-2 border-[#333333] text-[#333333] py-4 hover:bg-[#333333] hover:text-white transition-colors tracking-widest"
              >
                LEARN MORE
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
