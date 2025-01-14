"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navigation() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#ff0000]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20 px-8">
          <Link href="/" className="relative group">
            <span className="text-3xl font-bold tracking-tighter">
              <span className="text-[#ff0000]">G</span>
              <span className="text-[#333333]">AJTANI</span>
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff0000] group-hover:w-full transition-all duration-300" />
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            {[
              ["BALLINA", "/"],
              ["PRODUKTET", "/produktet"],
              ["RRETH NESH", "/rreth-nesh"],
              ["KONTAKTI", "/kontakt"],
            ].map(([name, url]) => (
              <Link
                key={name}
                href={url}
                className="relative"
                onMouseEnter={() => setHoveredLink(name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span className="text-sm tracking-widest text-[#333333] hover:text-[#ff0000] transition-colors">
                  {name}
                </span>
                {hoveredLink === name && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 top-full w-full h-[2px] bg-[#ff0000]"
                  />
                )}
              </Link>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 bg-[#333333] text-white text-sm tracking-widest hover:bg-[#ff0000] transition-colors"
          >
            CONTACT US
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
