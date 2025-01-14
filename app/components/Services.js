"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "RIPARIME PROFESIONALE",
    description:
      "Shërbime të shpejta dhe profesionale për të gjitha llojet e telefonave dhe tabletëve.",
    icon: "🛠️",
    features: ["Express Service", "Garanci 12 Muaj", "Pjesë Origjinale"],
  },
  {
    title: "AKSESORË PREMIUM",
    description:
      "Koleksioni i aksesorëve origjinalë nga brendet më të njohura.",
    icon: "📱",
    features: ["Apple Certified", "Samsung Original", "Premium Quality"],
  },
  {
    title: "KËSHILLIM TEKNIK",
    description: "Ekspertizë profesionale për zgjedhjen e pajisjes ideale.",
    icon: "💡",
    features: ["Personal Support", "Expert Advice", "Best Deals"],
  },
  {
    title: "GARANCI E PLOTË",
    description: "Siguri e plotë për të gjitha produktet dhe shërbimet.",
    icon: "✅",
    features: ["Money Back", "Price Match", "Full Support"],
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-full w-[1px] bg-[#808080]/5" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold tracking-tight text-[#333333]">
            PROFESSIONAL <span className="text-[#ff0000]">SERVICES</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-[#ff0000] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-[#f5f5f5] p-8 h-full transition-transform duration-300 hover:-translate-y-2">
                {/* Red accent line */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#ff0000] group-hover:h-full transition-all duration-300" />

                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#333333] mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-[#808080] mb-6">{service.description}</p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-[#808080]"
                    >
                      <div className="w-1 h-1 bg-[#ff0000] mr-2" />
                      {feature}
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
