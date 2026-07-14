import React from 'react'

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Visual Tech Header Section */}
      <section className="relative bg-slate-950 text-white py-16 px-4 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-3">
          <span className="inline-flex items-center bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            🛡️ Corporate Profile
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            About Our Enterprise
          </h1>
          <div className="h-1 w-12 bg-amber-500 mx-auto rounded-full my-4"></div>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover the legacy, core engineering standards, and physical presence backing EA Electronics' critical deployments.
          </p>
        </div>
      </section>

      {/* About Content Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Rich Hardware Graphic */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative border border-slate-200 rounded-2xl p-2 bg-white shadow-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&h=600&q=80" 
                alt="Security camera lens detailing" 
                className="rounded-xl object-cover w-full h-[350px] lg:h-[400px]"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-slate-800 p-4 rounded-xl backdrop-blur-md">
                <p className="text-[10px] text-amber-400 font-extrabold uppercase tracking-wider">Operational Hub</p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">Direct support loops managed from our regional facility in Kampala.</p>
              </div>
            </div>
          </div>

          {/* Center Column: Enterprise Story & Narrative (5 Columns) */}
          <div className="lg:col-span-5 space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              A Dedicated Systems Partner
            </h2>
            <p>
              Operating directly from the active, high-traffic <strong className="text-slate-900">Eastern Energy Centre solar shop</strong> ecosystem, EA Electronics serves as a dedicated professional technology installation and supply partner.
            </p>
            <p>
              We deploy advanced technical frameworks designed to safeguard real estate investments, secure staff workflows, and balance systemic power requirements across modern residential, commercial, and public institutional configurations.
            </p>
            
            {/* Elegant Golden Quotation block */}
            <blockquote className="border-l-4 border-amber-500 pl-4 italic text-slate-700 my-6 bg-amber-50/50 p-4 rounded-r-xl border-y border-r border-slate-200/40">
              "We handle our projects using long-term stability mapping, making sure that your critical monitoring loops don't drop out when environmental conditions get tough."
            </blockquote>
            
            <p className="text-xs text-slate-400">
              Every installation is pressure-tested against local environmental and energy stability grids to maximize uptime and prevent data fallout.
            </p>
          </div>

          {/* Right Column: Premium Profile Info Card (3 Columns) */}
          <div className="lg:col-span-3">
            <div className="bg-slate-900 text-white border border-slate-800 p-6 rounded-2xl shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="border-b border-slate-800 pb-3">
                <h3 className="font-extrabold text-base tracking-wide text-white">Enterprise Profile</h3>
                <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest mt-0.5">Corporate Meta Specs</p>
              </div>

              <ul className="space-y-4 text-xs">
                <li className="flex flex-col gap-1">
                  <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">Lead Specialist</span>
                  <span className="text-slate-200 font-semibold text-sm">Nsobya Elijah</span>
                </li>
                
                <li className="flex flex-col gap-1">
                  <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">Core Focus</span>
                  <span className="text-amber-400 font-semibold text-sm">Systems Integration</span>
                </li>
                
                <li className="flex flex-col gap-1">
                  <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">HQ Hub Location</span>
                  <span className="text-slate-200 font-semibold text-sm">Eastern Energy Centre</span>
                </li>
                
                <li className="flex flex-col gap-1">
                  <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">Coverage Zones</span>
                  <span className="text-slate-200 font-semibold text-sm">Regional Field Operations</span>
                </li>
              </ul>
              
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified Facility</span>
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
              </div>
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}