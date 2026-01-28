import React, { useState } from 'react';
import { generateAssessment } from '../services/geminiService';
import { AssessmentRequest, AssessmentResult } from '../types';
import { Scale, ShieldCheck, Loader2, ArrowRight, Lock, CheckCircle } from 'lucide-react';

export const AIPlanner: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [assessment, setAssessment] = useState<AssessmentResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success'>('idle');

  const [formData, setFormData] = useState<AssessmentRequest>({
    fullName: '',
    email: '',
    passportType: '',
    destination: '',
    serviceType: '',
    age: '',
    languageLevel: '',
    fundingStatus: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAssessment(null);
    setPaymentStatus('idle');

    try {
      const result = await generateAssessment(formData);
      setAssessment(result);
    } catch (err) {
      setError("Strategic Audit Service is currently busy. Please contact administration directly.");
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = () => {
    // Check if Paystack script is loaded
    const PaystackPop = (window as any).PaystackPop;
    
    if (!PaystackPop) {
      alert("Payment system connecting... Please wait a moment and try again.");
      return;
    }

    if (!formData.email) {
      alert("Please ensure your email address is correct in the form.");
      return;
    }

    const paystack = new PaystackPop();
    paystack.newTransaction({
      // REPLACE WITH YOUR PUBLIC KEY
      key: 'pk_test_0000000000000000000000000000000000000000', 
      email: formData.email,
      amount: 25000 * 100, // 25,000 NGN
      currency: 'NGN',
      ref: '' + Math.floor((Math.random() * 1000000000) + 1),
      metadata: {
        custom_fields: [
          {
            display_name: "Service Class",
            variable_name: "service_class",
            value: formData.serviceType
          },
          {
            display_name: "Full Name",
            variable_name: "full_name",
            value: formData.fullName
          }
        ]
      },
      onSuccess: (transaction: any) => {
        setPaymentStatus('success');
        alert("Payment Confirmed! Reference: " + transaction.reference + ". Our consultants will contact you shortly.");
      },
      onCancel: () => {
        alert("Transaction was cancelled.");
      }
    });
  };

  return (
    <section id="planner" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
            
          {/* Form Side */}
          <div className="w-full md:w-1/2">
            <div className="mb-8">
                <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2 block">Phase 1: Data Collection</span>
                <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">Strategic Assessment</h2>
                <p className="text-slate-500 leading-relaxed">
                    Complete the preliminary audit below. Our systems will check your profile against current 2026 regulations for Canada, UK, and Schengen zones.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Legal Name</label>
                      <input name="fullName" type="text" required className="w-full p-4 bg-white rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-0 transition font-serif text-slate-900" placeholder="Passport Name" onChange={handleInputChange} />
                  </div>
                  <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                      <input name="email" type="email" required className="w-full p-4 bg-white rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-0 transition font-serif text-slate-900" placeholder="Official Email" onChange={handleInputChange} />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Passport Authority</label>
                        <select name="passportType" required className="w-full p-4 bg-white rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-0 transition" onChange={handleInputChange}>
                            <option value="">Select...</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Kenya">Kenya</option>
                            <option value="India">India</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Age</label>
                        <input name="age" type="number" required className="w-full p-4 bg-white rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-0 transition" placeholder="Years" onChange={handleInputChange} />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Destination</label>
                        <select name="destination" required className="w-full p-4 bg-white rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-0 transition" onChange={handleInputChange}>
                            <option value="">Select Target...</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">United Kingdom</option>
                            <option value="Europe">Europe (Schengen)</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Serbia">Serbia</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service Class</label>
                        <select name="serviceType" required className="w-full p-4 bg-white rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-0 transition" onChange={handleInputChange}>
                            <option value="">Select Class...</option>
                            <option value="Work Permit">Work Permit</option>
                            <option value="Study Visa">Study Visa</option>
                            <option value="Tourist">Tourist / Visit</option>
                            <option value="Permanent Residency">Permanent Residency</option>
                        </select>
                    </div>
                </div>

                {/* Conditional Fields based on destination could go here, keeping it simple for now but adding key metrics */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Language (Canada)</label>
                        <select name="languageLevel" className="w-full p-4 bg-white rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-0 transition" onChange={handleInputChange}>
                            <option value="None">Not Applicable</option>
                            <option value="IELTS 8+">IELTS 8+ / CLB 9</option>
                            <option value="French NCLC 7">French NCLC 7+</option>
                            <option value="Basic">Basic</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Funds Available</label>
                        <select name="fundingStatus" className="w-full p-4 bg-white rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-0 transition" onChange={handleInputChange}>
                            <option value="Fully Funded">Fully Self-Funded</option>
                            <option value="Partial">Partial / Sponsor</option>
                            <option value="Loans">Looking for Loans</option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold hover:bg-amber-500 hover:text-slate-900 transition shadow-xl disabled:opacity-70 flex justify-center items-center gap-3 mt-4"
                >
                    {loading ? (
                    <>
                        <Loader2 className="animate-spin" /> Analyzing 2026 Targets...
                    </>
                    ) : (
                    <>
                        <Scale size={20} /> Run Preliminary Audit
                    </>
                    )}
                </button>
            </form>
          </div>

          {/* Result Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            
            {!assessment && !loading && !error && (
                <div className="text-center p-12 border-2 border-dashed border-slate-200 rounded-[2rem]">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                        <Lock size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Awaiting Data</h3>
                    <p className="text-slate-400 max-w-xs mx-auto">
                        Submit your profile to unlock initial insights. Full strategy requires the Phase 3 Deep Audit.
                    </p>
                </div>
            )}

            {loading && (
                <div className="text-center p-12">
                    <Loader2 size={48} className="animate-spin text-amber-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">Consulting the Architect</h3>
                    <p className="text-slate-500">Checking CRS scores, Red Flags, and 2026 Quotas...</p>
                </div>
            )}

            {assessment && (
                <div className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden animate-fadeIn">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-6">
                            <ShieldCheck className="text-amber-500" size={32} />
                            <div>
                                <h3 className="text-2xl font-bold font-serif">Preliminary Assessment</h3>
                                <p className="text-slate-400 text-sm">Generated by K.Getaway Intelligence</p>
                            </div>
                        </div>

                        <div className="space-y-6 mb-8">
                            <div>
                                <h4 className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-2">Strategic Summary</h4>
                                <p className="text-slate-300 leading-relaxed text-sm">
                                    {assessment.strategicSummary}
                                </p>
                            </div>

                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">Key Insights</h4>
                                <ul className="space-y-2">
                                    {assessment.keyInsights.map((insight, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                            <span className="text-amber-500 mt-1">●</span> {insight}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {assessment.riskAnalysis && (
                                <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/30">
                                    <h4 className="text-red-400 font-bold text-xs uppercase tracking-widest mb-2">Risk Analysis</h4>
                                    <p className="text-red-200 text-sm">{assessment.riskAnalysis}</p>
                                </div>
                            )}
                        </div>

                        {paymentStatus === 'success' ? (
                           <div className="bg-green-600/20 border border-green-500 p-6 rounded-xl flex items-center gap-4">
                              <CheckCircle className="text-green-500 h-8 w-8" />
                              <div>
                                <h4 className="font-bold text-white text-lg">Phase 2 Unlocked</h4>
                                <p className="text-slate-300 text-sm">Deep Audit scheduled. Check your email for the upload portal.</p>
                              </div>
                           </div>
                        ) : (
                          <div className="bg-amber-500 text-slate-900 p-6 rounded-xl">
                              <h4 className="font-bold text-lg mb-2">Phase 2: The Deep Audit</h4>
                              <p className="text-slate-800 text-sm mb-4">
                                  {assessment.nextSteps}
                              </p>
                              <button 
                                onClick={handlePayment}
                                className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition shadow-lg"
                              >
                                  Pay Assessment Fee (₦25,000) <ArrowRight size={16} />
                              </button>
                          </div>
                        )}
                    </div>
                </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};