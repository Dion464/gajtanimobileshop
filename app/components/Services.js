"use client";
import { motion } from "framer-motion";
import {
  WrenchScrewdriverIcon,
  DevicePhoneMobileIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "RIPARIME PROFESIONALE",
    description:
      "Shërbime të shpejta dhe profesionale për të gjitha llojet e telefonave dhe tabletëve. Ekspertiza jonë siguron cilësi maksimale.",
    icon: WrenchScrewdriverIcon,
    features: [
      "Shërbim Express 24/48h",
      "Garanci 12 Muaj",
      "Pjesë Origjinale të Certifikuara",
    ],
  },
  {
    title: "AKSESORË PREMIUM",
    description:
      "Koleksioni ekskluziv i aksesorëve origjinalë nga brendet më prestigjioze në treg, të përzgjedhur me kujdes për ju.",
    icon: DevicePhoneMobileIcon,
    features: [
      "Produkte të Certifikuara Apple",
      "Aksesorë Origjinal Samsung",
      "Cilësi Premium e Garantuar",
    ],
  },
  {
    title: "KËSHILLIM TEKNIK",
    description:
      "Ekspertiza jonë profesionale në dispozicionin tuaj për të gjetur zgjidhjen perfekte për nevojat tuaja teknologjike.",
    icon: LightBulbIcon,
    features: [
      "Konsulencë e Personalizuar",
      "Këshilla nga Ekspertët",
      "Zgjidhje të Përshtatura",
    ],
  },
  {
    title: "GARANCI E PLOTË",
    description:
      "Siguri absolute për çdo produkt dhe shërbim, me mbështetje të plotë pas shitjes dhe politika të qarta garancie.",
    icon: ShieldCheckIcon,
    features: [
      "Kthim i Parave 30-Ditë",
      "Çmime Konkurruese",
      "Mbështetje e Vazhdueshme",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-gray-100/25 bg-[size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            SHËRBIMET <span className="text-red-600">PROFESIONALE</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-red-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Red accent line */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-red-600 group-hover:h-full transition-all duration-500 rounded-tl-xl rounded-bl-xl" />

                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 flex-shrink-0" />
                      <span className="group-hover:text-red-600 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
