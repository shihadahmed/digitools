import React from 'react'

function Pricing() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header Section */}
        <h2 className="text-[#101727] text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-sm md:text-base font-medium mb-16 max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* 1. Starter Plan */}
          <div className="bg-[#F8F9FA] rounded-2xl p-8 flex flex-col justify-between border border-gray-100 shadow-sm text-left">
            <div>
              <h3 className="text-[#101727] text-2xl font-bold mb-1">Starter</h3>
              <p className="text-gray-500 text-sm mb-6">Perfect for getting started</p>
              
              <div className="flex items-baseline text-[#101727] mb-8">
                <span className="text-4xl font-extrabold">$0</span>
                <span className="text-gray-500 text-sm font-medium ml-1">/Month</span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 text-sm font-medium text-gray-600 mb-12">
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-extrabold text-base">✓</span> Access to 10 free tools
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-extrabold text-base">✓</span> Basic templates
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-extrabold text-base">✓</span> Community support
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-extrabold text-base">✓</span> 1 project per month
                </li>
              </ul>
            </div>

            <button className="w-full py-3 px-6 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-sm transition-all shadow-md shadow-purple-200">
              Get Started Free
            </button>
          </div>

          {/* 2. Pro Plan (Highlighted Center Card) */}
          <div className="relative bg-[#8B5CF6] rounded-2xl p-8 flex flex-col justify-between text-left shadow-xl transform lg:scale-105 border-2 border-[#8B5CF6]">
            {/* Most Popular Badge */}
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-xs font-bold px-4 py-1 rounded-full shadow-sm border border-[#FDE68A]">
              Most Popular
            </div>

            <div>
              <h3 className="text-white text-2xl font-bold mb-1">Pro</h3>
              <p className="text-purple-100 text-sm mb-6">Best for professionals</p>
              
              <div className="flex items-baseline text-white mb-8">
                <span className="text-4xl font-extrabold">$29</span>
                <span className="text-purple-200 text-sm font-medium ml-1">/Month</span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 text-sm font-medium text-purple-500 mb-12">
                <li className="flex items-center gap-3 text-white">
                  <span className="text-white font-extrabold text-base">✓</span> Access to all premium tools
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-white font-extrabold text-base">✓</span> Unlimited templates
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-white font-extrabold text-base">✓</span> Priority support
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-white font-extrabold text-base">✓</span> Unlimited projects
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-white font-extrabold text-base">✓</span> Cloud sync
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-white font-extrabold text-base">✓</span> Advanced analytics
                </li>
              </ul>
            </div>

            <button className="w-full py-3 px-6 rounded-full bg-white hover:bg-gray-50 text-[#8B5CF6] font-bold text-sm transition-all shadow-md">
              Start Pro Trial
            </button>
          </div>

          {/* 3. Enterprise Plan */}
          <div className="bg-[#F8F9FA] rounded-2xl p-8 flex flex-col justify-between border border-gray-100 shadow-sm text-left">
            <div>
              <h3 className="text-[#101727] text-2xl font-bold mb-1">Enterprise</h3>
              <p className="text-gray-500 text-sm mb-6">For teams and businesses</p>
              
              <div className="flex items-baseline text-[#101727] mb-8">
                <span className="text-4xl font-extrabold">$99</span>
                <span className="text-gray-500 text-sm font-medium ml-1">/Month</span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 text-sm font-medium text-gray-600 mb-12">
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-extrabold text-base">✓</span> Everything in Pro
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-extrabold text-base">✓</span> Team collaboration
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-extrabold text-base">✓</span> Custom integrations
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-extrabold text-base">✓</span> Dedicated support
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-extrabold text-base">✓</span> SLA guarantee
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-extrabold text-base">✓</span> Custom branding
                </li>
              </ul>
            </div>

            <button className="w-full py-3 px-6 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-sm transition-all shadow-md shadow-purple-200">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing