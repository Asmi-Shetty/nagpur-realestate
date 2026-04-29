import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, Heart, MapPin, Square, Bed, Calendar, Check, Zap, X, User, Phone } from 'lucide-react';

const PropertyCard = ({ property, onClick, onContactClick }) => {
  const [saved, setSaved] = useState(false);

  return (
    <div 
      onClick={() => onClick(property)}
      className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full cursor-pointer ring-1 ring-gray-50 border-t-0"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          {property.isVerified && (
            <span className="bg-[#14532d] text-white text-[8px] font-bold px-2 py-1 rounded flex items-center gap-1 uppercase tracking-widest backdrop-blur-sm bg-opacity-90">
              <Check size={8} strokeWidth={4} /> Verified
            </span>
          )}
          {property.tags?.includes("New Launch") && (
            <span className="bg-[#0f172a] text-white text-[8px] font-bold px-2 py-1 rounded uppercase tracking-widest opacity-90 backdrop-blur-sm">
              New Launch
            </span>
          )}
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
          className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-md p-2 rounded-full text-gray-800 hover:text-red-500 transition-all shadow-lg active:scale-90"
        >
          <Heart size={16} fill={saved ? "#ef4444" : "none"} className={saved ? "text-red-500 stroke-[2px]" : "stroke-[2.5px]"} />
        </button>
        <img 
          src={property.image} 
          alt={property.title || 'Property Image'} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1 bg-[#fffdf9]">
        <div className="flex justify-between items-center mb-3">
          <div className="text-[#14532d] text-xl font-bold">{property.price}</div>
          <div className="bg-[#dcfce7] text-[#166534] text-[9px] font-bold px-2 py-1 rounded uppercase tracking-widest">
            {property.bhk}
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-gray-500 mb-5 group-hover:text-gray-900 transition-colors">
          <MapPin size={14} className="text-gray-300 shrink-0" />
          <span className="text-xs font-medium truncate">{property.location}</span>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-gray-100/50 pt-4 mb-5 text-gray-400 font-bold text-[9px] uppercase tracking-tight">
          <div className="flex items-center gap-1.5">
            <Square size={14} strokeWidth={2.5} className="text-gray-300" />
            <span>{property.area}</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center border-x border-gray-100/50">
            <Bed size={14} strokeWidth={2.5} className="text-gray-300" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 justify-end">
            <Calendar size={14} strokeWidth={2.5} className="text-gray-300" />
            <span className="truncate">{property.possession}</span>
          </div>
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); onContactClick(property); }}
          className="mt-auto w-full bg-[#14532d] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#0f4022] transition-all shadow-lg shadow-green-900/10 active:scale-[0.98]"
        >
          {property.contactType || 'Contact Seller'}
        </button>
      </div>
    </div>
  );
};

const ListingPage = ({ onPropertyClick }) => {
  const [activePropertyType, setActivePropertyType] = useState('');
  const [activeBHK, setActiveBHK] = useState(null);
  const [priceRange, setPriceRange] = useState(50000000); // 5 Cr initially
  const [possessionStatus, setPossessionStatus] = useState([]);
  const [isVerifiedOnly, setIsVerifiedOnly] = useState(false);
  const [contactModal, setContactModal] = useState({ isOpen: false, property: null });

  const allProperties = [
    {
      id: 1,
      title: "Godrej Anandam",
      price: "₹ 85.0 Lac",
      priceValue: 8500000,
      location: "Pratap Nagar, Nagpur",
      bhk: "3 BHK",
      bhkValue: 3,
      type: "Apartment",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      isVerified: true,
      tags: ["New Launch"],
      area: "1,450 sq ft",
      beds: 3,
      possessionStatus: "Under Construction",
      possession: "Dec 2024",
      contactType: "Contact Seller"
    },
    {
      id: 2,
      title: "Bloomfield Villas",
      price: "₹ 1.25 Cr",
      priceValue: 12500000,
      location: "Civil Lines, Nagpur",
      bhk: "4 BHK",
      bhkValue: 4,
      type: "Villa",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
      isVerified: true,
      area: "2,200 sq ft",
      beds: 4,
      possessionStatus: "Ready to Move",
      possession: "Ready",
      contactType: "Contact Agent"
    },
    {
      id: 3,
      title: "Vrindavan Heights",
      price: "₹ 62.5 Lac",
      priceValue: 6250000,
      location: "Manish Nagar, Nagpur",
      bhk: "2 BHK",
      bhkValue: 2,
      type: "Apartment",
      image: "https://images.unsplash.com/photo-1544450172-132039958998?auto=format&fit=crop&q=80&w=800",
      isVerified: false,
      tags: ["New Launch"],
      area: "1,100 sq ft",
      beds: 2,
      possessionStatus: "Under Construction",
      possession: "June 2025",
      contactType: "Contact Seller"
    },
    {
      id: 4,
      title: "Shivraj Homes",
      price: "₹ 45.0 Lac",
      priceValue: 4500000,
      location: "Besa, Nagpur",
      bhk: "2 BHK",
      bhkValue: 2,
      type: "Apartment",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
      isVerified: true,
      area: "950 sq ft",
      beds: 2,
      possessionStatus: "Ready to Move",
      possession: "Ready",
      contactType: "Contact Builder"
    }
  ];

  const filteredProperties = useMemo(() => {
    return allProperties.filter(p => {
      if (activePropertyType && p.type !== activePropertyType) return false;
      if (activeBHK) {
         if (activeBHK === '4+') {
            if (p.bhkValue < 4) return false;
         } else {
            if (p.bhkValue !== activeBHK) return false;
         }
      }
      if (p.priceValue > priceRange) return false;
      if (possessionStatus.length > 0 && !possessionStatus.includes(p.possessionStatus)) return false;
      if (isVerifiedOnly && !p.isVerified) return false;
      return true;
    });
  }, [activePropertyType, activeBHK, priceRange, possessionStatus, isVerifiedOnly]);

  const toggleArrayItem = (setState, item) => {
    setState(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const handleReset = () => {
    setActivePropertyType('');
    setActiveBHK(null);
    setPriceRange(50000000);
    setPossessionStatus([]);
    setIsVerifiedOnly(false);
  };

  const formatPriceRange = (val) => {
    if (val < 10000000) {
      return (val / 100000).toFixed(1) + 'L';
    } else {
      return (val / 10000000).toFixed(2) + 'Cr';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-8 py-12 flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-80 shrink-0">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-medium text-gray-800">Filters</h2>
            <button onClick={handleReset} className="text-[#14532d] font-bold text-[10px] hover:underline uppercase tracking-widest">Reset All</button>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wider opacity-60">Property Type</h3>
              <div className="flex flex-wrap gap-2">
                {['Apartment', 'Villa', 'Plot', 'Penthouse'].map(type => (
                  <button 
                    key={type}
                    onClick={() => setActivePropertyType(activePropertyType === type ? '' : type)}
                    className={`px-5 py-2.5 rounded-xl font-bold text-[11px] transition-all border ${
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
                <input 
                  type="range" 
                  className="w-full accent-[#14532d] h-1.5 rounded-lg bg-gray-100 cursor-pointer appearance-none" 
                  min="1000000" 
                  max="50000000" 
                  step="500000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                />
                <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>10L</span>
                  <span className="text-[#14532d]">Up to {formatPriceRange(priceRange)}</span>
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
                    onClick={() => setActiveBHK(activeBHK === bhk ? null : bhk)}
                    className={`flex-1 py-3 rounded-xl font-bold text-xs transition-all border ${
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
                      <input 
                        type="checkbox" 
                        checked={possessionStatus.includes(status)}
                        onChange={() => toggleArrayItem(setPossessionStatus, status)}
                        className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-md checked:bg-[#14532d] checked:border-[#14532d] transition-all" 
                      />
                      <Check size={12} className="absolute text-white scale-0 peer-checked:scale-100 transition-transform" strokeWidth={4} />
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
          {filteredProperties.length === 0 ? (
             <div className="text-center py-20 bg-gray-50 rounded-[2rem] border border-gray-100 h-full flex flex-col justify-center items-center">
               <div className="text-gray-400 mb-4"><Search size={48} className="mx-auto" /></div>
               <h3 className="text-xl font-bold text-gray-800 mb-2">No properties found</h3>
               <p className="text-gray-500 font-medium">Try adjusting your filters to find more results.</p>
               <button onClick={handleReset} className="mt-6 bg-[#14532d] text-white px-6 py-3 rounded-xl font-bold text-sm">Clear Filters</button>
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map(property => (
                <PropertyCard 
                  key={property.id} 
                  property={property} 
                  onClick={onPropertyClick} 
                  onContactClick={(prop) => setContactModal({ isOpen: true, property: prop })}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Contact Seller Modal */}
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
              <h3 className="text-2xl font-bold text-[#0f172a] mb-2">{contactModal.property.contactType || 'Contact Seller'}</h3>
              <p className="text-gray-500 text-sm font-medium">Get in touch for {contactModal.property.title || 'this property'}</p>
            </div>

            <div className="space-y-5 bg-gray-50 rounded-2xl p-5 mb-6">
              <div className="flex items-center gap-4">
                 <div className="bg-[#14532d]/10 p-3 rounded-xl text-[#14532d]">
                    <User size={20} />
                 </div>
                 <div>
                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Name</div>
                   <div className="font-bold text-[#0f172a]">
                     {contactModal.property.contactType === 'Contact Agent' ? 'Rajesh Estate Agents' : 
                      contactModal.property.contactType === 'Contact Builder' ? 'Shivraj Developers' : 'Parth Sharma'}
                   </div>
                 </div>
              </div>
              
              <div className="h-px bg-gray-200 w-full" />
              
              <div className="flex items-center gap-4">
                 <div className="bg-[#14532d]/10 p-3 rounded-xl text-[#14532d]">
                    <Phone size={20} />
                 </div>
                 <div>
                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Phone</div>
                   <div className="font-bold text-[#0f172a] tracking-wide">+91 98765 43210</div>
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

export default ListingPage;
