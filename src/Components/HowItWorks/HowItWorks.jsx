import React from 'react'

function HowItWorks() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header Section */}
        <h2 className="text-[#101727] text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-medium mb-16 max-w-2xl mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* 3 Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Step 01: Create Account */}
          <div className="relative bg-white rounded-2xl p-10 flex flex-col items-center border border-gray-100 shadow-sm text-center pt-16">
            {/* Top Right Badge */}
            <div className="absolute top-5 right-5 w-7 h-7 bg-[#6366F1] text-white text-xs font-bold rounded-full flex items-center justify-center">
              01
            </div>
            
            {/* Custom SVG Icon (User Shape) */}
            <div className="w-24 h-24 rounded-full bg-[#F5F3FF] flex items-center justify-center mb-6 text-[#8B5CF6]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>

            <h3 className="text-[#101727] text-xl font-bold mb-3">Create Account</h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-[250px]">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Step 02: Choose Products */}
          <div className="relative bg-white rounded-2xl p-10 flex flex-col items-center border border-gray-100 shadow-sm text-center pt-16">
            {/* Top Right Badge */}
            <div className="absolute top-5 right-5 w-7 h-7 bg-[#6366F1] text-white text-xs font-bold rounded-full flex items-center justify-center">
              02
            </div>
            
            {/* Custom SVG Icon (Box/Product Shape) */}
            <div className="w-24 h-24 rounded-full bg-[#F5F3FF] flex items-center justify-center mb-6 text-[#8B5CF6]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </div>

            <h3 className="text-[#101727] text-xl font-bold mb-3">Choose Products</h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-[250px]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Step 03: Start Creating */}
          <div className="relative bg-white rounded-2xl p-10 flex flex-col items-center border border-gray-100 shadow-sm text-center pt-16">
            {/* Top Right Badge */}
            <div className="absolute top-5 right-5 w-7 h-7 bg-[#6366F1] text-white text-xs font-bold rounded-full flex items-center justify-center">
              03
            </div>
            
            {/* Custom SVG Icon (Rocket Shape) */}
            <div className="w-24 h-24 rounded-full bg-[#F5F3FF] flex items-center justify-center mb-6 text-[#8B5CF6]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699-2.7c-.103.393-.243.771-.42 1.128m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>

            <h3 className="text-[#101727] text-xl font-bold mb-3">Start Creating</h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-[250px]">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HowItWorks