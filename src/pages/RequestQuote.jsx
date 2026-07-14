import React, { useState } from 'react'

export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', propertyType: 'Residential', details: ''
  })
  const [selectedServices, setSelectedServices] = useState([])

  const servicesList = [
    "CCTV Camera Installation", "Time & Attendance Systems", "Access Control Systems",
    "Burglar Alarm Systems", "Razor Wire Installation", "Electric Fence Systems",
    "Automatic Gate Systems", "Sound Systems", "Intercom Systems", 
    "Networking", "Electrical Installations", "Point of Sale (POS) Systems"
  ]

  const handleServiceChange = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service))
    } else {
      setSelectedServices([...selectedServices, service])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Payload target execution logic context (Formspree/FormSubmit integrations hook here)
    console.log("Submitting Request:", { ...formData, services: selectedServices })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto my-16 p-8 bg-white rounded-lg shadow-md text-center">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h2 className="text-2xl font-bold mb-2">Quote Request Received!</h2>
        <p className="text-gray-650 mb-6">Senior Technician Nsobya Elijah will review your specifications and contact you shortly.</p>
        <button onClick={() => setSubmitted(false)} className="bg-brand-blue text-white px-6 py-2 rounded">Submit Another Request</button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-brand-navy mb-2">Request an Estimate</h1>
      <p className="text-gray-500 mb-8">Tell us about your system requirements and our technical team will reach out.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your Full Name *</label>
            <input required type="text" className="w-full border p-2 rounded focus:ring-1 focus:ring-brand-blue" 
                   onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number *</label>
            <input required type="tel" className="w-full border p-2 rounded focus:ring-1 focus:ring-brand-blue" 
                   onChange={e => setFormData({...formData, phone: e.target.value})} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input type="email" className="w-full border p-2 rounded" 
                 onChange={e => setFormData({...formData, email: e.target.value})} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Select Required Services (Multi-select) *</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto border p-3 rounded bg-slate-50">
            {servicesList.map(service => (
              <label key={service} className="flex items-center space-x-2 text-sm p-1 cursor-pointer">
                <input type="checkbox" checked={selectedServices.includes(service)} onChange={() => handleServiceChange(service)} className="rounded text-brand-blue" />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Property Profile Type</label>
          <select className="w-full border p-2 rounded" onChange={e => setFormData({...formData, propertyType: e.target.value})}>
            <option>Residential Space</option>
            <option>Commercial Premises</option>
            <option>Institutional Building</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Scope Details / Project Message</label>
          <textarea rows="4" className="w-full border p-2 rounded" placeholder="Describe layout specifics, camera count metrics, custom wiring profiles..."
                    onChange={e => setFormData({...formData, details: e.target.value})}></textarea>
        </div>

        <button type="submit" className="w-full bg-brand-accent hover:bg-yellow-500 text-brand-navy font-bold py-3 rounded shadow transition-all">
          Transmit Form to Secure Mailbox
        </button>
      </form>
    </div>
  )
}