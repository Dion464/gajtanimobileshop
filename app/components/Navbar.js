"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-lg">
      {/* This should be RED on mobile and BLUE on desktop */}
      <div className="h-20 bg-red-500 md:bg-blue-500 flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-white text-xl">GAJTANI MOBILE</div>

        {/* This text should only show on mobile */}
        <div className="md:hidden text-white text-xl">MOBILE VIEW</div>

        {/* This text should only show on desktop */}
        <div className="hidden md:block text-white text-xl">DESKTOP VIEW</div>
      </div>
    </div>
  );
}
