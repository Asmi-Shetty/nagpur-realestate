import React, { useState } from 'react';
import { Info, Banknote, Layout, Camera, MapPin, ChevronDown, ShieldCheck, ArrowLeft, ArrowRight, TrendingUp, HelpCircle } from 'lucide-react';

const SellPage = ({ onBack }) => {
  const [listingType, setListingType] = useState('Sell');
  
  const steps = [
    { title: "Basic Info", icon: Info, status: 'current' },
    { title: "Price & Area", icon: Banknote, status: 'upcoming' },
    { title: "Amenities", icon: Layout, status: 'upcoming' },
    { title: "Photos", icon: Camera, status: 'upcoming' }
  ];

  return (
    <div className="min-h-screen bg-[#fafafb] font-sans text-gray-900 pb-20">
      <div className="container mx-auto px-8 py-12 max-w-5xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-medium text-[#0f172a] mb-4 tracking-tight">List Your Property in Nagpur</h1>
          <p className="text-gray-400 font-medium tracking-tight">Connect with thousands of buyers and tenants in just a few minutes.</p>
        </div>

        {/* Step Indicator */}
        <div className="relative flex justify-between items-center mb-20 max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -translate-y-6 z-0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center group">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 mb-3 shadow-sm ${
                step.status === 'current' 
                ? 'bg-[#14532d] text-white border-[#14532d]' 
                : 'bg-white text-gray-400 border-gray-200 group-hover:border-gray-400'
              }`}>
                <step.icon size={20} strokeWidth={2.5} />
              </div>
              <span className={`text-[11px] font-medium uppercase tracking-widest ${
                step.status === 'current' ? 'text-[#14532d]' : 'text-gray-500'
              }`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            
            {/* Listing Type & Category */}
            <div className="space-y-10">
              <div>
                <label className="block text-xs font-medium text-gray-900 mb-4 uppercase tracking-widest opacity-60">Listing Type</label>
                <div className="flex bg-gray-50 p-1.5 rounded-[24px] border border-gray-100">
                  {['Sell', 'Rent'].map(type => (
                    <button
                      key={type}
                      onClick={() => setListingType(type)}
                      className={`flex-1 py-4 rounded-[18px] font-medium text-sm transition-all ${
                        listingType === type 
                        ? 'bg-[#dcfce7] text-[#166534] shadow-sm' 
                        : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-900 mb-4 uppercase tracking-widest opacity-60">Property Category</label>
                <div className="relative group">
                  <select className="w-full appearance-none bg-gray-50 border border-gray-100 rounded-[24px] px-8 py-5 font-medium text-gray-700 focus:ring-4 focus:ring-[#14532d]/5 outline-none transition-all cursor-pointer">
                    <option>Residential Apartment</option>
                    <option>Independent House / Villa</option>
                    <option>Commercial Property</option>
                    <option>Industrial Plot</option>
                  </select>
                  <ChevronDown size={20} className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-gray-600 transition-colors" />
                </div>
              </div>
            </div>

            {/* Locality */}
            <div>
              <label className="block text-xs font-medium text-gray-900 mb-4 uppercase tracking-widest opacity-60">Locality in Nagpur</label>
              <div className="relative group">
                <MapPin size={22} className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#14532d] transition-colors" />
                <input 
                  type="text" 
                  placeholder="e.g. Dharampeth, Manish Nagar, Civil Lines" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-[24px] pl-16 pr-8 py-5 font-medium text-gray-700 focus:ring-4 focus:ring-[#14532d]/5 outline-none transition-all placeholder:text-gray-300"
                />
              </div>
            </div>
          </div>

          {/* Verification Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
             <div className="md:col-span-4 bg-[#021831] rounded-[32px] p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 blur-3xl group-hover:bg-white/10 transition-all duration-700" />
                <div className="bg-white/10 p-4 rounded-2xl w-fit mb-8 transition-transform group-hover:scale-110">
                  <ShieldCheck size={28} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-medium mb-4 tracking-tight leading-tight">Verified Leads</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">
                  Our Nagpur agents verify every query to ensure you get genuine calls only.
                </p>
             </div>
             <div className="md:col-span-8 rounded-[32px] overflow-hidden relative shadow-lg group">
                <div className="absolute inset-x-0 bottom-0 p-8 z-10 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-white text-xs font-medium uppercase tracking-widest flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Serving Nagpur since 2012
                  </span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Nagpur Night City"
                />
             </div>
          </div>

          {/* Action Bar */}
          <div className="flex justify-between items-center pt-10 border-t border-gray-50">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-medium text-sm"
            >
              <ArrowLeft size={18} />
              Back
            </button>
            <button className="bg-[#14532d] text-white px-10 py-5 rounded-[24px] font-medium text-sm hover:scale-[1.02] shadow-xl shadow-[#14532d]/10 transition-all active:scale-[0.98] flex items-center gap-3">
              Continue to Pricing
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Recommendation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
           <div className="bg-white p-8 rounded-[32px] border border-gray-100 flex items-center gap-6 group hover:shadow-xl transition-all cursor-pointer">
              <div className="bg-[#dcfce7] p-4 rounded-2xl text-[#166534] transition-transform group-hover:scale-110">
                <TrendingUp size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-medium text-[#0f172a] text-sm mb-1 tracking-tight">Market Insights</h4>
                <p className="text-[11px] text-gray-400 font-medium">Properties in Wardha Road are up 12% this year.</p>
              </div>
           </div>
           <div className="bg-white p-8 rounded-[32px] border border-gray-100 flex items-center gap-6 group hover:shadow-xl transition-all cursor-pointer">
              <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 transition-transform group-hover:scale-110">
                <HelpCircle size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-medium text-[#0f172a] text-sm mb-1 tracking-tight">Need Help?</h4>
                <p className="text-[11px] text-gray-400 font-medium">Our Nagpur relationship manager is available 24/7.</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default SellPage;
