import React, { useState, useEffect } from 'react';
import { Menu, X, Globe2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-amber-500 p-2 rounded-xl rotate-3">
            <Globe2 className="text-white h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-bold tracking-tight leading-none font-serif ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              K.Getaway
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? 'text-slate-500' : 'text-white/80'}`}>
              Concepts
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-10 font-medium text-sm ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>
          <a href="#" className="hover:text-amber-500 transition">Home</a>
          <a href="#destinations" className="hover:text-amber-500 transition">Packages</a>
          <a href="#services" className="hover:text-amber-500 transition">Services</a>
          <a href="#planner" className="hover:text-amber-500 transition flex items-center gap-1">
             AI Planner
          </a>
          <a href="#about" className="hover:text-amber-500 transition">About</a>
          <a href="#contact" className="hover:text-amber-500 transition">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-slate-900' : 'text-white'}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col space-y-4 md:hidden animate-fadeIn">
          <a href="#" className="text-slate-800 font-medium text-lg" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#destinations" className="text-slate-800 font-medium text-lg" onClick={() => setIsOpen(false)}>Packages</a>
          <a href="#services" className="text-slate-800 font-medium text-lg" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#planner" className="text-amber-600 font-bold text-lg" onClick={() => setIsOpen(false)}>AI Planner</a>
          <a href="#contact" className="bg-slate-900 text-white py-3 rounded-lg text-center font-bold" onClick={() => setIsOpen(false)}>Contact Us</a>
        </div>
      )}
    </header>
  );
};