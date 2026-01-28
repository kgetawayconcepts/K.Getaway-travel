import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. A consultant will respond within 24 hours.");
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2 block">Get In Touch</span>
            <h2 className="text-4xl font-bold font-serif text-slate-900">Start Your Journey</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50">
            {/* Contact Info */}
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 font-serif mb-4">Headquarters</h3>
                    <p className="text-slate-500 leading-relaxed">
                        Visit our Lagos office for a private consultation. We recommend booking an appointment in advance.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
                        <div className="bg-amber-500 text-white p-3 rounded-xl">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Visit Us</h4>
                            <p className="text-slate-500 text-sm">Lekki Phase 1, Lagos, Nigeria</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
                        <div className="bg-amber-500 text-white p-3 rounded-xl">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Email Us</h4>
                            <p className="text-slate-500 text-sm">K.Getawayconcepts@proton.me</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
                        <div className="bg-amber-500 text-white p-3 rounded-xl">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Call Us</h4>
                            <p className="text-slate-500 text-sm">+234 814 474 1568</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                        <input type="text" className="w-full p-4 bg-slate-50 rounded-xl border-transparent focus:bg-white focus:border-amber-500 focus:ring-0 transition" placeholder="John" required />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                        <input type="text" className="w-full p-4 bg-slate-50 rounded-xl border-transparent focus:bg-white focus:border-amber-500 focus:ring-0 transition" placeholder="Doe" required />
                    </div>
                </div>
                
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" className="w-full p-4 bg-slate-50 rounded-xl border-transparent focus:bg-white focus:border-amber-500 focus:ring-0 transition" placeholder="john@example.com" required />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                    <textarea className="w-full p-4 bg-slate-50 rounded-xl border-transparent focus:bg-white focus:border-amber-500 focus:ring-0 transition h-32" placeholder="I am interested in..." required></textarea>
                </div>

                <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-amber-500 hover:text-slate-900 transition flex items-center justify-center gap-2 shadow-lg">
                    Send Message <Send size={18} />
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};