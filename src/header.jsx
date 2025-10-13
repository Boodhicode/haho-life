// Header.jsx
import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react'; 
import { Link } from 'react-router-dom';// Menggunakan ikon Lucide

const Header = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo Brand */}
        <div className="flex items-center space-x-2">
          {/* Logo Brand PURE HEALTH (contoh ikon daun) */}
          <span className="text-2xl font-bold text-teal-600">🌿 PURE HEALTH</span>
        </div>

        {/* Navigasi Desktop */}
        <nav className="hidden lg:flex space-x-8">
    {navItems.map((item) => (
      <Link // Ganti <a> dengan <Link>
        key={item.name}
        to={item.href} // Ganti href dengan to
        className="text-gray-600 hover:text-teal-500 transition duration-150 font-medium"
      >
        {item.name}
      </Link>
    ))}
  </nav>

        {/* CTA & Ikon */}
        <div className="flex items-center space-x-4">
          <button className="hidden lg:block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 shadow-md">
            Beli Sekarang
          </button>
          <ShoppingCart className="h-6 w-6 text-gray-700 cursor-pointer hover:text-teal-600" />
          
          {/* Menu Mobile (Hamburger) */}
          <button className="lg:hidden text-gray-700 hover:text-teal-600">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;