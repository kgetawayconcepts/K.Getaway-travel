import React from 'react';
import { Award, Users, Globe, Clock } from 'lucide-react';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
            
            <div className="w-full md:w-1/2 relative">
                <Reveal direction="right" delay={0.2}>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500 rounded-tl-3xl -z-10 animate-float-delayed"></div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-900 rounded-br-3xl -z-10 animate-float"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                        alt="Team meeting" 
                        className="rounded-xl shadow-2xl relative z-10"
                    />
                </Reveal>
            </div>

            <div className="w-full md:w-1/2">
                <Reveal direction="left">
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2 block">Who We Are</span>
                </Reveal>
                <Reveal direction="left" delay={0.1}>
                    <h2 className="text-4xl font-bold font-serif text-slate-900 mb-6 leading-tight">
                        More Than Agents. <br/> We Are Architects.
                    </h2>
                </Reveal>
                <Reveal direction="left" delay={0.2}>
                    <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                        Founded on the principles of excellence and innovation, K.Getaway Concepts combines 
                        decades of industry relationships with modern technology to deliver seamless travel experiences.
                        We don't just process applications; we engineer pathways for global success.
                    </p>
                </Reveal>
                
                <ul className="space-y-4 mb-8">
                    <Reveal direction="left" delay={0.3}>
                        <li className="flex items-center gap-3">
                            <div className="bg-amber-100 p-2 rounded-full text-amber-600"><Clock size={16} /></div>
                            <span className="text-slate-700 font-medium">24/7 Global Support Network</span>
                        </li>
                    </Reveal>
                    <Reveal direction="left" delay={0.4}>
                        <li className="flex items-center gap-3">
                            <div className="bg-amber-100 p-2 rounded-full text-amber-600"><Award size={16} /></div>
                            <span className="text-slate-700 font-medium">98% Visa Success Rate (2024)</span>
                        </li>
                    </Reveal>
                    <Reveal direction="left" delay={0.5}>
                        <li className="flex items-center gap-3">
                            <div className="bg-amber-100 p-2 rounded-full text-amber-600"><Globe size={16} /></div>
                            <span className="text-slate-700 font-medium">Direct Partnerships in Canada & Europe</span>
                        </li>
                    </Reveal>
                </ul>

                <Reveal direction="up" delay={0.6}>
                    <button className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-900 hover:text-white transition duration-300">
                        Read Our Full Story
                    </button>
                </Reveal>
            </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-12">
            {[
                { val: "500+", label: "Families Relocated" },
                { val: "12", label: "Global Offices" },
                { val: "98%", label: "Approval Rate" },
                { val: "24/7", label: "Support Active" }
            ].map((stat, i) => (
                <Reveal key={i} direction="up" delay={0.7 + (i * 0.1)}>
                    <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
                        <h4 className="text-4xl font-bold text-slate-900 font-serif mb-1 group-hover:text-amber-500 transition-colors">{stat.val}</h4>
                        <p className="text-slate-500 text-sm uppercase tracking-wider">{stat.label}</p>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};