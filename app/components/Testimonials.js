"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    content:
      "Shërbimi më i mirë në Prishtinë. Stafi është shumë profesional dhe i gatshëm të ndihmojë.",
    author: "Klient i Kënaqur",
    role: "iPhone User",
    rating: 5,
  },
  {
    content:
      "Çmimet më konkurruese në treg dhe produktet janë 100% origjinale.",
    author: "Blerim K.",
    role: "Samsung User",
    rating: 5,
  },
  {
    content:
      "Riparimi i telefonit tim u bë në kohë rekord dhe me cilësi të lartë.",
    author: "Arta M.",
    role: "Klient i Rregullt",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#f5f5f5] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-full w-[1px] bg-[#808080]/10 transform translate-x-1/2"
          />
        ))}
      </div>

      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#ff0000]" />

      <div className="max-w-7xl mx-auto px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl font-bold tracking-tight text-[#333333]">
            ÇFARË THONË <span className="text-[#ff0000]">KLIENTËT</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-[#ff0000] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white p-8 relative">
                {/* Decorative elements */}
                <div className="absolute -inset-1 border border-[#333333] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                <div className="absolute -inset-1 border border-[#ff0000] rotate-2 group-hover:rotate-0 transition-transform duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-[#ff0000] text-xl"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote>
                    <p className="text-lg font-medium text-[#333333] mb-6 relative">
                      <span className="absolute -top-4 -left-2 text-4xl text-[#ff0000]/20">
                        "
                      </span>
                      {testimonial.content}
                      <span className="absolute -bottom-4 -right-2 text-4xl text-[#ff0000]/20">
                        "
                      </span>
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-[#808080]/20 pt-4">
                    <p className="font-bold text-[#333333]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#808080]">{testimonial.role}</p>
                  </div>
                </div>

                {/* Red accent line */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#ff0000] group-hover:h-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
