import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center p-8">
        <div>
          <h1 className="text-5xl font-extrabold mb-4">Cosschigan</h1>
          <p className="text-lg text-gray-700 mb-6">Where Elegance Meets Affordability — timeless looks without the premium price tag.</p>
          <div className="flex gap-4">
            <Link to="/shop" className="px-5 py-3 bg-gradient-to-r from-indigoGradientStart to-tealGradientEnd text-white rounded-md">Shop Now</Link>
            <Link to="/collections" className="px-5 py-3 border rounded-md">Explore Collections</Link>
          </div>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-green-50">
          <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">Hero placeholder image</div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Featured Looks</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <article key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-56 bg-gray-200 flex items-center justify-center">Photo {i}</div>
              <div className="p-4">
                <h3 className="font-semibold">Look {i}</h3>
                <p className="text-sm text-gray-600 mt-2">A clean, stylish outfit perfect for events and everyday elegance.</p>
                <div className="mt-4 text-xs text-gray-500">Ready-to-wear • Tailoring</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
