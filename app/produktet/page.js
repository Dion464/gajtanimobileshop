"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "macbook",
    name: "MacBook Air M2",
    category: "LAPTOP I FUQISHËM",
    description: "I fuqishëm dhe i lehtë",
    image: "/MacBookAirM2.avif"
  },
  {
    id: "iphone15pro",
    name: "iPhone 15 Pro Max",
    category: "TELEFONI KRYESUES",
    description: "iPhone-i më i fuqishëm ndonjëherë",
    image: "/iphone15promax.avif"
  },
  {
    id: "iphone",
    name: "iPhone 15",
    category: "TELEFON APPLE",
    description: "Një mënyrë magjike për të përjetuar iPhone",
    image: "/iphone.avif"
  },
  {
    id: "iphoneangle",
    name: "iPhone 15 Pro",
    category: "TELEFONI KRYESUES",
    description: "Fotografimi në iPhone në nivelin tjetër",
    image: "/iphonefrom anotherangele.avif"
  },
  {
    id: "ipadpro",
    name: "iPad Pro",
    category: "TABLET PROFESIONAL",
    description: "Kompjuteri juaj i ardhshëm nuk është kompjuter",
    image: "/iPad Pro.avif"
  },
  {
    id: "applewatch",
    name: "Apple Watch Series 9",
    category: "ORË INTELIGJENTE",
    description: "Monitorimi i avancuar i shëndetit",
    image: "/applewatch.avif"
  },
  {
    id: "applewatchultra",
    name: "Apple Watch Ultra 2",
    category: "ORË PREMIUM",
    description: "Aventura ju pret",
    image: "/applewatchultra2.avif"
  },
  {
    id: "galaxyfold",
    name: "Samsung Galaxy Z Fold 5",
    category: "TELEFON I PALOSSHËM",
    description: "Shpalosni botën tuaj",
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
          className="text-4xl font-bold text-center mb-12"
        >
          Të Gjitha Produktet
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
                <div className="relative bg-white p-6 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative h-[260px] w-full mb-6">
                    <div className="absolute inset-0 bg-[#f8f8f8] rounded-xl">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <p className="text-[#ff0000] text-sm tracking-widest">
                      {product.category}
                    </p>
                    <h2 className="text-xl font-bold text-[#333333]">
                      {product.name}
                    </h2>
                    <p className="text-[#808080]">
                      {product.description}
                    </p>
                  </div>

                  {/* Bottom Line Animation */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff0000] group-hover:w-full transition-all duration-300" />
                  
                  {/* Right Line Animation */}
                  <div className="absolute top-0 right-0 h-0 w-0.5 bg-[#ff0000] group-hover:h-full transition-all duration-300 delay-150" />
                  
                  {/* Top Line Animation */}
                  <div className="absolute top-0 right-0 w-0 h-0.5 bg-[#ff0000] group-hover:w-full transition-all duration-300 delay-300" />
                  
                  {/* Left Line Animation */}
                  <div className="absolute top-0 left-0 h-0 w-0.5 bg-[#ff0000] group-hover:h-full transition-all duration-300 delay-450" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
