import React from 'react'
import Button from '../components/UI/Button'
import ServiceCard from '../components/UI/ServiceCard'
import { servicesCatalog } from '../data/servicesData'

function ViewfinderFrame({ children, alwaysOn = false, className = '' }) {
  const vis = alwaysOn ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
  const bracket = `absolute w-5 h-5 border-amber-400 transition-opacity duration-300 ${vis}`
  return (
    <div className={`relative ${className}`}>
      {children}
      <span className={`${bracket} top-0 left-0 border-t-2 border-l-2 -translate-x-0.5 -translate-y-0.5`} />
      <span className={`${bracket} top-0 right-0 border-t-2 border-r-2 translate-x-0.5 -translate-y-0.5`} />
      <span className={`${bracket} bottom-0 left-0 border-b-2 border-l-2 -translate-x-0.5 translate-y-0.5`} />
      <span className={`${bracket} bottom-0 right-0 border-b-2 border-r-2 translate-x-0.5 translate-y-0.5`} />
    </div>
  )
}

// Secondary device from the same world: hazard tape, the literal warning
// stripe used on live electric fencing. One appearance only, as a seam
// between the "live system" dark zone and the calmer content below.
function HazardSeam() {
  return (
    <div
      className="h-2.5 w-full"
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, #f59e0b 0px, #f59e0b 14px, #0f172a 14px, #0f172a 28px)',
      }}
      aria-hidden="true"
    />
  )
}

const whyChooseUs = [
  {
    title: 'Expert Engineering',
    copy: 'Direct management on-site handled exclusively under senior systems expert Nsobya Elijah, guaranteeing clean routing terminations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Diverse Ecosystem',
    copy: 'A single partner capable of supporting all 12 operational sectors — from biometric logging to high-voltage perimeter barriers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Direct Communication',
    copy: 'Direct links straight into active customer communication channels like instant WhatsApp click-to-chat points for rapid quote turnaround.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
]

const statusMetrics = [
  { value: '12', label: 'Service Lines' },
  { value: '100%', label: 'Secure Delivery' },
  { value: 'HQ', label: 'Eastern Energy Centre' },
  { value: '24/7', label: 'WhatsApp Support' },
]

export default function Home() {
  // Grab a slice of core services for the homepage preview grid (FR-H02)
  const previewServices = servicesCatalog.slice(0, 4)

  return (
    <div className="bg-slate-50 min-h-screen selection:bg-amber-500 selection:text-slate-900">

      {/* Local styles for the scanline sweep — kept scoped to this page */}
      <style>{`
        @keyframes ea-scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: .6; }
          90% { opacity: .6; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .ea-scanline { animation: ea-scan 4s linear infinite; }
      `}</style>

      {/* Premium Split-Hero Section (FR-H01) */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* Subtle background schematic grid glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        <div className="absolute -top-24 left-1/4 w-[36rem] h-[36rem] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-24 lg:py-32">

            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left space-y-7">
              <div className="inline-flex items-center gap-2 bg-black/40 border border-slate-800 px-3 py-1.5 rounded-md font-mono text-[11px] text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-slate-500">status --check</span>
                <span className="text-slate-600">→</span>
                <span className="text-emerald-400 font-semibold">ARMED</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">monitoring active</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.05] text-white">
                Smart Protection.
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                  Flawless Installations.
                </span>
              </h1>

              <p className="text-lg text-slate-400 font-medium max-w-xl leading-relaxed border-l-2 border-amber-500/30 pl-4">
                EA Electronics supplies, deploys, and maintains high-tier CCTV arrays, electric fencing, and smart automation systems — engineered to be seen once, at installation, and never thought about again.
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

            {/* Right Side — Live-Feed Framed Image */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-transparent to-transparent rounded-2xl blur-2xl opacity-60"></div>

              <ViewfinderFrame alwaysOn className="rounded-2xl">
                <div className="relative border border-slate-800 rounded-2xl p-2 bg-slate-900/60 backdrop-blur-sm shadow-2xl overflow-hidden">
                  {/* HUD top bar */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between font-mono text-[10px] text-amber-300/90">
                    <span className="flex items-center gap-1.5 bg-black/50 px-2 py-1 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                      REC · CAM 01
                    </span>
                    <span className="bg-black/50 px-2 py-1 rounded">SECTOR 04 — PERIMETER</span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&h=500&q=80"
                      alt="Modern commercial CCTV matrix installation"
                      className="object-cover w-full h-[400px] brightness-90 contrast-105"
                    />
                    {/* Scanline sweep */}
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-amber-400/30 to-transparent ea-scanline pointer-events-none"></div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 z-20 bg-slate-950/90 border border-slate-800 p-4 rounded-xl backdrop-blur-md flex items-center justify-between shadow-xl">
                    <div>
                      <p className="text-[10px] text-slate-400 font-mono font-semibold uppercase tracking-wider">Lead Technician</p>
                      <p className="text-sm font-bold text-white">Nsobya Elijah (Senior Specialist)</p>
                    </div>
                    <span className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 text-xs px-2.5 py-1 rounded-md font-bold border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Active
                    </span>
                  </div>
                </div>
              </ViewfinderFrame>
            </div>

          </div>
        </div>

        {/* Live Ops status bar — dashboard readout, not a generic stat row */}
        <div className="relative z-10 border-t border-slate-800 bg-black/30">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800/80">
            {statusMetrics.map((m) => (
              <div key={m.label} className="py-5 text-center">
                <p className="text-xl lg:text-2xl font-extrabold text-white font-mono">{m.value}</p>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.15em] mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HazardSeam />

      {/* Core Services Section with Optimized Grid (FR-H02) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-amber-600 font-mono text-xs font-bold uppercase tracking-[0.25em]">
            What we install
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-slate-500 text-base font-medium">
            Industry-grade infrastructure protective systems engineered cleanly for homes, commercial establishments, and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewServices.map(service => (
            <ViewfinderFrame key={service.id} className="group rounded-xl transform hover:-translate-y-1.5 transition-transform duration-300">
              <ServiceCard {...service} />
            </ViewfinderFrame>
          ))}
        </div>

        <div className="text-center mt-14">
          <Button to="/services" variant="secondary" className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg shadow-md">
            View All 12 Functional Lines
          </Button>
        </div>
      </section>

      {/* Modern Card Grid Section: Why Choose Us (FR-H03) */}
      <section className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply"></div>
        <div className="max-w-6xl mx-auto relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-amber-400 font-mono text-xs font-bold uppercase tracking-[0.25em]">
              Field-tested
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Built On Trust &amp; Technical Merit</h2>
            <p className="text-slate-400 text-sm font-medium">What sets our deployments apart in field operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-slate-800/40 border border-slate-800 p-8 rounded-xl shadow-xl backdrop-blur-sm space-y-4 hover:border-amber-500/30 hover:bg-slate-800/60 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-white">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Closing CTA Strip */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-slate-950 rounded-2xl border border-slate-800 px-8 py-12 text-center relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to secure your property?
            </h3>
            <p className="text-slate-400 max-w-md mx-auto">
              Get a free, no-obligation estimate from our senior systems team within 24 hours.
            </p>
            <div className="pt-2">
              <Button to="/get-quote" variant="primary" className="px-8 py-4 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 text-base">
                Get a Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}