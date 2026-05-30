import React, { useState } from 'react'

function CTA() {
    const [activeButton, setActiveButton] = useState('explore');

  const handleExploreProducts = (e) => {
    e.preventDefault(); 
    setActiveButton('explore');
  };

  const handleViewPricing = (e) => {
    e.preventDefault();
    setActiveButton('pricing');
  };

  return (
    <section className="w-full bg-[#8B5CF6] py-20 px-6 md:px-12 text-center select-none">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Heading */}
        <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Ready to Transform Your Workflow?
        </h2>
        
        {/* Subtitle */}
        <p className="text-purple-100 text-sm md:text-lg font-medium mb-10 max-w-2xl mx-auto">
          Join thousands of creators and professionals who are already scaling their projects with DigiTools.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* First Button (Explore/Get Started) */}
          <button 
            onClick={handleExploreProducts}
            className={`w-full sm:w-auto py-3.5 px-8 rounded-full font-bold text-base transition-all cursor-pointer outline-none ${
              activeButton === 'explore' 
                ? 'bg-white text-[#8B5CF6] shadow-lg' 
                : 'bg-transparent text-white border-2 border-white hover:bg-white/10'
            }`} 
          >
            Get Started For Free
          </button>
          
          {/* Second Button (Pricing/Contact) */}
          <button 
            onClick={handleViewPricing} 
            className={`w-full sm:w-auto py-3.5 px-8 rounded-full font-bold text-base transition-all cursor-pointer outline-none ${
              activeButton === 'pricing' 
                ? 'bg-white text-[#8B5CF6] shadow-lg' 
                : 'bg-transparent text-white border-2 border-white hover:bg-white/10'
            }`} 
          >
            Contact Support
          </button>

        </div>

      </div>
    </section>
  );
}

export default CTA