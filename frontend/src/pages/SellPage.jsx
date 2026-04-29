import React, { useState } from 'react';
import { Info, Banknote, Layout, Camera, MapPin, ChevronDown, ShieldCheck, ArrowLeft, ArrowRight, TrendingUp, HelpCircle, Check, UploadCloud } from 'lucide-react';

const SellPage = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    listingType: 'Sell',
    category: 'Residential Apartment',
    locality: '',
    price: '',
    area: '',
    amenities: [],
    photos: []
  });

  const steps = [
    { title: "Basic Info", icon: Info },
    { title: "Price & Area", icon: Banknote },
    { title: "Amenities", icon: Layout },
    { title: "Photos", icon: Camera }
  ];

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
    else onBack();
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 0:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Listing Type & Category */}
            <div className="space-y-10">
              <div>
                <label className="block text-xs font-medium text-gray-900 mb-4 uppercase tracking-widest opacity-60">Listing Type</label>
                <div className="flex bg-gray-50 p-1.5 rounded-[24px] border border-gray-100">
                  {['Sell', 'Rent'].map(type => (
                    <button
                      key={type}
                      onClick={() => setFormData({...formData, listingType: type})}
                      className={`flex-1 py-4 rounded-[18px] font-medium text-sm transition-all ${
                        formData.listingType === type 
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
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full appearance-none bg-gray-50 border border-gray-100 rounded-[24px] px-8 py-5 font-medium text-gray-700 focus:ring-4 focus:ring-[#14532d]/5 outline-none transition-all cursor-pointer"
                  >
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
                  value={formData.locality}
                  onChange={(e) => setFormData({...formData, locality: e.target.value})}
                  placeholder="e.g. Dharampeth, Manish Nagar, Civil Lines" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-[24px] pl-16 pr-8 py-5 font-medium text-gray-700 focus:ring-4 focus:ring-[#14532d]/5 outline-none transition-all placeholder:text-gray-300"
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 animate-in fade-in slide-in-from-right-4 duration-300">
             <div>
                <label className="block text-xs font-medium text-gray-900 mb-4 uppercase tracking-widest opacity-60">
                   {formData.listingType === 'Sell' ? 'Expected Price (₹)' : 'Monthly Rent (₹)'}
                </label>
                <div className="relative group">
                  <Banknote size={22} className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#14532d] transition-colors" />
                  <input 
                    type="number" 
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    placeholder={formData.listingType === 'Sell' ? "e.g. 5000000" : "e.g. 25000"} 
                    className="w-full bg-gray-50 border border-gray-100 rounded-[24px] pl-16 pr-8 py-5 font-medium text-gray-700 focus:ring-4 focus:ring-[#14532d]/5 outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-900 mb-4 uppercase tracking-widest opacity-60">Super Built-up Area (sq ft)</label>
                <div className="relative group">
                  <Layout size={22} className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#14532d] transition-colors" />
                  <input 
                    type="number" 
                    value={formData.area}
                    onChange={(e) => setFormData({...formData, area: e.target.value})}
                    placeholder="e.g. 1200" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-[24px] pl-16 pr-8 py-5 font-medium text-gray-700 focus:ring-4 focus:ring-[#14532d]/5 outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>
          </div>
        );
      case 2:
        const availableAmenities = ['Parking', 'Power Backup', 'Gym', 'Swimming Pool', 'Security Guard', 'Lift', 'Club House', 'Park'];
        return (
          <div className="mb-12 animate-in fade-in slide-in-from-right-4 duration-300">
             <label className="block text-xs font-medium text-gray-900 mb-6 uppercase tracking-widest opacity-60">Select Amenities</label>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {availableAmenities.map(amenity => (
                  <button 
                    key={amenity}
                    onClick={() => {
                      const newAmenities = formData.amenities.includes(amenity) 
                        ? formData.amenities.filter(a => a !== amenity)
                        : [...formData.amenities, amenity];
                      setFormData({...formData, amenities: newAmenities});
                    }}
                    className={`p-4 rounded-2xl border text-sm font-medium transition-all flex flex-col items-center justify-center gap-2 ${
                      formData.amenities.includes(amenity)
                      ? 'border-[#14532d] bg-[#dcfce7] text-[#14532d]'
                      : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200 hover:bg-white'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${formData.amenities.includes(amenity) ? 'bg-[#14532d] text-white' : 'bg-gray-200 text-gray-400'}`}>
                      {formData.amenities.includes(amenity) ? <Check size={14} strokeWidth={3} /> : <div className="w-2 h-2 rounded-full bg-gray-400" />}
                    </div>
                    {amenity}
                  </button>
               ))}
             </div>
          </div>
        );
      case 3:
        return (
          <div className="mb-12 animate-in fade-in slide-in-from-right-4 duration-300">
             <label className="block text-xs font-medium text-gray-900 mb-6 uppercase tracking-widest opacity-60">Upload Photos</label>
             <div className="border-2 border-dashed border-gray-200 rounded-[32px] p-12 flex flex-col items-center justify-center text-center hover:border-[#14532d]/30 hover:bg-[#14532d]/5 transition-all cursor-pointer group bg-gray-50 hover:bg-gray-50/50">
                <div className="bg-[#14532d]/10 p-5 rounded-full text-[#14532d] mb-6 group-hover:scale-110 transition-transform">
                  <UploadCloud size={32} />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Click to upload photos</h4>
                <p className="text-gray-400 text-sm font-medium">PNG, JPG, up to 10MB each</p>
             </div>
          </div>
        );
      case 4:
        return (
           <div className="text-center py-16 animate-in fade-in zoom-in-95 duration-500">
             <div className="w-24 h-24 bg-[#dcfce7] rounded-full flex items-center justify-center mx-auto mb-8 text-[#14532d] shadow-lg shadow-green-900/10">
               <Check size={48} strokeWidth={3} />
             </div>
             <h2 className="text-3xl font-medium text-gray-900 mb-4">Property Listed Successfully!</h2>
             <p className="text-gray-500 font-medium mb-12 max-w-md mx-auto">Your property is now live and waiting for verified leads. Our relationship manager will contact you soon.</p>
             <button onClick={onBack} className="bg-[#14532d] text-white px-10 py-5 rounded-[24px] font-medium text-sm hover:scale-[1.02] shadow-xl shadow-[#14532d]/10 transition-all active:scale-[0.98]">
               Return to Dashboard
             </button>
           </div>
        );
      default:
        return null;
    }
  };

  const getNextButtonText = () => {
    switch(currentStep) {
      case 0: return "Continue to Pricing";
      case 1: return "Continue to Amenities";
      case 2: return "Continue to Photos";
      case 3: return "Post Property";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafb] font-sans text-gray-900 pb-20">
      <div className="container mx-auto px-8 py-12 max-w-5xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-medium text-[#0f172a] mb-4 tracking-tight">List Your Property in Nagpur</h1>
          <p className="text-gray-400 font-medium tracking-tight">Connect with thousands of buyers and tenants in just a few minutes.</p>
        </div>

        {/* Step Indicator (hide on success step 4) */}
        {currentStep < 4 && (
          <div className="relative flex justify-between items-center mb-20 max-w-4xl mx-auto">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 -translate-y-6 z-0">
              <div 
                className="h-full bg-[#14532d] transition-all duration-500 ease-out" 
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }} 
              />
            </div>
            
            {steps.map((step, i) => {
              const isCompleted = i < currentStep;
              const isCurrent = i === currentStep;
              return (
                <div key={i} className="relative z-10 flex flex-col items-center group">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 mb-3 shadow-sm duration-300 ${
                    isCurrent 
                    ? 'bg-[#14532d] text-white border-[#14532d] scale-110' 
                    : isCompleted
                      ? 'bg-[#dcfce7] text-[#166534] border-[#dcfce7]'
                      : 'bg-white text-gray-300 border-gray-100'
                  }`}>
                    {isCompleted ? <Check size={20} strokeWidth={3} /> : <step.icon size={isCurrent ? 20 : 18} strokeWidth={2.5} />}
                  </div>
                  <span className={`text-[11px] font-medium uppercase tracking-widest transition-colors ${
                    isCurrent ? 'text-[#14532d]' : isCompleted ? 'text-gray-700' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] p-12 mb-12">
          
          {renderStepContent()}

          {/* Action Bar (hide on success step 4) */}
          {currentStep < 4 && (
            <div className="flex justify-between items-center pt-10 border-t border-gray-50">
              <button 
                onClick={handlePrev}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-medium text-sm"
              >
                <ArrowLeft size={18} />
                Back
              </button>
              <button 
                onClick={handleNext}
                className="bg-[#14532d] text-white px-10 py-5 rounded-[24px] font-medium text-sm hover:scale-[1.02] shadow-xl shadow-[#14532d]/10 transition-all active:scale-[0.98] flex items-center gap-3"
              >
                {getNextButtonText()}
                {currentStep < 3 ? <ArrowRight size={18} /> : <Check size={18} />}
              </button>
            </div>
          )}
        </div>

        {/* Verification Card Section (only show on step 0) */}
        {currentStep === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 animate-in fade-in slide-in-from-bottom-8">
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
        )}

        {/* Bottom Recommendation Cards (only show on step 0) */}
        {currentStep === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 animate-in fade-in slide-in-from-bottom-8 delay-100">
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
        )}

      </div>
    </div>
  );
};

export default SellPage;
