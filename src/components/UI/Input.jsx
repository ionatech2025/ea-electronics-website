import React from 'react'

export default function Input({ label, type = 'text', required = false, isTextArea = false, ...props }) {
  const inputClass = "w-full border border-slate-300 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-brand-blue bg-white text-brand-navy"
  
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-semibold text-brand-navy mb-1">{label} {required && '*'}</label>}
      {isTextArea ? (
        <textarea required={required} className={inputClass} rows="4" {...props}></textarea>
      ) : (
        <input required={required} type={type} className={inputClass} {...props} />
      )}
    </div>
  )
}