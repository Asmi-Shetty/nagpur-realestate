import React, { useState, useMemo } from 'react';
import { Heart, MapPin, Share2, ChevronDown, Check, Search, Bell, User, X, Phone } from 'lucide-react';

const RentPage = () => {
  const [rentalTypes, setRentalTypes] = useState(['Apartment']);
  const [rentRange, setRentRange] = useState(150000);
  const [furnishing, setFurnishing] = useState('Semi-furnished');
  const [preferredTenants, setPreferredTenants] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [contactModal, setContactModal] = useState({ isOpen: false, property: null });

  const allProperties = [
    {
      id: 1,
      title: "3 BHK Premium Flat",
      type: "Apartment",
      price: "₹35,000",
      priceValue: 35000,
      deposit: "₹1.0L",
      location: "Dharampeth, Nagpur",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
      tags: ["Semi-furnished", "Families Only", "Reserved Parking"],
      furnishing: "Semi-furnished",
      tenants: ["Families"],
      amenities: ["Parking", "Power Backup", "Security Guard"],
      isVerified: true,
      isNewLaunch: true,
      contactType: "Contact Owner"
    },
    {
      id: 2,
      title: "2 BHK Ind. House",
      type: "Independent House",
      price: "₹18,500",
      priceValue: 18500,
      deposit: "₹50k",
      location: "Manish Nagar, Nagpur",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      tags: ["Unfurnished", "Bachelor Friendly", "Pet Friendly"],
      furnishing: "Unfurnished",
      tenants: ["Bachelors"],
      amenities: ["Parking"],
      isVerified: true,
      isNewLaunch: false,
      contactType: "Contact Agent"
    },
    {
      id: 3,
      title: "1 BHK Modern Studio",
      type: "Apartment",
      price: "₹12,000",
      priceValue: 12000,
      deposit: "₹30k",
      location: "Civil Lines, Nagpur",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
      tags: ["Furnished", "Bachelors Only", "Lifts Available"],
      furnishing: "Furnished",
      tenants: ["Bachelors", "Company Lease"],
      amenities: ["Lift", "Power Backup", "Security Guard"],
      isVerified: true,
      isNewLaunch: false,
      contactType: "Contact Owner"
    },
    {
       id: 4,
       title: "4 BHK Luxury Villa",
       type: "Villa",
       price: "₹85,000",
       priceValue: 85000,
       deposit: "₹2.5L",
       location: "Wardha Road, Nagpur",
       image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
       tags: ["Fully Furnished", "Families Only", "Private Garden"],
       furnishing: "Furnished",
       tenants: ["Families", "Company Lease"],
       amenities: ["Parking", "Power Backup", "Lift", "Security Guard"],
       isVerified: true,
       isNewLaunch: true,
       contactType: "Contact Agent"
    }
  ];

  const filteredProperties = useMemo(() => {
    return allProperties.filter(p => {
      if (rentalTypes.length > 0 && !rentalTypes.includes(p.type)) return false;
      if (p.priceValue > rentRange) return false;
      if (furnishing && p.furnishing !== furnishing && furnishing !== 'Any') return false;
      if (preferredTenants.length > 0 && !preferredTenants.some(t => p.tenants.includes(t))) return false;
      if (selectedAmenities.length > 0 && !selectedAmenities.every(a => p.amenities.includes(a))) return false;
      return true;
    });
  }, [rentalTypes, rentRange, furnishing, preferredTenants, selectedAmenities]);

  const toggleArrayItem = (setState, item) => {
    setState(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const handleReset = () => {
    setRentalTypes([]);
    setRentRange(150000);
    setFurnishing('');
    setPreferredTenants([]);
    setSelectedAmenities([]);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-[#0f172a]">
      {/* Search Header for Rent Page */}
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">Filters</h2>
              <button onClick={handleReset} className="text-[#14532d] font-medium text-sm hover:underline">Reset All</button>
            </div>

            <div className="space-y-10">
              {/* Rental Type */}
              <div>
                <h3 className="text-sm font-semibold mb-5 opacity-80 uppercase tracking-wider">Rental Type</h3>
                <div className="space-y-4">
                  {['Apartment', 'Villa', 'Independent House'].map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="checkbox" 
                          checked={rentalTypes.includes(type)}
                          onChange={() => toggleArrayItem(setRentalTypes, type)}
                          className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-md checked:bg-[#14532d] checked:border-[#14532d] transition-all" 
                        />
                        <Check size={12} className="absolute text-white scale-0 peer-checked:scale-100 transition-transform" strokeWidth={4} />
                      </div>
                      <span className="text-gray-600 group-hover:text-[#0f172a] transition-colors font-medium">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Monthly Rent */}
              <div>
                <h3 className="text-sm font-semibold mb-5 opacity-80 uppercase tracking-wider">Monthly Rent</h3>
                <div className="px-1">
                  <input 
                    type="range" 
                    min="5000" 
                    max="150000" 
                    step="5000"
                    value={rentRange}
                    onChange={(e) => setRentRange(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#14532d]" 
                  />
                  <div className="flex justify-between mt-3 text-xs font-bold text-gray-400">
                    <span>₹5k</span>
                    <span className="text-[#14532d]">Up to ₹{(rentRange / 1000).toFixed(1)}k</span>
                    <span>₹1.5L</span>
                  </div>
                </div>
              </div>

              {/* Furnishing */}
              <div>
                <h3 className="text-sm font-semibold mb-4 opacity-80 uppercase tracking-wider">Furnishing</h3>
                <div className="flex flex-col gap-2">
                  {['Furnished', 'Semi-furnished', 'Unfurnished'].map((option) => (
                    <button
                      key={option}
                      onClick={() => setFurnishing(furnishing === option ? '' : option)}
                      className={`w-full py-3 px-4 rounded-xl border text-sm font-medium transition-all text-left ${
                        furnishing === option 
                        ? 'border-[#14532d] bg-[#f0fdf4] text-[#14532d] ring-1 ring-[#14532d]' 
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Tenants */}
              <div>
                <h3 className="text-sm font-semibold mb-4 opacity-80 uppercase tracking-wider">Preferred Tenants</h3>
                <div className="flex flex-wrap gap-2">
                  {['Families', 'Bachelors', 'Company Lease'].map((tenant) => (
                    <button
                      key={tenant}
                      onClick={() => toggleArrayItem(setPreferredTenants, tenant)}
                      className={`px-4 py-2 rounded-full border text-[11px] font-semibold transition-all uppercase tracking-tight ${
                        preferredTenants.includes(tenant)
                        ? 'border-[#14532d] bg-[#f0fdf4] text-[#14532d]'
                        : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-900'
                      }`}
                    >
                      {tenant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-sm font-semibold mb-5 opacity-80 uppercase tracking-wider">Amenities</h3>
                <div className="space-y-4">
                  {['Parking', 'Power Backup', 'Lift', 'Security Guard'].map((amenity) => (
                    <label key={amenity} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="checkbox" 
                          checked={selectedAmenities.includes(amenity)}
                          onChange={() => toggleArrayItem(setSelectedAmenities, amenity)}
                          className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-md checked:bg-[#14532d] checked:border-[#14532d] transition-all" 
                        />
                        <Check size={12} className="absolute text-white scale-0 peer-checked:scale-100 transition-transform" strokeWidth={4} />
                      </div>
                      <span className="text-gray-600 group-hover:text-[#0f172a] transition-colors font-medium">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h1 className="text-4xl font-semibold text-[#0f172a] mb-2 tracking-tight">Properties for Rent in Nagpur</h1>
                <p className="text-gray-500 text-sm font-medium">Showing {filteredProperties.length} results for your current search criteria</p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer group">
                <span className="text-xs font-semibold text-gray-400 whitespace-nowrap">Sort by:</span>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100 hover:border-gray-300 transition-all">
                  <span className="text-sm font-semibold text-[#0f172a]">Newest First</span>
                  <ChevronDown size={16} className="text-gray-400 group-hover:text-[#14532d]" />
                </div>
              </div>
            </div>

            {filteredProperties.length === 0 ? (
               <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
                 <div className="text-gray-400 mb-4"><Search size={48} className="mx-auto" /></div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">No properties found</h3>
                 <p className="text-gray-500">Try adjusting your filters to find more results.</p>
                 <button onClick={handleReset} className="mt-6 bg-[#14532d] text-white px-6 py-2 rounded-xl font-medium">Clear Filters</button>
               </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((prop) => (
                  <div key={prop.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden flex flex-col h-full border-t-0 ring-1 ring-gray-50">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute top-4 left-4 z-20 flex gap-2">
                         {prop.isVerified && (
                           <div className="bg-[#14532d] text-white text-[8px] font-bold px-2 py-1 rounded uppercase tracking-widest flex items-center gap-1 backdrop-blur-sm bg-opacity-90">
                             <Check size={8} strokeWidth={4} /> Verified
                           </div>
                         )}
                         {prop.isNewLaunch && (
                           <div className="bg-[#1e293b] text-white text-[8px] font-bold px-2 py-1 rounded uppercase tracking-widest opacity-90 backdrop-blur-sm">
                             New Launch
                           </div>
                         )}
                      </div>
                      <button className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-md p-2 rounded-full text-gray-800 hover:text-red-500 transition-all shadow-lg">
                        <Heart size={16} className="stroke-[2.5px]" />
                      </button>
                      <img 
                        src={prop.image} 
                        alt={prop.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>

                    <div className="p-5 flex flex-col flex-1 bg-[#fffdf9]">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-lg font-semibold text-[#0f172a] leading-tight pr-2">{prop.title}</h2>
                        <div className="text-right shrink-0">
                          <div className="text-xl font-bold text-[#14532d] leading-none mb-1">{prop.price} <span className="text-[10px] font-medium text-gray-400 uppercase tracking-tighter">/mo</span></div>
                          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none">Dep: {prop.deposit}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-gray-500 mb-5 font-medium">
                        <MapPin size={14} className="text-gray-300 shrink-0" />
                        <span className="text-xs truncate">{prop.location}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {prop.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="bg-gray-100 text-gray-500 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-tight">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex gap-2">
                        <button 
                          onClick={() => setContactModal({ isOpen: true, property: prop })}
                          className="flex-1 bg-[#14532d] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#0f4022] transition-all shadow-lg shadow-green-900/10 flex items-center justify-center gap-1.5 active:scale-[0.98]"
                        >
                          <Phone size={14} />
                          {prop.contactType}
                        </button>
                        <button className="p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all text-gray-500 active:scale-95">
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Contact Owner Modal */}
      {contactModal.isOpen && contactModal.property && (
        <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={(e) => { if(e.target === e.currentTarget) setContactModal({isOpen: false, property: null}) }}>
          <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setContactModal({isOpen: false, property: null})} 
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 p-2 rounded-full"
            >
              <X size={20} />
            </button>
            
            <div className="mb-6 pr-10">
              <h3 className="text-2xl font-semibold text-[#0f172a] mb-2">{contactModal.property.contactType}</h3>
              <p className="text-gray-500 text-sm font-medium">Get in touch for {contactModal.property.title}</p>
            </div>

            <div className="space-y-5 bg-gray-50 rounded-2xl p-5 mb-6">
              <div className="flex items-center gap-4">
                 <div className="bg-[#14532d]/10 p-3 rounded-xl text-[#14532d]">
                    <User size={20} />
                 </div>
                 <div>
                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Name</div>
                   <div className="font-semibold text-[#0f172a]">{contactModal.property.contactType === 'Contact Agent' ? 'Rajesh Estate Agents' : 'Parth Sharma'}</div>
                 </div>
              </div>
              
              <div className="h-px bg-gray-200 w-full" />
              
              <div className="flex items-center gap-4">
                 <div className="bg-[#14532d]/10 p-3 rounded-xl text-[#14532d]">
                    <Phone size={20} />
                 </div>
                 <div>
                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Phone</div>
                   <div className="font-semibold text-[#0f172a] tracking-wide">+91 98765 43210</div>
                 </div>
              </div>
            </div>

            <button className="w-full bg-[#14532d] text-white py-4 rounded-2xl font-bold text-sm hover:bg-[#0f4022] transition-all shadow-xl shadow-green-900/10 flex justify-center items-center gap-2 active:scale-95">
               <Phone size={18} fill="currentColor" />
               Call Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentPage;
