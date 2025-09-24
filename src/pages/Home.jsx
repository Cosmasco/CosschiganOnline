import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <main className="min-h-screen bg-offWhite">
      <section className="relative">
        <img src="/hero.jpg" alt="Hero" className="w-full h-[60vh] object-cover brightness-50"/>
        <div className="absolute inset-0 flex items-center justify-start max-w-6xl mx-auto p-8">
          <div className="text-white max-w-xl">
            <h1 className="text-5xl font-playfair mb-4">Cosschigan</h1>
            <p className="text-lg mb-6">Where Elegance Meets Affordability — timeless looks without the premium price tag.</p>
            <div className="flex gap-4">
              <Link to="/shop" className="px-6 py-3 bg-gold text-black rounded-full font-semibold">Shop Now</Link>
              <Link to="/about" className="px-6 py-3 border border-white rounded-full">Explore</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-playfair mb-4">Featured Looks</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i=> (
            <article key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-56 bg-gray-200 flex items-center justify-center">Photo {i}</div>
              <div className="p-4">
                <h3 className="font-playfair">Look {i}</h3>
                <p className="text-sm text-gray-600 mt-2">A clean, stylish outfit perfect for events and everyday elegance.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
