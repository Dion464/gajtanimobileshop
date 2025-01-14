"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-[#ff0000]">G</span>
              <span className="text-[#333333]">AJTANI</span>
            </h3>
            <p className="text-[#808080] mb-6">
              Teknologjia e së ardhmes, sot në duart tuaja.
            </p>
            <div className="flex space-x-4">
              {["Facebook", "Instagram", "Twitter"].map((social) => (
                <motion.a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-[#333333] text-white flex items-center justify-center hover:bg-[#ff0000] transition-colors"
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#333333] tracking-widest mb-6">
              QUICK LINKS
            </h4>
            {["Products", "Services", "About Us", "Contact"].map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(" ", "-")}`}
                className="block text-[#808080] hover:text-[#ff0000] transition-colors mb-3"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-[#333333] tracking-widest mb-6">
              CONTACT INFO
            </h4>
            <div className="space-y-4 text-[#808080]">
              <p>Prishtinë, Kosovë</p>
              <p>+383 44 123 456</p>
              <p>info@gajtani.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-[#333333] tracking-widest mb-6">
              NEWSLETTER
            </h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white border border-[#808080]/20 px-4 py-3 outline-none focus:border-[#ff0000] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full bg-[#333333] text-white py-3 hover:bg-[#ff0000] transition-colors text-sm tracking-widest"
              >
                SUBSCRIBE
              </motion.button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#808080]/20 text-center text-[#808080]">
          <p>© {new Date().getFullYear()} Gajtani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
