"use client";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2940&auto=format&fit=crop"
          alt="Tech Store"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-20 h-full max-w-7xl mx-auto px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-7xl font-bold text-white mb-6">
              HISTORIA <span className="text-[#ff0000]">JONË</span>
            </h1>
            <div className="h-1 w-24 bg-[#ff0000]" />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-b from-black to-[#111111]">
        <div className="max-w-7xl mx-auto px-8">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative mb-32"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#ff0000]" />
            <div className="grid grid-cols-1 gap-24">
              {/* 2000 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#ff0000] rounded-full" />
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="mr-auto pr-16 max-w-xl bg-[#1a1a1a] p-8 rounded-lg"
                >
                  <h3 className="text-3xl font-bold text-white mb-4">2000</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Fillimi i rrugëtimit tonë në Prishtinë. Me një vizion të
                    qartë dhe përkushtim ndaj cilësisë, hapëm dyqanin tonë të
                    parë të teknologjisë.
                  </p>
                </motion.div>
              </div>

              {/* Present */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#ff0000] rounded-full" />
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="ml-auto pl-16 max-w-xl bg-[#1a1a1a] p-8 rounded-lg"
                >
                  <h3 className="text-3xl font-bold text-white mb-4">Sot</h3>
                  <p className="text-gray-300 leading-relaxed">
                    23 vite më vonë, jemi bërë destinacioni më i besueshëm për
                    teknologji në Prishtinë, duke u shërbyer mijëra klientëve të
                    kënaqur.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
            {[
              { number: "23+", text: "Vite Përvojë" },
              { number: "10k+", text: "Klientë të Kënaqur" },
              { number: "100%", text: "Produkte Origjinale" },
              { number: "#1", text: "Në Prishtinë" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a1a1a] p-8 rounded-lg text-center group hover:bg-[#ff0000] transition-colors duration-300"
              >
                <div className="text-5xl font-bold text-[#ff0000] group-hover:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white">{stat.text}</div>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Besimi",
                description:
                  "Ndërtojmë marrëdhënie të forta me klientët tanë përmes transparencës dhe ndershmërisë.",
              },
              {
                title: "Cilësia",
                description:
                  "Ofrojmë vetëm produkte origjinale dhe shërbime profesionale të cilësisë së lartë.",
              },
              {
                title: "Përkushtimi",
                description:
                  "Jemi të përkushtuar ndaj kënaqësisë së klientit dhe shërbimit të shkëlqyer.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a1a1a] p-8 rounded-lg group hover:bg-[#ff0000] transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">
              Na vizitoni në dyqanin tonë dhe zbuloni përse jemi
              <span className="text-[#ff0000]"> zgjedhja e parë </span>
              për teknologji në Prishtinë
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#ff0000] text-white text-lg tracking-wider hover:bg-white hover:text-[#ff0000] transition-colors"
            >
              NA KONTAKTONI
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
