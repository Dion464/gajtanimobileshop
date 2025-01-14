"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const productDetails = {
  iphone15pro: {
    name: "iPhone 15 Pro Max",
    category: "APPLE FLAGSHIP",
    description: "The most powerful iPhone ever created",
    image: "/iphone15promax.avif",
    specs: [
      { label: "Processor", value: "A17 Pro Chip" },
      { label: "Camera", value: "48MP Main Camera" },
      { label: "Display", value: '6.7" Super Retina XDR' },
      { label: "Material", value: "Titanium Design" }
    ],
    features: [
      "Advanced Camera System",
      "All-day Battery Life",
      "ProMotion Technology",
      "Ceramic Shield"
    ]
  },
  iphone: {
    name: "iPhone 15",
    category: "APPLE SMARTPHONE",
    description: "A magical new way to experience iPhone",
    image: "/iphone.avif",
    specs: [
      { label: "Processor", value: "A16 Bionic" },
      { label: "Camera", value: "48MP Camera System" },
      { label: "Display", value: "Super Retina XDR" },
      { label: "Design", value: "Ceramic Shield" }
    ],
    features: [
      "Dynamic Island",
      "All-day Battery Life",
      "Advanced Camera",
      "5G Capable"
    ]
  },
  iphoneangle: {
    name: "iPhone 15 Pro",
    category: "APPLE FLAGSHIP",
    description: "Shot on iPhone taken to the next level",
    image: "/iphonefrom anotherangele.avif",
    specs: [
      { label: "Design", value: "Titanium Design" },
      { label: "Camera", value: "Pro Camera System" },
      { label: "Chip", value: "A17 Pro Chip" },
      { label: "Display", value: "ProMotion Technology" }
    ],
    features: [
      "Pro Camera Features",
      "Action Button",
      "USB-C",
      "Titanium Design"
    ]
  },
  applewatch: {
    name: "Apple Watch Series 9",
    category: "PREMIUM SMARTWATCH",
    description: "Advanced health monitoring and connectivity",
    image: "/applewatch.avif",
    specs: [
      { label: "Display", value: "Always-On Retina" },
      { label: "Health", value: "Advanced Health Sensors" },
      { label: "Chip", value: "S9 SiP" },
      { label: "Battery", value: "18-hour Battery Life" }
    ],
    features: [
      "Health Monitoring",
      "Always-On Display",
      "Water Resistant",
      "Double Tap Gesture"
    ]
  },
  applewatchultra: {
    name: "Apple Watch Ultra 2",
    category: "PREMIUM SMARTWATCH",
    description: "The most rugged and capable Apple Watch",
    image: "/applewatchultra2.avif",
    specs: [
      { label: "Case", value: "49mm Titanium" },
      { label: "Display", value: "Always-On Retina" },
      { label: "Battery", value: "36-hour Battery Life" },
      { label: "Water Resistance", value: "100m" }
    ],
    features: [
      "Titanium Case",
      "Action Button",
      "Dual-Frequency GPS",
      "Customizable Action Button"
    ]
  },
  samsungs24: {
    name: "Samsung Galaxy S24",
    category: "ANDROID FLAGSHIP",
    description: "The latest Samsung flagship experience",
    image: "/samsungs24.avif",
    specs: [
      { label: "Processor", value: "Snapdragon 8 Gen 3" },
      { label: "Camera", value: "200MP Main Camera" },
      { label: "Display", value: "Dynamic AMOLED 2X" },
      { label: "AI", value: "Galaxy AI Features" }
    ],
    features: [
      "AI Photography",
      "Real-time Translation",
      "Ray Tracing Graphics",
      "All-day Battery"
    ]
  },
  galaxywatch: {
    name: "Samsung Galaxy Watch 6",
    category: "PREMIUM SMARTWATCH",
    description: "Advanced health and fitness tracking",
    image: "/SamsungGalaxyWatch6.jpg",
    specs: [
      { label: "Display", value: "Super AMOLED" },
      { label: "Health", value: "Advanced BioActive Sensor" },
      { label: "Battery", value: "Multi-day Battery" },
      { label: "Design", value: "Rotating Bezel" }
    ],
    features: [
      "Sleep Coaching",
      "Body Composition",
      "ECG Monitoring",
      "Fall Detection"
    ]
  },
  galaxyfold: {
    name: "Samsung Galaxy Z Fold 5",
    category: "FOLDABLE FLAGSHIP",
    description: "Transform your experience",
    image: "/SamsungGalaxyZFold5.avif",
    specs: [
      { label: "Display", value: "7.6\" Main Display" },
      { label: "Processor", value: "Snapdragon 8 Gen 2" },
      { label: "Camera", value: "50MP Main Camera" },
      { label: "Battery", value: "4400mAh" }
    ],
    features: [
      "Flex Mode",
      "S Pen Compatible",
      "IPX8 Water Resistant",
      "Multi-Active Window"
    ]
  }
};

export default function ProductDetail({ params }) {
  const product = productDetails[params.id];

  return (
    <div className="min-h-screen bg-[#f5f5f5] pt-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image - Updated with hover effects and consistent sizing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
              <Image
                src={`/images/${product.image}`}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-8 transition-transform duration-300 group-hover:scale-110"
                priority
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
