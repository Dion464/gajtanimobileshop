"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "macbook",
    name: "MacBook Air M2",
    description: "Powerful and lightweight",
    image: "/MacBookAirM2.avif"
  },
  {
    id: "iphone15pro",
    name: "iPhone 15 Pro Max",
    description: "The most powerful iPhone ever",
    image: "/iphone15promax.avif"
  },
  {
    id: "iphone",
    name: "iPhone 15",
    description: "A magical new way to experience iPhone",
    image: "/iphone.avif"
  },
  {
    id: "iphoneangle",
    name: "iPhone 15 Pro",
    description: "Shot on iPhone taken to the next level",
    image: "/iphonefrom anotherangele.avif"
  },
  {
    id: "ipadpro",
    name: "iPad Pro",
    description: "Your next computer is not a computer",
    image: "/iPad Pro.avif"
  },
  {
    id: "applewatch",
    name: "Apple Watch Series 9",
    description: "Advanced health monitoring",
    image: "/applewatch.avif"
  },
  {
    id: "applewatchultra",
    name: "Apple Watch Ultra 2",
    description: "Adventure awaits",
    image: "/applewatchultra2.avif"
  },
  {
    id: "galaxyfold",
    name: "Samsung Galaxy Z Fold 5",
    description: "Unfold your world",
    image: "/SamsungGalaxyZFold5.avif"
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-12"
        >
          All Products
        </motion.h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/produktet/${product.id}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative w-full h-[280px]">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300 z-10" />
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-4 transform transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
