import React from 'react';
import { Play } from 'lucide-react';
import heroImg from '../../assets/banner.png'; // তোমার হিরো ইমেজের পাথ ঠিক রেখো

function Hero() {
  return (
    <> 
    <section className="relative w-full bg-white text-left px-6 md:px-12 py-5 md:py-8 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content Box */}
        <div className="flex flex-col items-start gap-6 max-w-xl">
          {/* Top AI Badge */}
          <div className="flex items-center gap-2 bg-[#F1EDFE] text-[#4F39F6] font-semibold text-xs md:text-sm px-4 py-1.5 rounded-full"><span className="w-2 h-2 rounded-full bg-[#4F39F6] animate-pulse"></span>New: AI-Powered Tools Available</div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-[#101727] leading-[1.15] tracking-tight">Supercharge Your<br />Digital Workflow</h1>
          
          {/* Description Paragraph */}
          <p className="text-base md:text-lg text-[#6b6375] font-medium leading-relaxed">Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="btn btn-md md:btn-lg bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-95 border-none text-white font-bold rounded-full normal-case px-6 md:px-8 shadow-lg shadow-purple-100 transition-all duration-200">Explore Products</button>
            <button className="btn btn-md md:btn-lg bg-white border border-[#4F39F6] text-[#4F39F6] hover:bg-purple-50 font-bold rounded-full normal-case px-6 md:px-8 flex items-center gap-2 transition-all duration-200"><Play size={18} fill="#4F39F6" />Watch Demo</button>
          </div>
        </div>

        {/* Right Side: Image Box */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="relative w-full max-w-[500px] md:max-w-full rounded-3xl overflow-hidden shadow-xl shadow-gray-100/50">
            <img src={heroImg} alt="Digital Workflow Presentation" className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500" />
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
export default Hero