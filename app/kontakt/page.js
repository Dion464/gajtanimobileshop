"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] pt-32">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold tracking-tight text-[#333333]">
            NA <span className="text-[#ff0000]">KONTAKTONI</span>
          </h1>
          <div className="mt-4 h-1 w-24 bg-[#ff0000] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 shadow-lg"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#333333] tracking-wide">
                  EMRI
                </label>
                <input
                  type="text"
                  className="w-full bg-[#f5f5f5] border-b-2 border-[#333333] px-4 py-3 outline-none focus:border-[#ff0000] transition-colors"
                  placeholder="Emri juaj i plotë"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#333333] tracking-wide">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full bg-[#f5f5f5] border-b-2 border-[#333333] px-4 py-3 outline-none focus:border-[#ff0000] transition-colors"
                  placeholder="email@juaj.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#333333] tracking-wide">
                  MESAZHI
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-[#f5f5f5] border-b-2 border-[#333333] px-4 py-3 outline-none focus:border-[#ff0000] transition-colors"
                  placeholder="Shkruani mesazhin tuaj këtu..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#333333] text-white py-4 hover:bg-[#ff0000] transition-colors tracking-widest"
              >
                DËRGO MESAZHIN
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-12"
          >
            {/* Location */}
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-4 tracking-wide">
                LOKACIONI
              </h3>
              <p className="text-[#808080]">Rruga "Agim Ramadani"</p>
              <p className="text-[#808080]">Prishtinë, 10000</p>
              <p className="text-[#808080]">Kosovë</p>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-4 tracking-wide">
                KONTAKTI
              </h3>
              <p className="text-[#808080]">Tel: +383 44 123 456</p>
              <p className="text-[#808080]">Email: info@gajtani.com</p>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-4 tracking-wide">
                ORARI
              </h3>
              <p className="text-[#808080]">E Hënë - E Premte: 09:00 - 20:00</p>
              <p className="text-[#808080]">E Shtunë: 10:00 - 18:00</p>
              <p className="text-[#808080]">E Diel: Mbyllur</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
