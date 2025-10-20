import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // custom css for luxury font

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo + brand */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo.png" // Replace with actual logo file in public/
            alt="Cosschigan Logo"
            className="h-10 w-auto"
          />
          <span className="brand-text text-2xl font-bold">Cosschigan</span>
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
