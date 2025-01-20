"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  // Apple Products
  {
    id: "iphone16promax",
    name: "iPhone 16 Pro Max",
    category: "TELEFON PREMIUM",
    description: "Telefoni më i ri nga Apple me kamerë të përmirësuar",
    image:"/iphone16promax.jpeg",
  },
  {
    id: "iphone15promax",
    name: "iPhone 15 Pro Max",
    category: "TELEFON PREMIUM",
    description: "Telefoni më i ri nga Apple me kamerë të përmirësuar",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
  },
  {
    id: "iphone15pro",
    name: "iPhone 15 Pro",
    category: "TELEFON PREMIUM",
    description: "Teknologji e avancuar me çip A17 Pro",
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg",
  },
  {
    id: "iphone15plus",
    name: "iPhone 15 Plus",
    category: "TELEFON FLAGSHIP",
    description: "Ekran 6.7 inch me Dynamic Island",
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-plus-1.jpg",
  },

  {
    id: "ipadpro",
    name: "iPad Pro 12.9",
    category: "TABLET",
    description: "Tableti profesional me çip M2",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-pro-129-2022-1.jpg",
  },

  // Samsung Products
  {
    id: "tabs9ultra",
    name: "Samsung Galaxy Tab S9 Ultra",
    category: "TABLET",
    description: "Tableti më i fuqishëm nga Samsung me S Pen dhe ekran 14.6 inch Dynamic AMOLED 2X",
    image:
      "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s9-ultra.jpg",
  },
  {
    id: "samsungs24ultra",
    name: "Samsung Galaxy S24 Ultra",
    category: "TELEFON PREMIUM",
    description: "Telefoni më i avancuar nga Samsung me Galaxy AI dhe kamerë 200MP",
    image:"/samsung.jpeg",
  },
  {
    id: "Samsung Galaxy A25 5G. Best overall.",
    name: "Samsung Galaxy A25 5G",
    category: "TELEFON MESATAR",
    description: "Telefon i balancuar me ekran Super AMOLED 120Hz dhe performancë të shkëlqyer",
    image:"/samsung2.jpeg",
  },
  {
    id: "samsungzflip",
    name: "Samsung Galaxy Z Flip 5",
    category: "TELEFON PREMIUM",
    description: "Telefoni palosshëm me ekran të jashtëm 3.4 inch dhe Flex Mode",
    image:"/zflip.jpeg",
  },
  // Xiaomi Products
  {
    id: "xiaomi14pro",
    name: "Xiaomi 14 Pro",
    category: "TELEFON PREMIUM",
    description: "Teknologjia më e fundit e inovacionit me Leica Optics",
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-pro-2.jpg",
  },
  {
    id: "xiaomi14",
    name: "Xiaomi 14",
    category: "TELEFON FLAGSHIP",
    description: "Kamera Leica me performancë të lartë dhe Snapdragon 8 Gen 3",
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-1.jpg",
  },
  {
    id: "redminote13pro",
    name: "Redmi Note 13 Pro+",
    category: "TELEFON MESATAR",
    description: "Kamera 200MP dhe ekran AMOLED 120Hz me HyperCharge 120W",
    image:
      "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-plus-1.jpg",
  },
];

const isExternalImage = (src) => src.startsWith("http");

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,0,0,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(0,0,0,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Të Gjitha <span className="text-red-600">Produktet</span>
          </h1>
          <div className="h-1 w-24 bg-red-600 mx-auto rounded-full" />
        </motion.div>

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
                <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-red-500 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative w-full h-[300px] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6">
                    <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                    <div className="absolute top-4 left-8 w-2 h-2 rounded-full bg-red-400 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" />
                    <div className="absolute top-4 left-12 w-2 h-2 rounded-full bg-red-300 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300" />

                    <div className="relative w-[85%] h-[85%] group-hover:scale-110 transition-all duration-700 ease-out">
                      {isExternalImage(product.image) ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain filter group-hover:brightness-110"
                        />
                      ) : (
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain filter group-hover:brightness-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                        />
                      )}
                    </div>
                  </div>

                  <div className="p-8 space-y-4 relative">
                    <div className="absolute left-0 top-0 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-500" />

                    <p className="text-red-600 text-xs font-semibold tracking-wider inline-block px-3 py-1 bg-red-50 rounded-full">
                      {product.category}
                    </p>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <span className="text-red-600 text-sm font-semibold flex items-center">
                        Shiko Detajet
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
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
