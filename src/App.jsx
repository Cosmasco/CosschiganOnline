import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from "./components/Navbar";

export default function App(){ 
  return (
    <Router>
      <header className="bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Cosschigan" className="w-12 h-12 object-contain"/>
            <div>
              <div className="text-xl font-playfair">Cosschigan</div>
              <div className="text-xs text-gray-500">Where Elegance Meets Affordability</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/shop" className="hover:underline">Shop</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="px-3 py-2 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] text-black rounded-md">Contact</Link>
          </nav>
          <div className="md:hidden">☰</div>
        </div>
      </header>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <footer className="bg-black text-white">
        <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div>© {new Date().getFullYear()} Cosschigan</div>
          <div className="mt-3 md:mt-0">Email: contact@cosschigan.com | Phone: +2348066585236</div>
        </div>
      </footer>
    </Router>
  )
}
