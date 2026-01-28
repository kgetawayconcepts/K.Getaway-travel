import React from 'react';
import { Plane, Building2, Scale, Briefcase, Globe2, FileCheck } from 'lucide-react';
import { Reveal } from './Reveal';

const services = [
  {
    icon: <Briefcase size={28} />,
    title: "Work Permits",
    description: "Specialized contracts for Serbia, Albania, Qatar, Kuwait, and Israel."
  },
  {
    icon: <Scale size={28} />,
    title: "Canada Immigration",
    description: "Strategic Architects for PR, PNP, and French-draw pathways."
  },
  {
    icon: <Globe2 size={28} />,
    title: "Study Visas (2026)",
    description: "Expert guidance for UK, Canada & USA admissions and funding."
  },
  {
    icon: <FileCheck size={28} />,
    title: "The Deep Audit",
    description: "Phase 3 comprehensive profile analysis and strategy mapping."
  },
  {
    icon: <Plane size={28} />,
    title: "Flight Logistics",
    description: "Risk-free routing for sensitive passports. No self-transfers."
  },
  {
    icon: <Building2 size={28} />,
    title: "Luxury & Corporate",
    description: "High-end travel management for executives and firms."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Text Side */}
            <div className="lg:w-1/3 space-y-8 sticky top-24">
                <Reveal direction="right">
                    <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Our Expertise</span>
                </Reveal>
                <Reveal direction="right" delay={0.1}>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 leading-tight">
                        Strategic <br />
                        <span className="relative inline-block">
                            Consultancy
                            <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-200/50 -z-10"></span>
                        </span>
                    </h2>
                </Reveal>
                <Reveal direction="right" delay={0.2}>
                    <p className="text-slate-500 leading-relaxed text-lg">
                        We operate on a phased model. From the initial <strong>Assessment Fee</strong> to the <strong>Deep Audit</strong>, we filter for high-calibre candidates serious about global mobility.
                    </p>
                </Reveal>
                
                <div className="space-y-4 pt-4 border-t border-slate-100">
                    <Reveal direction="up" delay={0.3}>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-900">1</div>
                            <div>
                                <h4 className="font-bold text-slate-900">The Welcome</h4>
                                <p className="text-xs text-slate-500">Profile intake & goal setting.</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal direction="up" delay={0.4}>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700">2</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Assessment Fee</h4>
                                <p className="text-xs text-slate-500">Mandatory engagement retainer.</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal direction="up" delay={0.5}>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center font-bold text-white">3</div>
                            <div>
                                <h4 className="font-bold text-slate-900">The Deep Audit</h4>
                                <p className="text-xs text-slate-500">Full strategy & document mapping.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Grid Side */}
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <Reveal key={index} delay={index * 0.1} direction="up" width="100%">
                        <div className={`h-full p-8 rounded-[2rem] border border-slate-100 hover:border-amber-100 bg-white hover:bg-amber-50/20 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl`}>
                            <div className="w-14 h-14 bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all duration-500 shadow-sm group-hover:rotate-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};