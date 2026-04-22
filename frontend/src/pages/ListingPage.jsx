import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Heart, MapPin, Square, Bed, Calendar, Check, Zap } from 'lucide-react';

const PropertyCard = ({ property, onClick }) => {
  const [saved, setSaved] = useState(false);

  return (
    <div 
      onClick={() => onClick(property)}
      className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          {property.isVerified && (
            <span className="bg-[#14532d] text-white text-[9px] font-medium px-2.5 py-1.5 rounded-lg flex items-center gap-1 uppercase tracking-wider">
              <Check size={10} strokeWidth={4} /> Verified
            </span>
          )}
          {property.tags?.includes("New Launch") && (
            <span className="bg-[#0f172a] text-white text-[9px] font-medium px-2.5 py-1.5 rounded-lg uppercase tracking-wider">
              New Launch
            </span>
          )}
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
          className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md p-2.5 rounded-full text-gray-800 hover:text-red-500 transition-all shadow-lg active:scale-90"
        >
          <Heart size={20} fill={saved ? "#ef4444" : "none"} className={saved ? "text-red-500" : ""} />
        </button>
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1 bg-[#fffdf9]">
        <div className="flex justify-between items-center mb-3">
          <div className="text-[#14532d] text-2xl font-medium">{property.price}</div>
          <div className="bg-[#dcfce7] text-[#166534] text-[10px] font-medium px-3 py-1.5 rounded-lg uppercase tracking-widest">
            {property.bhk}
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-gray-500 mb-6 group-hover:text-gray-900 transition-colors">
          <MapPin size={16} className="text-gray-300" />
          <span className="text-sm font-medium">{property.location}</span>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-gray-100/10 pt-6 mb-8 text-gray-400 font-medium text-[11px] uppercase tracking-tighter">
          <div className="flex items-center gap-1.5">
            <Square size={16} strokeWidth={2.5} className="text-gray-300" />
            <span>{property.area}</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center border-x border-gray-100">
            <Bed size={16} strokeWidth={2.5} className="text-gray-300" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 justify-end">
            <Calendar size={16} strokeWidth={2.5} className="text-gray-300" />
            <span>{property.possession}</span>
          </div>
        </div>

        <button className="mt-auto w-full bg-[#14532d] text-white py-4 rounded-2xl font-medium text-sm hover:bg-[#0f4022] transition-all shadow-lg active:scale-[0.98]">
          Contact Seller
        </button>
      </div>
    </div>
  );
};

const ListingPage = ({ onPropertyClick }) => {
  const [activePropertyType, setActivePropertyType] = useState('Apartment');
  const [activeBHK, setActiveBHK] = useState(2);
  const [isVerifiedOnly, setIsVerifiedOnly] = useState(true);

  const properties = [
    {
      id: 1,
      title: "Godrej Anandam",
      price: "₹ 85.0 Lac",
      location: "Pratap Nagar, Nagpur",
      bhk: "3 BHK",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      isVerified: true,
      tags: ["New Launch"],
      area: "1,450 sq ft",
      beds: 3,
      possession: "Dec 2024"
    },
    {
      id: 2,
      price: "₹ 1.25 Cr",
      location: "Civil Lines, Nagpur",
      bhk: "4 BHK",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
      isVerified: true,
      area: "2,200 sq ft",
      beds: 4,
      possession: "Ready"
    },
    {
      id: 3,
      price: "₹ 62.5 Lac",
      location: "Manish Nagar, Nagpur",
      bhk: "2 BHK",
      image: "https://images.unsplash.com/photo-1544450172-132039958998?auto=format&fit=crop&q=80&w=800",
      isVerified: false,
      tags: ["New Launch"],
      area: "1,100 sq ft",
      beds: 2,
      possession: "June 2025"
    },
    {
      id: 4,
      price: "₹ 45.0 Lac",
      location: "Besa, Nagpur",
      bhk: "2 BHK",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
      isVerified: true,
      area: "950 sq ft",
      beds: 2,
      possession: "Ready"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-8 py-12 flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-80 shrink-0">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-medium text-gray-800">Filters</h2>
            <button className="text-[#14532d] font-medium text-xs hover:underline uppercase tracking-widest">Reset All</button>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wider opacity-60">Property Type</h3>
              <div className="flex flex-wrap gap-2">
                {['Apartment', 'Villa', 'Plot', 'Penthouse'].map(type => (
                  <button 
                    key={type}
                    onClick={() => setActivePropertyType(type)}
                    className={`px-5 py-2.5 rounded-xl font-medium text-xs transition-all border ${
                      activePropertyType === type 
                      ? 'bg-[#dcfce7] text-[#166534] border-[#dcfce7]' 
                      : 'bg-gray-50 text-gray-500 border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wider opacity-60">Price Range (₹)</h3>
              <div className="px-2">
                <input type="range" className="w-full accent-[#14532d] h-2 rounded-lg bg-gray-100" min="0" max="500" />
                <div className="flex justify-between mt-4 text-[11px] font-medium text-gray-400 opacity-60 uppercase tracking-widest">
                  <span>10L</span>
                  <span>5Cr+</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wider opacity-60">BHK Configuration</h3>
              <div className="flex gap-2">
                {[1, 2, 3, '4+'].map(bhk => (
                  <button 
                    key={bhk}
                    onClick={() => setActiveBHK(bhk)}
                    className={`flex-1 py-3 rounded-xl font-medium text-xs transition-all border ${
                      activeBHK === bhk 
                      ? 'bg-[#dcfce7] text-[#166534] border-[#dcfce7]' 
                      : 'bg-gray-50 text-gray-500 border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    {bhk}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wider opacity-60">Possession Status</h3>
              <div className="space-y-4">
                {['Ready to Move', 'Under Construction'].map(status => (
                  <label key={status} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" className="peer appearance-none w-6 h-6 border-2 border-gray-200 rounded-lg checked:bg-[#14532d] checked:border-[#14532d] transition-all" />
                      <Check size={14} className="absolute text-white scale-0 peer-checked:scale-100 transition-transform" strokeWidth={4} />
                    </div>
                    <span className="text-gray-600 font-medium text-sm group-hover:text-gray-900 transition-colors">{status}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-[#14532d] p-1.5 rounded-lg text-white">
                  <Check size={16} strokeWidth={4} />
                </div>
                <span className="text-gray-900 font-medium text-sm">Verified Properties</span>
              </div>
              <button 
                onClick={() => setIsVerifiedOnly(!isVerifiedOnly)}
                className={`w-14 h-8 rounded-full p-1 transition-all flex items-center ${isVerifiedOnly ? 'bg-[#14532d]' : 'bg-gray-200'}`}
              >
                <div className={`bg-white w-6 h-6 rounded-full shadow-md transition-all ${isVerifiedOnly ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>
        </aside>

        {/* Main Grid Content */}
        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} onClick={onPropertyClick} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ListingPage;
