"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 'iphone15pro',
    name: 'iPhone 15 Pro Max',
    category: 'TELEFONI KRYESUES',
    description: 'Përjetoni të ardhmen e telefonisë mobile me iPhone-in më të avancuar të krijuar ndonjëherë. Me çipin revolucionar A17 Pro dhe sistemin e ri të kamerës.',
    image: '/iphone15promax.avif'
  },
  {
    id: 'samsungs24',
    name: 'Samsung Galaxy S24 Ultra',
    category: 'FUQIA E AI',
    description: 'Zbuloni fuqinë e inteligjencës artificiale me Galaxy S24 Ultra. Inteligjenca mobile revolucionare takon performancën e pakrahasueshme.',
    image: '/samsungs24.avif'
  },
  {
    id: 'galaxyfold',
    name: 'Galaxy Z Fold 5',
    category: 'TEKNOLOGJI TRANSFORMUESE',
    description: 'Ripërcaktoni mundësitë me përvojën përfundimtare të telefonit që paloset. Ku inovacioni takon versatilitetin.',
    image: '/SamsungGalaxyZFold5.avif'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
          Produktet e Veçanta
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group h-[400px] perspective"
            >
              <div className="relative h-full w-full transition-transform duration-500 preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="h-full bg-white p-6 rounded-2xl shadow-md">
                    <div className="relative h-[250px] w-full mb-6">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-red-600 text-sm tracking-widest">
                        {product.category}
                      </p>
                      <h3 className="text-xl font-bold text-gray-900">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden">
                  <div className="h-full bg-white p-6 rounded-2xl shadow-md flex flex-col justify-center">
                    <p className="text-gray-600 text-center text-lg leading-relaxed">
                      {product.description}
                    </p>
                    <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
                      Shiko më shumë
                    </button>
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
