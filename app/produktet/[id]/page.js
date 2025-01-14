"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { use } from 'react';
import Link from 'next/link';
import { FaPhone, FaArrowLeft } from 'react-icons/fa';

const productDetails = {
  macbook: {
    name: "MacBook Air M2",
    category: "LAPTOP I FUQISHËM",
    description: "I fuqishëm dhe i lehtë",
    image: "/MacBookAirM2.avif",
    specs: [
      { label: "Procesori", value: "M2 Chip" },
      { label: "Memoria", value: "8GB Unified Memory" },
      { label: "Ekrani", value: "13.6-inch Liquid Retina" },
      { label: "Bateria", value: "Deri në 18 orë" }
    ],
    features: [
      "Dizajn i Hollë dhe i Lehtë",
      "Performancë e Jashtëzakonshme",
      "Ekran Brilliant",
      "Magic Keyboard"
    ]
  },
  iphone15pro: {
    name: "iPhone 15 Pro Max",
    category: "TELEFONI KRYESUES",
    description: "iPhone-i më i fuqishëm ndonjëherë",
    image: "/iphone15promax.avif",
    specs: [
      { label: "Procesori", value: "A17 Pro Chip" },
      { label: "Kamera", value: "48MP Kamera Kryesore" },
      { label: "Ekrani", value: '6.7" Super Retina XDR' },
      { label: "Materiali", value: "Dizajn Titanium" }
    ],
    features: [
      "Sistem i Avancuar i Kamerës",
      "Bateria Gjatë Gjithë Ditës",
      "Teknologjia ProMotion",
      "Ceramic Shield"
    ]
  },
  iphone: {
    name: "iPhone 15",
    category: "TELEFON APPLE",
    description: "Një mënyrë magjike për të përjetuar iPhone",
    image: "/iphone.avif",
    specs: [
      { label: "Procesori", value: "A16 Bionic" },
      { label: "Kamera", value: "Sistem 48MP" },
      { label: "Ekrani", value: "Super Retina XDR" },
      { label: "Dizajni", value: "Ceramic Shield" }
    ],
    features: [
      "Dynamic Island",
      "Bateria Gjatë Gjithë Ditës",
      "Kamera e Avancuar",
      "5G Capable"
    ]
  },
  iphoneangle: {
    name: "iPhone 15 Pro",
    category: "TELEFONI KRYESUES",
    description: "Shot on iPhone në nivelin tjetër",
    image: "/iphonefrom anotherangele.avif",
    specs: [
      { label: "Dizajni", value: "Titanium" },
      { label: "Kamera", value: "Sistem Pro" },
      { label: "Çipi", value: "A17 Pro" },
      { label: "Ekrani", value: "ProMotion" }
    ],
    features: [
      "Veçori Pro të Kamerës",
      "Butoni Action",
      "USB-C",
      "Dizajn Titanium"
    ]
  },
  ipadpro: {
    name: "iPad Pro",
    category: "TABLET PROFESIONAL",
    description: "Kompjuteri juaj i ardhshëm nuk është kompjuter",
    image: "/iPad Pro.avif",
    specs: [
      { label: "Çipi", value: "M2" },
      { label: "Ekrani", value: "Liquid Retina XDR" },
      { label: "Kamera", value: "12MP Ultra Wide" },
      { label: "Lidhja", value: "5G" }
    ],
    features: [
      "Apple Pencil Hover",
      "Center Stage",
      "Thunderbolt / USB 4",
      "Face ID"
    ]
  },
  applewatch: {
    name: "Apple Watch Series 9",
    category: "ORË INTELIGJENTE",
    description: "Monitorimi i avancuar i shëndetit",
    image: "/applewatch.avif",
    specs: [
      { label: "Ekrani", value: "Always-On Retina" },
      { label: "Shëndeti", value: "Sensorë të Avancuar" },
      { label: "Çipi", value: "S9 SiP" },
      { label: "Bateria", value: "18-orë" }
    ],
    features: [
      "Monitorimi i Shëndetit",
      "Ekran Always-On",
      "Rezistent ndaj Ujit",
      "Double Tap Gesture"
    ]
  },
  applewatchultra: {
    name: "Apple Watch Ultra 2",
    category: "ORË PREMIUM",
    description: "Ora më e fuqishme dhe e aftë Apple",
    image: "/applewatchultra2.avif",
    specs: [
      { label: "Madhësia", value: "49mm Titanium" },
      { label: "Ekrani", value: "Always-On Retina" },
      { label: "Bateria", value: "36-orë" },
      { label: "Rezistenca ndaj Ujit", value: "100m" }
    ],
    features: [
      "Kasa Titanium",
      "Butoni Action",
      "GPS Dual-Frequency",
      "Butoni Action i Personalizueshëm"
    ]
  },
  galaxyfold: {
    name: "Samsung Galaxy Z Fold 5",
    category: "TELEFON I PALOSSHËM",
    description: "Shpalosni botën tuaj",
    image: "/SamsungGalaxyZFold5.avif",
    specs: [
      { label: "Ekrani", value: '7.6" Ekrani Kryesor' },
      { label: "Procesori", value: "Snapdragon 8 Gen 2" },
      { label: "Kamera", value: "50MP Kamera Kryesore" },
      { label: "Bateria", value: "4400mAh" }
    ],
    features: [
      "Flex Mode",
      "S Pen Compatible",
      "IPX8 Rezistent ndaj Ujit",
      "Multi-Active Window"
    ]
  }
};

const contactNumbers = [
  { number: "044 131 000", label: "Kontakt 1" },
  { number: "044 684 007", label: "Kontakt 2" }
];

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
            <div className="relative w-full aspect-square bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
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
              <h2 className="text-xl font-bold text-[#333333]">
                SPECIFIKIMET
              </h2>
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
              <h2 className="text-xl font-bold text-[#333333]">VEÇORITË KRYESORE</h2>
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
                  href={`tel:${contact.number.replace(/\s/g, '')}`}
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
