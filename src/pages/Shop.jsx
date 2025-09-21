import React from 'react'

const products = [
  {
    "id": 1,
    "name": "Elegant A-line Dress",
    "desc": "Classic A-line silhouette, perfect for day or evening.",
    "price": 25000
  },
  {
    "id": 2,
    "name": "Tailored Blazer",
    "desc": "Structured blazer with soft shoulders, great for events.",
    "price": 32000
  },
  {
    "id": 3,
    "name": "Silk Wrap Top",
    "desc": "Lightweight silk blend for effortless style.",
    "price": 15000
  },
  {
    "id": 4,
    "name": "Handcrafted Clutch",
    "desc": "Compact clutch with subtle gold hardware.",
    "price": 8000
  },
  {
    "id": 5,
    "name": "Pleated Maxi Skirt",
    "desc": "Flowing pleats for movement and grace.",
    "price": 18000
  },
  {
    "id": 6,
    "name": "Classic Trousers",
    "desc": "Slim-fit trousers with comfortable stretch.",
    "price": 12000
  }
]

export default function Shop(){
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Shop — Coming Soon</h2>
        <p className="text-sm text-gray-600 mb-6">This is a placeholder shop. We will connect payments and checkout later.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map(p => (
            <article key={p.id} className="bg-white rounded-lg shadow-sm p-4">
              <div className="h-56 bg-gray-200 rounded-lg flex items-center justify-center mb-4">Image</div>
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-lg font-bold">₦{p.price.toLocaleString()}</div>
                <button className="px-4 py-2 bg-indigoGradientStart text-white rounded">Shop Now</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
