"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Artan Berisha",
    role: "Developer",
    comment:
      "Shërbimi më profesional që kam hasur ndonjëherë. Stafi është shumë i përgatitur dhe produktet janë origjinale.",
    rating: 5,
  },
  {
    id: 2,
    name: "Linda Krasniqi",
    role: "Designer",
    comment:
      "Çmimet më të mira në treg dhe shërbim shumë profesional. Do të rekomandoja për këdo që kërkon cilësi.",
    rating: 5,
  },
  {
    id: 3,
    name: "Blerim Gashi",
    role: "Business Owner",
    comment:
      "Produktet më të fundit dhe këshillim profesional. Gajtani është zgjedhja më e mirë për teknologji.",
    rating: 5,
  },
];

export default function ClientFeedback() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-1 bg-[#ff0000]/10" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-[#ff0000]/10" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tight text-[#333333]">
            KLIENTËT <span className="text-[#ff0000]">TANË</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-[#ff0000] mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#f5f5f5] p-8 relative group"
              >
                {/* Red accent line */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#ff0000] group-hover:h-full transition-all duration-300" />

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-[#ff0000]"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#808080] mb-6 italic">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-bold text-[#333333]">{testimonial.name}</p>
                  <p className="text-sm text-[#808080]">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
