import React from 'react'
import {Menu, ShoppingCart} from 'lucide-react';
import digitoolLogo from '../../assets/DigiTools.svg';


function Navbar() {
  return (
    <div className="bg-white sticky top-0 z-50 border-b border-base-300 mt-7 mb-7">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Navbar Start: Logo & Mobile Menu */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden text-[#101727] focus:bg-transparent active:bg-transparent"><Menu size={24} /></div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 font-semibold text-base text-[#101727] gap-1">
            <li><a href="#products" className="hover:text-[#4F39F6] active:bg-purple-100 focus:bg-purple-100 hover:bg-transparent rounded-xl transition-colors duration-200">Products</a></li>
            <li><a href="#features" className="hover:text-[#4F39F6] active:bg-purple-100 focus:bg-purple-100 hover:bg-transparent rounded-xl transition-colors duration-200">Features</a></li>
            <li><a href="#pricing" className="hover:text-[#4F39F6] active:bg-purple-100 focus:bg-purple-100 hover:bg-transparent rounded-xl transition-colors duration-200">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-[#4F39F6] active:bg-purple-100 focus:bg-purple-100 hover:bg-transparent rounded-xl transition-colors duration-200">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-[#4F39F6] active:bg-purple-100 focus:bg-purple-100 hover:bg-transparent rounded-xl transition-colors duration-200">FAQ</a></li>
          </ul>
        </div>
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 px-2 active:bg-transparent focus:bg-transparent outline-none select-none">
          <img 
            src={digitoolLogo} 
            alt="DigiTools Logo" 
            className="h-8 w-auto md:h-9 object-contain" 
          />
        </a>
        </div>

        {/* Navbar Center: Desktop Menu Links */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-base text-[#101727] gap-2">
            <li><a href="#products" className="hover:text-[#4F39F6] active:bg-purple-100 focus:bg-purple-100 hover:bg-transparent rounded-xl transition-colors duration-200">Products</a></li>
            <li><a href="#features" className="hover:text-[#4F39F6] active:bg-purple-100 focus:bg-purple-100 hover:bg-transparent rounded-xl transition-colors duration-200">Features</a></li>
            <li><a href="#pricing" className="hover:text-[#4F39F6] active:bg-purple-100 focus:bg-purple-100 hover:bg-transparent rounded-xl transition-colors duration-200">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-[#4F39F6] active:bg-purple-100 focus:bg-purple-100 hover:bg-transparent rounded-xl transition-colors duration-200">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-[#4F39F6] active:bg-purple-100 focus:bg-purple-100 hover:bg-transparent rounded-xl transition-colors duration-200">FAQ</a></li>
          </ul>
        </div>

        {/* Navbar End: Buttons */}
          <div className="navbar-end gap-4 md:gap-6 font-semibold text-base text-[#101727]">
          <button className="hover:text-[#4F39F6] transition-colors duration-200 active:bg-transparent focus:bg-transparent outline-none"><ShoppingCart size={22} /></button>
          <button className="hover:text-[#4F39F6] transition-colors duration-200 active:bg-transparent focus:bg-transparent outline-none">Login</button>
          <button className="btn btn-sm md:btn-md bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 border-none text-white font-bold rounded-full normal-case px-6 md:px-8 shadow-md shadow-purple-100 transition-all duration-200">Get Started</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar