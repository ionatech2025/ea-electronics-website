import React, { useState } from 'react'
import Input from './UI/Input'
import Button from './UI/Button'

export default function ContactForm() {
  const [status, setStatus] = useState({ submitted: false, loading: false })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setStatus({ ...status, loading: true })
    
    // Simulate API delivery payload delay target safely
    setTimeout(() => {
      setStatus({ submitted: true, loading: false })
    }, 1000)
  }

  if (status.submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded p-6 text-center">
        <h3 className="text-emerald-800 font-bold text-lg mb-1">Message Dispatched!</h3>
        <p className="text-emerald-600 text-sm">Thank you for your entry. The team will return back shortly via your provided metrics.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4 bg-white p-6 border border-slate-200 rounded-lg shadow-sm">
      <Input label="Your Name" required placeholder="John Doe" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input label="Phone Number" required type="tel" placeholder="0759883883" />
        <Input label="Email Address" type="email" placeholder="client@example.com" />
      </div>
      <Input label="Message / Requirements" required isTextArea placeholder="Describe what security or electrical infrastructure assistance you require..." />
      <Button type="submit" variant="secondary" className="w-full" disabled={status.loading}>
        {status.loading ? 'Transmitting...' : 'Send Message'}
      </Button>
    </form>
  )
}