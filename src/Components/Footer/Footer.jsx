import React from 'react'
import instagramIcon from '../../assets/instagram.svg'
import facebookIcon from '../../assets/facebook.svg'
import twitterIcon from '../../assets/x.svg'

function Footer() {
  return (
    <footer className="w-full bg-[#101727] text-gray-400 py-16 px-6 md:px-12 text-left select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Content: Exact 5 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-3xl font-extrabold tracking-tight">DigiTools</h2>
            <p className="text-sm leading-relaxed font-medium">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Product</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#templates" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Company</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#press" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Resources</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#docs" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#help" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 5: Social Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Social Links</h3>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"><img src={instagramIcon} alt="Instagram" className="w-[18px] h-[18px]" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"><img src={facebookIcon} alt="Facebook" className="w-[18px] h-[18px]" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"><img src={twitterIcon} alt="Twitter" className="w-[16px] h-[16px]" /></a>
            </div>
          </div>

        </div>

        {/* Bottom Content: Copyright & Legal */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm font-medium">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer