import React from 'react'
export default function Contact(){
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700">Email: <a href="mailto:contact@cosschigan.com" className="text-indigo-600">contact@cosschigan.com</a></p>
        <p className="text-gray-700">Phone: <a href="tel:+2348066585236" className="text-indigo-600">+2348066585236</a></p>
        <form className="mt-6 space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Form submission is configured to send email later.')}}>
          <div>
            <label className="block text-sm">Name</label>
            <input className="w-full border rounded p-2" required/>
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input type="email" className="w-full border rounded p-2" required/>
          </div>
          <div>
            <label className="block text-sm">Message</label>
            <textarea className="w-full border rounded p-2" rows="4" required></textarea>
          </div>
          <div><button className="px-4 py-2 bg-gradient-to-r from-indigoGradientStart to-tealGradientEnd text-white rounded">Send</button></div>
        </form>
      </div>
    </main>
  )
}
