"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { use } from "react";
import Link from "next/link";
import { FaPhone, FaArrowLeft } from "react-icons/fa";

const productDetails = {
  iphone16promax: {
    name: "iPhone 16 Pro Max",
    category: "TELEFON PREMIUM",
    description: "Telefoni më i ri nga Apple me kamerë të përmirësuar",
    image:
      "/iphone16promax.jpeg",
    specs: [
      { label: "Procesori", value: "A17 Pro Chip" },
      { label: "Kamera", value: "48MP Kamera Kryesore" },
      { label: "Ekrani", value: '6.7" Super Retina XDR' },
      { label: "Materiali", value: "Dizajn Titanium" },
    ],
    features: [
      "Sistem i Avancuar i Kamerës",
      "USB-C Port",
      "Dynamic Island",
      "Action Button",
    ],
  },
  iphone15promax: {
    name: "iPhone 15 Pro Max",
    category: "TELEFON PREMIUM",
    description: "Telefoni më i ri nga Apple me kamerë të përmirësuar",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
    specs: [
      { label: "Procesori", value: "A17 Pro Chip" },
      { label: "Kamera", value: "48MP Kamera Kryesore" },
      { label: "Ekrani", value: '6.7" Super Retina XDR' },
      { label: "Materiali", value: "Dizajn Titanium" },
    ],
    features: [
      "Sistem i Avancuar i Kamerës",
      "USB-C Port",
      "Dynamic Island",
      "Action Button",
    ],
  },
  iphone15pro: {
    name: "iPhone 15 Pro",
    category: "TELEFON PREMIUM",
    description: "Teknologji e avancuar me çip A17 Pro",
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg",
    specs: [
      { label: "Procesori", value: "A17 Pro" },
      { label: "Kamera", value: "48MP Triple Camera" },
      { label: "Ekrani", value: '6.1" Super Retina XDR' },
      { label: "Materiali", value: "Titanium Frame" },
    ],
    features: [
      "ProMotion Display",
      "Always-On Display",
      "Action Button",
      "USB-C Port",
    ],
  },
  iphone15plus: {
    name: "iPhone 15 Plus",
    category: "TELEFON FLAGSHIP",
    description: "Ekran 6.7 inch me Dynamic Island",
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-plus-1.jpg",
    specs: [
      { label: "Procesori", value: "A16 Bionic" },
      { label: "Kamera", value: "48MP Dual Camera" },
      { label: "Ekrani", value: '6.7" Super Retina XDR' },
      { label: "Bateria", value: "4383 mAh" },
    ],
    features: [
      "Dynamic Island",
      "USB-C Port",
      "Emergency SOS",
      "Ceramic Shield",
    ],
  },
  samsungs24ultra: {
    name: "Samsung Galaxy S24 Ultra",
    category: "TELEFON PREMIUM",
    description: "Telefoni më i avancuar nga Samsung me Galaxy AI",
    image: "/samsung.jpeg",
    specs: [
      { label: "Procesori", value: "Snapdragon 8 Gen 3" },
      { label: "Kamera", value: "200MP + 50MP + 12MP + 10MP" },
      { label: "Ekrani", value: '6.8" QHD+ Dynamic AMOLED 2X' },
      { label: "Bateria", value: "5000 mAh" },
    ],
    features: [
      "S Pen i Integruar",
      "Galaxy AI Features",
      "Kornizë Titanium",
      "45W Fast Charging",
    ],
  },
  macbookpro16: {
    name: "MacBook Pro 16",
    category: "LAPTOP",
    description: "Laptop profesional me çip M3 Max",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-macbook-pro-14-16-m3-2023-1.jpg",
    specs: [
      { label: "Procesori", value: "Apple M3 Max" },
      { label: "RAM", value: "Up to 128GB Unified" },
      { label: "Ekrani", value: '16.2" Liquid Retina XDR' },
      { label: "Storage", value: "Up to 8TB SSD" },
    ],
    features: [
      "ProMotion Technology",
      "Mini-LED Display",
      "Magic Keyboard",
      "Studio Quality Mics",
    ],
  },
  ipadpro: {
    name: "iPad Pro 12.9",
    category: "TABLET",
    description: "Tableti profesional me çip M2",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-pro-129-2022-1.jpg",
    specs: [
      { label: "Procesori", value: "Apple M2" },
      { label: "Ekrani", value: '12.9" Mini-LED' },
      { label: "Kamera", value: "12MP Wide + 10MP Ultra-wide" },
      { label: "Storage", value: "Up to 2TB" },
    ],
    features: [
      "Apple Pencil 2 Support",
      "Face ID",
      "Thunderbolt Port",
      "ProMotion 120Hz",
    ],
  },
  s24plus: {
    name: "Samsung Galaxy S24+",
    category: "TELEFON FLAGSHIP",
    description: "Performancë e lartë me ekran Dynamic AMOLED",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/levant/2401/gallery/levant-galaxy-s24-plus-s926-sm-s926bzageue-thumb-537239831",
    specs: [
      { label: "Procesori", value: "Snapdragon 8 Gen 3" },
      { label: "Kamera", value: "50MP Triple Camera" },
      { label: "Ekrani", value: '6.7" Dynamic AMOLED 2X' },
      { label: "Bateria", value: "4900 mAh" },
    ],
    features: [
      "AI Features",
      "45W Fast Charging",
      "Galaxy AI",
      "Vision Booster",
    ],
  },
  samsungzflip: {
    name: "Samsung Galaxy Z Flip 5",
    category: "TELEFON PREMIUM",
    description: "Telefoni palosshëm me ekran të jashtëm 3.4 inch",
    image: "/zflip.jpeg",
    specs: [
      { label: "Procesori", value: "Snapdragon 8 Gen 2" },
      { label: "Kamera", value: "12MP + 12MP Ultra Wide" },
      { label: "Ekrani", value: '6.7" Dynamic AMOLED 2X' },
      { label: "Ekrani i Jashtëm", value: '3.4" Super AMOLED' },
    ],
    features: [
      "Flex Mode",
      "IPX8 Water Resistant",
      "Wireless Charging",
      "Flex Window",
    ],
  },
  tabs9ultra: {
    name: "Samsung Galaxy Tab S9 Ultra",
    category: "TABLET",
    description: "Tableti më i fuqishëm nga Samsung me S Pen",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s9-ultra.jpg",
    specs: [
      { label: "Procesori", value: "Snapdragon 8 Gen 2" },
      { label: "Ekrani", value: '14.6" Dynamic AMOLED 2X 120Hz' },
      { label: "RAM", value: "12GB / 16GB" },
      { label: "Storage", value: "256GB / 512GB / 1TB" },
    ],
    features: [
      "S Pen i Përfshirë",
      "IP68 Water Resistant",
      "Samsung DeX",
      "Quad Speakers by AKG",
    ],
  },
  bookpro: {
    name: "Samsung Galaxy Book3 Pro",
    category: "LAPTOP",
    description: "Laptop i hollë me ekran AMOLED",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uk/np940xfg-kb1uk/gallery/uk-galaxy-book3-pro-np940-np940xfg-kb1uk-534606737",
    specs: [
      { label: "Procesori", value: "13th Gen Intel Core" },
      { label: "Ekrani", value: '16" Dynamic AMOLED 2X' },
      { label: "RAM", value: "Up to 32GB" },
      { label: "Storage", value: "Up to 1TB SSD" },
    ],
    features: [
      "120Hz Display",
      "AKG Speakers",
      "Galaxy Ecosystem",
      "Thunderbolt 4",
    ],
  },
  xiaomi14pro: {
    name: "Xiaomi 14 Pro",
    category: "TELEFON PREMIUM",
    description: "Teknologjia më e fundit e inovacionit",
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-pro-2.jpg",
    specs: [
      { label: "Procesori", value: "Snapdragon 8 Gen 3" },
      { label: "Kamera", value: "50MP Leica Optics" },
      { label: "Ekrani", value: '6.73" LTPO AMOLED' },
      { label: "Bateria", value: "4880 mAh" },
    ],
    features: [
      "120W HyperCharge",
      "Leica Cameras",
      "Titanium Frame",
      "Dolby Vision",
    ],
  },
  xiaomi14: {
    name: "Xiaomi 14",
    category: "TELEFON FLAGSHIP",
    description: "Kamera Leica me performancë të lartë",
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-1.jpg",
    specs: [
      { label: "Procesori", value: "Snapdragon 8 Gen 3" },
      { label: "Kamera", value: "50MP Leica System" },
      { label: "Ekrani", value: '6.36" AMOLED' },
      { label: "Bateria", value: "4610 mAh" },
    ],
    features: ["90W Charging", "Leica Optics", "HyperOS", "Dolby Atmos"],
  },
  redminote13pro: {
    name: "Redmi Note 13 Pro+",
    category: "TELEFON MESATAR",
    description: "Kamera 200MP dhe ekran AMOLED 120Hz",
    image:
      "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-plus-1.jpg",
    specs: [
      { label: "Procesori", value: "Dimensity 7200-Ultra" },
      { label: "Kamera", value: "200MP Main Camera" },
      { label: "Ekrani", value: '6.67" AMOLED 120Hz' },
      { label: "Bateria", value: "5000 mAh" },
    ],
    features: [
      "120W HyperCharge",
      "IP68 Rating",
      "1.5K Resolution",
      "Dolby Vision",
    ],
  },
  redmipad: {
    name: "Redmi Pad SE",
    category: "TABLET",
    description: "Tablet i përballueshëm me performancë të mirë",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-pad-se.jpg",
    specs: [
      { label: "Procesori", value: "Snapdragon 680" },
      { label: "Ekrani", value: '11" LCD 90Hz' },
      { label: "Bateria", value: "8000 mAh" },
      { label: "Storage", value: "Up to 128GB" },
    ],
    features: [
      "Quad Speakers",
      "Reading Mode",
      "MicroSD Support",
      "MIUI Pad 14",
    ],
  },
  xiaomipad: {
    name: "Xiaomi Pad 6 Pro",
    category: "TABLET",
    description: "Tablet premium me Snapdragon 8+",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-pad-6-pro.jpg",
    specs: [
      { label: "Procesori", value: "Snapdragon 8+ Gen 1" },
      { label: "Ekrani", value: '11" 144Hz LCD' },
      { label: "RAM", value: "Up to 12GB" },
      { label: "Bateria", value: "8600 mAh" },
    ],
    features: [
      "67W Fast Charging",
      "Dolby Vision",
      "Quad Speakers",
      "Stylus Support",
    ],
  },
  "Samsung Galaxy A25 5G. Best overall.": {
    name: "Samsung Galaxy A25 5G",
    category: "TELEFON MESATAR",
    description: "Telefon i balancuar me performancë të shkëlqyer",
    image: "/samsung2.jpeg",
    specs: [
      { label: "Procesori", value: "Exynos 1280" },
      { label: "Kamera", value: "50MP + 8MP + 2MP" },
      { label: "Ekrani", value: '6.5" Super AMOLED 120Hz' },
      { label: "Bateria", value: "5000 mAh" },
    ],
    features: [
      "5G Connectivity",
      "25W Fast Charging",
      "One UI 6.0",
      "microSD support",
    ],
  },
};

const contactNumbers = [
  { number: "044 131 000", label: "Kontakt 1" },
  { number: "044 684 007", label: "Kontakt 2" },
];

const isExternalImage = (src) => src.startsWith("http");

export default function ProductDetail({ params }) {
  const unwrappedParams = use(params);
  const product = productDetails[unwrappedParams.id];

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] pt-32">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-2xl font-bold">Produkti nuk u gjet</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] pt-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Back Button */}
        <Link href="/produktet">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8 flex items-center gap-2 text-[#333333] hover:text-[#ff0000] transition-colors"
          >
            <FaArrowLeft />
            <span>Kthehu tek Produktet</span>
          </motion.button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group"
          >
            <div className="relative w-full h-[500px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              {product.image && (
                <div className="relative w-full h-full">
                  {isExternalImage(product.image) ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    </div>
                  )}
                </div>
              )}
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
              <h2 className="text-xl font-bold text-[#333333]">SPECIFIKIMET</h2>
              <div className="grid grid-cols-2 gap-4">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="bg-white p-4 rounded-xl">
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
              <h2 className="text-xl font-bold text-[#333333]">
                VEÇORITË KRYESORE
              </h2>
              <div className="space-y-2">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-[#ff0000]" />
                    <p className="text-[#808080]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4">
              {contactNumbers.map((contact, index) => (
                <motion.a
                  key={contact.number}
                  href={`tel:${contact.number.replace(/\s/g, "")}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 w-full bg-[#333333] text-white py-4 rounded-xl hover:bg-[#ff0000] transition-all duration-300"
                >
                  <FaPhone className="animate-pulse" />
                  <span className="tracking-widest">{contact.number}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
