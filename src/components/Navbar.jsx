import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo + brand */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo.png" // 👈 replace with your logo file name in public/
            alt="Cosschigan Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold tracking-wide">Cosschigan</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-gray-700">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-700">
            About
          </Link>
          <Link to="/shop" className="hover:text-gray-700">
            Shop
          </Link>
          <Link to="/contact">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold shadow-md hover:from-yellow-600 hover:to-yellow-800 transition">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
