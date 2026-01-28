import React from 'react';
import { ArrowUpRight, Shield, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

const destinations = [
  {
    id: 1,
    name: "Qatar Work Permit",
    detail: "2-Year Contract",
    image: "https://images.unsplash.com/photo-1590442387114-61c0e4878a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Priority",
    tag: "Middle East"
  },
  {
    id: 2,
    name: "Serbia Work Permit",
    detail: "Europe Non-Schengen",
    image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Available",
    tag: "Europe"
  },
  {
    id: 3,
    name: "Albania Work Permit",
    detail: "Fast Track Processing",
    image: "https://images.unsplash.com/photo-1623164321308-f41857c63102?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Trending",
    tag: "Europe"
  },
  {
    id: 4,
    name: "Canada Immigration",
    detail: "PNP & French Draw Focus",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "High Demand",
    tag: "North America"
  },
  {
    id: 5,
    name: "Lithuania Work Permit",
    detail: "Schengen Zone",
    image: "https://images.unsplash.com/photo-1599925232759-4f243085a85c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Limited",
    tag: "Europe"
  },
  {
    id: 6,
    name: "Hungary Work Permit",
    detail: "Residency Path",
    image: "https://images.unsplash.com/photo-1565426873118-a17ed65d7429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Available",
    tag: "Europe"
  },
  {
    id: 7,
    name: "Kuwait / Israel",
    detail: "Specialized Contracts",
    image: "https://images.unsplash.com/photo-1563864619736-218206869685?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Inquire",
    tag: "Specialized"
  },
  {
    id: 8,
    name: "Russia / Armenia",
    detail: "Alternative Routes",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Open",
    tag: "Eurasia"
  }
];

export const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
                <Reveal direction="right">
                    <span className="text-amber-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                        <Shield size={14} /> Verified Inventory
                    </span>
                </Reveal>
                <Reveal direction="right" delay={0.1}>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900">Mobility Inventory</h2>
                </Reveal>
                <Reveal direction="right" delay={0.2}>
                    <p className="text-slate-500">
                        Our secured allocations for 2026. From the Balkans to the Gulf, we provide legitimate work pathways and residency solutions.
                    </p>
                </Reveal>
            </div>
            <Reveal direction="left" delay={0.3}>
                <a href="#contact" className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-500 hover:text-slate-900 transition shadow-lg">
                    View Full Ledger <ArrowUpRight size={18} />
                </a>
            </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, i) => (
            <Reveal key={dest.id} delay={i * 0.1} direction="up" width="100%">
                <div className="group bg-white rounded-[2rem] p-3 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-slate-100">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] mb-4">
                    <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-1000 ease-out grayscale group-hover:grayscale-0"
                    />
                    
                    <div className="absolute top-4 left-4">
                        <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
                            {dest.tag}
                        </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex justify-between items-start mb-1">
                            <span className="font-bold text-slate-900 text-sm">{dest.status}</span>
                            <CheckCircle2 size={16} className="text-green-600" />
                        </div>
                        <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                            <div className="bg-amber-500 h-full w-3/4 animate-pulse"></div>
                        </div>
                    </div>
                </div>

                <div className="px-3 pb-3">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight mb-1 group-hover:text-amber-600 transition-colors font-serif">{dest.name}</h3>
                    <p className="text-slate-400 text-sm font-medium mb-3">{dest.detail}</p>
                    <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phase 1: Open</span>
                        <button className="text-xs bg-slate-100 hover:bg-slate-900 hover:text-white px-3 py-2 rounded-lg transition-all font-bold">
                            Audit Profile
                        </button>
                    </div>
                </div>
                </div>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <button className="w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-bold shadow-lg">Explore Inventory</button>
        </div>
      </div>
    </section>
  );
};