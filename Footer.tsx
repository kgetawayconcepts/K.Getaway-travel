import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, Globe, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-amber-500 p-2 rounded-lg rotate-3">
                <Globe className="text-slate-900 h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight leading-none font-serif">K.Getaway</span>
                <span className="text-[10px] text-amber-500 uppercase tracking-[0.2em] font-bold">Concepts</span>
              </div>
            </div>
            <p className="mb-8 leading-relaxed text-sm text-slate-500">
              Immigration Architects & Global Mobility Strategists. We build the path, you walk it.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-serif">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-amber-500 transition">Home</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition">Phase 1: Welcome</a></li>
              <li><a href="#destinations" className="hover:text-amber-500 transition">Inventory</a></li>
              <li><a href="#planner" className="hover:text-amber-500 transition">Assessment (Audit)</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-serif">Legal & Visa</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-amber-500 transition">Canada PR (CEC)</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">UK Study 2026</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Work Permits (Europe)</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Schengen Visas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-serif">Headquarters</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                <span>Lekki Phase 1,<br />Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-amber-500 flex-shrink-0" />
                <a 
                  href="https://wa.me/2348144741568" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition"
                >
                  +234 814 474 1568
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-amber-500 flex-shrink-0" />
                <span className="text-white font-medium">K.Getawayconcepts@proton.me</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p className="flex items-center gap-2"><Shield size={12} /> &copy; {new Date().getFullYear()} K.Getaway Concepts. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Engagement</a>
            <a href="#" className="hover:text-white transition">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};