"use client";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FeaturedProducts from "./components/FeaturedProducts";
import Testimonials from "./components/Testimonials";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative bg-[#f5f5f5]">
      {/* Background Grid for entire page */}
      <div className="fixed inset-0 grid grid-cols-12 gap-4 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-full w-[1px] bg-[#808080]/10 transform translate-x-1/2"
          />
        ))}
      </div>

      {/* Red accent line */}
      <div className="fixed top-0 left-0 w-1 h-full bg-[#ff0000] pointer-events-none" />

      {/* Main Content */}
      <div className="relative">
        <Hero />

        <Services />

        <FeaturedProducts />

        <Testimonials />

        {/* Features Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-24"
            >
              <h2 className="text-6xl font-bold tracking-tight text-[#333333]">
                PSE TË ZGJIDHNI <span className="text-[#ff0000]">GAJTANI</span>
              </h2>
              <div className="mt-4 h-1 w-24 bg-[#ff0000] mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "CILËSI E GARANTUAR",
                  description:
                    "Të gjitha produktet tona vijnë me garanci të plotë dhe janë 100% origjinale.",
                },
                {
                  title: "SHËRBIM PROFESIONAL",
                  description:
                    "Stafi ynë i trajnuar ofron shërbimin më të mirë të mundshëm.",
                },
                {
                  title: "ÇMIME KONKURRUESE",
                  description:
                    "Ofrojmë çmimet më të mira në treg për produktet më cilësore.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-[#f5f5f5] p-8 relative">
                    {/* Decorative elements */}
                    <div className="absolute -inset-1 border border-[#333333] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                    <div className="absolute -inset-1 border border-[#ff0000] rotate-2 group-hover:rotate-0 transition-transform duration-500" />

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-[#333333] mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-[#808080]">{feature.description}</p>
                    </div>

                    {/* Red accent line */}
                    <div className="absolute top-0 left-0 w-1 h-0 bg-[#ff0000] group-hover:h-full transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}