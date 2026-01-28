import React, { useEffect, useState } from 'react';
import { Search, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position from -1 to 1
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[900px] w-full overflow-hidden flex flex-col justify-center perspective-1000">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-100 ease-out"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          transform: `scale(1.1) translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/60 to-slate-900/40"></div>
      </div>

      {/* Floating Particles/Orbs with Reverse Parallax */}
      <div 
        className="absolute top-20 right-20 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl animate-float-delayed transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="max-w-5xl mx-auto text-center text-white space-y-8 mb-20">
          
          <div className="flex justify-center">
            <Reveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-400 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                <Globe size={12} /> Global Mobility Strategists
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight font-serif tracking-tight drop-shadow-2xl">
              We Don't Just Find A Way. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">We Build It.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.5} width="100%">
            <p className="text-lg md:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed border-l-2 border-amber-500 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              Specialized Work Permits for <strong>Serbia, Albania, Qatar, & Europe</strong>. 
              <strong> Canada Immigration Architects</strong> providing the shortest path to permanent residency.
            </p>
          </Reveal>
        </div>

        {/* Strategic Assessment Widget with Hover Lift */}
        <Reveal delay={0.8} direction="up">
          <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-xl rounded-[2rem] p-5 shadow-2xl shadow-slate-950/50 hidden md:block border border-slate-100 transform hover:scale-[1.01] transition-all duration-500 hover:shadow-amber-500/10">
            <div className="grid grid-cols-4 gap-4 items-center divide-x divide-slate-100">
              
              <div className="px-4 group cursor-pointer">
                <label className="flex items-center gap-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2 group-hover:text-amber-600 transition">
                  <ShieldCheck size={12} /> Passport Authority
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Nigerian" 
                  className="w-full font-serif text-slate-900 text-lg placeholder-slate-300 focus:outline-none bg-transparent font-bold"
                />
              </div>

              <div className="px-4 group cursor-pointer">
                <label className="flex items-center gap-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2 group-hover:text-amber-600 transition">
                  <MapPin size={12} /> Strategic Target
                </label>
                <select className="w-full font-serif text-slate-900 text-lg focus:outline-none bg-transparent font-bold appearance-none cursor-pointer">
                  <option>Canada (PR/Work)</option>
                  <option>UK (Study/Work)</option>
                  <option>Qatar (Work Permit)</option>
                  <option>Serbia/Albania (Work)</option>
                  <option>Europe (Schengen)</option>
                </select>
              </div>

              <div className="px-4 group cursor-pointer">
                <label className="flex items-center gap-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2 group-hover:text-amber-600 transition">
                  <Globe size={12} /> Service Class
                </label>
                <select className="w-full font-serif text-slate-900 text-lg focus:outline-none bg-transparent font-bold appearance-none cursor-pointer">
                  <option>Work Permit (2yr)</option>
                  <option>Study Visa</option>
                  <option>Tourist / E-Visa</option>
                  <option>Deep Audit (Consultation)</option>
                </select>
              </div>

              <div className="pl-4 flex justify-end">
                <a href="#planner" className="bg-slate-900 hover:bg-amber-500 hover:text-slate-900 text-white px-8 py-5 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-3 font-bold group">
                  <Search size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                  <span>Begin Audit</span>
                </a>
              </div>

            </div>
          </div>
        </Reveal>
        
        {/* Mobile Call to Action */}
        <div className="md:hidden flex flex-col gap-4">
            <Reveal direction="up" delay={0.6}>
              <a href="#planner" className="w-full bg-amber-500 text-slate-900 py-4 rounded-xl font-bold shadow-lg text-lg text-center flex items-center justify-center gap-2">
                  <ShieldCheck size={20} /> Start Assessment
              </a>
            </Reveal>
        </div>

      </div>
    </div>
  );
};