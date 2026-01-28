import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Chioma Adebayo",
    role: "Tech Talent Relocation",
    location: "Toronto, Canada",
    content: "The 'French Advantage' strategy changed everything. My CRS score jumped to 510, and I got my ITA in the very next draw. K.Getaway didn't just file papers; they built a path I didn't know existed.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    service: "Canada PR"
  },
  {
    id: 2,
    name: "Ibrahim Musa",
    role: "Construction Supervisor",
    location: "Doha, Qatar",
    content: "Honest and straightforward. They flagged my previous transit risks in Europe and routed me safely through non-Schengen zones. I'm now 6 months into my contract. Professionalism at its peak.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    service: "Work Permit"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "MSc Student",
    location: "London, UK",
    content: "I was worried about the 2026 funding requirements for international students. The Deep Audit clarified my financial documentation perfectly. My visa was approved in just 5 working days.",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    service: "Study Visa"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-3 block">The Architect's Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-6">Success Stories</h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Real results for high-calibre candidates. From improving CRS scores to securing complex work permits, our track record speaks for itself.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative hover:-translate-y-2 transition-transform duration-300">
              
              <div className="absolute -top-6 right-8 bg-amber-500 text-white p-3 rounded-xl shadow-lg shadow-amber-500/30">
                <Quote size={24} fill="currentColor" />
              </div>

              <div className="flex items-center gap-2 mb-6 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed italic">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-900 font-serif leading-tight">{item.name}</h4>
                  <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                    <MapPin size={10} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-8">
                 <span className="text-[10px] font-extrabold text-slate-300 uppercase tracking-widest">{item.service}</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};