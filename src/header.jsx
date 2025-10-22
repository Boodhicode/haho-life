import React, { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

const Header = () => {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Kegunaan", href: "#kegunaan" },
    { name: "Indikasi", href: "#indikasi" },
    { name: "Contact", href: "#contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Header Utama */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-md transition-transform duration-500 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-lg font-bold">HAHO LIFE</h1>
              <p className="text-xs text-slate-500">
                Health for All — Happiness all Over
              </p>
            </div>
          </div>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-purple-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 shadow-md">
              Beli Sekarang
            </button>
          </nav>

          {/* Tombol Mobile */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-gray-700 hover:text-teal-600"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200">
          <h2 className="text-xl font-bold text-purple-700">Menu</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 hover:text-purple-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col mt-6 space-y-4 px-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 text-lg font-medium hover:text-teal-600 transition-all"
            >
              {item.name}
            </a>
          ))}
          <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-full transition duration-300 shadow-md">
            Beli Sekarang
          </button>
        </nav>
      </div>

      {/* Overlay saat menu aktif */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
        ></div>
      )}
    </>
  );
};

export default Header;
