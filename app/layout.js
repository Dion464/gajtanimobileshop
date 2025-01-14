import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gajtani Mobileshop - Teknologjia e Së Ardhmes",
  description:
    "Dyqani juaj i besuar i teknologjisë në Prishtinë që nga viti 2000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen bg-[#1a1a1a]">
          <div className="fixed inset-0 bg-gradient-to-br from-red-500/5 via-gray-900/50 to-black pointer-events-none" />
          <div className="fixed inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>
          <Navigation />
          <main className="relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
