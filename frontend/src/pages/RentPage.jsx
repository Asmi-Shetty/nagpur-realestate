import React, { useState } from 'react';
import { Heart, MapPin, Share2, ChevronDown, Check, Search, Bell, User } from 'lucide-react';

const RentPage = () => {
  const [rentRange, setRentRange] = useState(70000);
  const [furnishing, setFurnishing] = useState('Semi-furnished');

  const properties = [
    {
      id: 1,
      title: "3 BHK Premium Flat",
      price: "₹35,000",
      deposit: "₹1.0L",
      location: "Dharampeth, Nagpur",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
      tags: ["Semi-furnished", "Families Only", "Reserved Parking"],
      isVerified: true,
      isNewLaunch: true,
      contactType: "Contact Owner"
    },
    {
      id: 2,
      title: "2 BHK Ind. House",
      price: "₹18,500",
      deposit: "₹50k",
      location: "Manish Nagar, Nagpur",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      tags: ["Unfurnished", "Bachelor Friendly", "Pet Friendly"],
      isVerified: true,
      isNewLaunch: false,
      contactType: "Contact Agent"
    },
    {
      id: 3,
      title: "1 BHK Modern Studio",
      price: "₹12,000",
      deposit: "₹30k",
      location: "Civil Lines, Nagpur",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
      tags: ["Furnished", "Bachelors Only", "Lifts Available"],
      isVerified: true,
      isNewLaunch: false,
      contactType: "Contact Owner"
    },
    {
       id: 4,
       title: "4 BHK Luxury Villa",
       price: "₹85,000",
       deposit: "₹2.5L",
       location: "Wardha Road, Nagpur",
       image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
       tags: ["Fully Furnished", "Families Only", "Private Garden"],
       isVerified: true,
       isNewLaunch: true,
       contactType: "Contact Agent"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-[#0f172a]">
      {/* Search Header for Rent Page */}
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">Filters</h2>
              <button className="text-[#14532d] font-medium text-sm hover:underline">Reset All</button>
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
                          defaultChecked={type === 'Apartment'}
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
                    value={rentRange}
                    onChange={(e) => setRentRange(e.target.value)}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#14532d]" 
                  />
                  <div className="flex justify-between mt-3 text-xs font-bold text-gray-400">
                    <span>₹5k</span>
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
                      onClick={() => setFurnishing(option)}
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
                      className="px-4 py-2 rounded-full border border-gray-200 text-[11px] font-semibold text-gray-500 hover:border-gray-400 hover:text-gray-900 transition-all uppercase tracking-tight"
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
                <p className="text-gray-500 text-sm font-medium">Showing 124 results for your current search criteria</p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer group">
                <span className="text-xs font-semibold text-gray-400 whitespace-nowrap">Sort by:</span>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100 hover:border-gray-300 transition-all">
                  <span className="text-sm font-semibold text-[#0f172a]">Newest First</span>
                  <ChevronDown size={16} className="text-gray-400 group-hover:text-[#14532d]" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {properties.map((prop) => (
                <div key={prop.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden flex flex-col h-full border-t-0 ring-1 ring-gray-50">
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute top-5 left-5 z-20 flex gap-2">
                       {prop.isVerified && (
                         <div className="bg-[#14532d] text-white text-[9px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest flex items-center gap-1.5 backdrop-blur-sm bg-opacity-90">
                           <Check size={10} strokeWidth={4} /> Verified
                         </div>
                       )}
                       {prop.isNewLaunch && (
                         <div className="bg-[#1e293b] text-white text-[9px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest opacity-90 backdrop-blur-sm">
                           New Launch
                         </div>
                       )}
                    </div>
                    <button className="absolute top-5 right-5 z-20 bg-white/80 backdrop-blur-md p-2.5 rounded-full text-gray-800 hover:text-red-500 transition-all shadow-lg">
                      <Heart size={20} className="stroke-[2.5px]" />
                    </button>
                    <img 
                      src={prop.image} 
                      alt={prop.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-1 bg-[#fffdf9]">
                    <div className="flex justify-between items-start mb-6">
                      <h2 className="text-2xl font-semibold text-[#0f172a]">{prop.title}</h2>
                      <div className="text-right">
                        <div className="text-[26px] font-bold text-[#14532d] leading-none mb-1">{prop.price} <span className="text-xs font-medium text-gray-400 uppercase tracking-tighter">/mo</span></div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Deposit: {prop.deposit}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 mb-8 font-medium">
                      <MapPin size={16} className="text-gray-300" />
                      <span className="text-sm">{prop.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {prop.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-tight">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex gap-3">
                      <button className="flex-1 bg-[#14532d] text-white py-4.5 rounded-2xl font-bold text-sm hover:bg-[#0f4022] transition-all shadow-xl shadow-green-900/10 flex items-center justify-center gap-2 active:scale-[0.98]">
                        <span className="opacity-0 w-0">📞</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {prop.contactType}
                      </button>
                      <button className="p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all text-gray-500 group/share active:scale-95">
                        <Share2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default RentPage;
