import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-brand-navy mb-2">Contact Field Logistics</h1>
        <p className="text-slate-500">Connect with Senior Technician Nsobya Elijah across our primary communications grid channels.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Matrix Links */}
        <div className="space-y-6">
          <div className="bg-white p-5 border border-slate-200 rounded-lg shadow-sm">
            <h3 className="font-bold text-brand-navy text-lg mb-3">Physical Headquarters Hub</h3>
            <p className="text-sm text-slate-650 leading-relaxed">
              At the active <strong>Eastern Energy Centre solar shop</strong> service hub.
            </p>
          </div>

          <div className="bg-white p-5 border border-slate-200 rounded-lg shadow-sm space-y-3">
            <h3 className="font-bold text-brand-navy text-lg">Direct Inbound Links</h3>
            <p className="text-sm"><strong>Primary Line:</strong> 0759883883</p>
            <p className="text-sm"><strong>Secondary Backup:</strong> 0789203062</p>
            <p className="text-sm"><strong>Inbound Mailbox:</strong> elijahwoudz@mail2paul.com</p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <a href="https://wa.me/256759883883" target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded text-sm shadow-sm">
              Launch WhatsApp Chat
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded text-sm shadow-sm">
              Facebook Connection
            </a>
          </div>
        </div>

        {/* Email Entry Contact Component Node */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}