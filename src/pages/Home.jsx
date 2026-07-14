import React from 'react'
import Button from '../components/UI/Button'
import ServiceCard from '../components/UI/ServiceCard'
import { servicesCatalog } from '../data/servicesData'

export default function Home() {
  // Grab a slice of core services for the homepage preview grid (FR-H02)
  const previewServices = servicesCatalog.slice(0, 4)

  return (
    <div className="bg-slate-50 min-h-screen selection:bg-amber-500 selection:text-slate-900">
      
      {/* Premium Split-Hero Section (FR-H01) */}
      <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-900">
        {/* Subtle background abstract grid glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20 lg:py-28">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                ⚡ Premium Systems Integration
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
                Smart Protection. <br/>
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                  Flawless Installations.
                </span>
              </h1>
              <p className="text-lg text-slate-400 font-medium max-w-xl">
                "Cares about your security needs." EA Electronics supplies, deploys, and maintains high-tier CCTV arrays, electric fencing, and smart automation systems.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button to="/get-quote" variant="primary" className="px-8 py-4 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 text-base">
                  Get a Free Estimate
                </Button>
                <Button to="/services" variant="outline" className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-900 px-8 py-4 text-base">
                  Explore 12 Core Services
                </Button>
              </div>
            </div>

            {/* Right Side Creative Image Block */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-40"></div>
              <div className="relative border border-slate-800 rounded-2xl p-2 bg-slate-900/60 backdrop-blur-sm shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&h=500&q=80" 
                  alt="Modern commercial CCTV matrix installation" 
                  className="rounded-xl object-cover w-full h-[400px] brightness-90 contrast-105"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 border border-slate-800 p-4 rounded-xl backdrop-blur-md flex items-center justify-between shadow-xl">
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Lead Technician</p>
                    <p className="text-sm font-bold text-white">Nsobya Elijah (Senior Specialist)</p>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2.5 py-1 rounded-md font-bold border border-emerald-500/30">
                    ● Active
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Metric Indicator Ribbon */}
      <section className="bg-white border-b border-slate-200 py-6 relative z-20 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="pt-3 md:pt-0">
            <p className="text-2xl lg:text-3xl font-extrabold text-slate-900">12</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Service Lines</p>
          </div>
          <div className="pt-3 md:pt-0">
            <p className="text-2xl lg:text-3xl font-extrabold text-slate-900">100%</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Secure Delivery</p>
          </div>
          <div className="pt-3 md:pt-0">
            <p className="text-2xl lg:text-3xl font-extrabold text-slate-900">HQ</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Eastern Energy Centre</p>
          </div>
          <div className="pt-3 md:pt-0">
            <p className="text-2xl lg:text-3xl font-extrabold text-slate-900">24/7</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">WhatsApp Support</p>
          </div>
        </div>
      </section>

      {/* Core Services Section with Optimized Grid (FR-H02) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Engineering Solutions
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-slate-500 text-base font-medium">
            Industry-grade infrastructure protective systems engineered cleanly for homes, commercial establishments, and institutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewServices.map(service => (
            <div key={service.id} className="transform hover:-translate-y-1.5 transition-all duration-350">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-14">
          <Button to="/services" variant="secondary" className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg shadow-md">
            View All 12 Functional Lines
          </Button>
        </div>
      </section>

      {/* Modern Card Grid Section: Why Choose Us (FR-H03) */}
      <section className="bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Built On Trust & Technical Merit</h2>
            <p className="text-slate-400 text-sm font-medium">What sets our deployments apart in field operations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/40 border border-slate-800 p-8 rounded-xl shadow-xl backdrop-blur-sm space-y-4 hover:border-slate-700/60 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-lg">
                🛠️
              </div>
              <h3 className="font-bold text-xl text-white">Expert Engineering</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Direct management on-site handled exclusively under senior systems expert Nsobya Elijah, guaranteeing clean routing terminations.
              </p>
            </div>
            
            <div className="bg-slate-800/40 border border-slate-800 p-8 rounded-xl shadow-xl backdrop-blur-sm space-y-4 hover:border-slate-700/60 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-lg">
                📦
              </div>
              <h3 className="font-bold text-xl text-white">Diverse Ecosystem</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                A single partner capable of supporting all 12 operational sectors—from biometric logging to high-voltage perimeter barriers.
              </p>
            </div>
            
            <div className="bg-slate-800/40 border border-slate-800 p-8 rounded-xl shadow-xl backdrop-blur-sm space-y-4 hover:border-slate-700/60 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-lg">
                💬
              </div>
              <h3 className="font-bold text-xl text-white">Direct Communication</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Direct links straight into active customer communication channels like instant WhatsApp click-to-chat points for rapid quote turnaround.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}