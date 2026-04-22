import React, { useState } from 'react';
import { MapPin, ShieldCheck, Square, Bed, ArrowLeft, Ruler, Wind, Compass, Infinity, Dumbbell, Shield, Coffee, TreePine, Layout, ChevronRight, TrendingUp } from 'lucide-react';

const DetailPage = ({ property, onBack }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  // Fallback data
  const fallback = {
    id: 1,
    title: "Skyline Serenity - Luxury 3 BHK",
    price: "₹2.45 Cr",
    pricePerSqFt: "₹14,200 per sq.ft",
    location: "Dharampeth, Nagpur",
    bhk: "3 BHK",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6199fbfd0b?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    ],
    tags: ["Ready to Move", "Verified"],
    area: "1,725 sq.ft",
    floor: "8th of 12",
    facing: "East",
    description: "Experience the pinnacle of urban living at Skyline Serenity, strategically located in the heart of Dharampeth. This meticulously designed 3 BHK apartment offers a perfect blend of modern aesthetics and functional design."
  };

  // Merge property data with fallback, ensuring images is always an array
  const p = {
    ...fallback,
    ...property,
    images: property?.images || (property?.image ? [property.image, ...fallback.images.slice(1)] : fallback.images)
  };

  const amenities = [
    { name: "Infinity Pool", icon: Infinity },
    { name: "Premium Gym", icon: Dumbbell },
    { name: "Reserved Parking", icon: Layout },
    { name: "3-Tier Security", icon: Shield },
    { name: "Club House", icon: Coffee },
    { name: "Landscape Garden", icon: TreePine }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <div className="container mx-auto px-8 py-8">
        {/* Navigation Breadcrumb */}
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-[#14532d] transition-colors mb-8 font-medium text-xs uppercase tracking-widest">
          <ArrowLeft size={16} />
          Back to Listings
        </button>

        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#dcfce7] text-[#166534] text-[10px] font-medium px-3 py-1.5 rounded-lg uppercase tracking-widest">
                Ready to Move
              </span>
              <span className="bg-[#e0f2fe] text-[#0369a1] text-[10px] font-medium px-3 py-1.5 rounded-lg uppercase tracking-widest flex items-center gap-1.5">
                <ShieldCheck size={14} strokeWidth={2.5} /> Verified
              </span>
            </div>
            <h1 className="text-4xl font-medium text-gray-900 mb-3 tracking-tight">{p.title}</h1>
            <div className="flex items-center gap-1.5 text-gray-500 font-medium">
              <MapPin size={18} className="text-gray-300" />
              <span>{p.location}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[#14532d] text-4xl font-medium mb-1 tracking-tight">{p.price}</div>
            <div className="text-gray-400 text-sm font-medium uppercase tracking-widest">{p.pricePerSqFt}</div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[600px] mb-12">
          <div className="col-span-2 row-span-2 rounded-[40px] overflow-hidden shadow-sm relative group">
            <img src={p.images[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Main" />
          </div>
          <div className="rounded-[32px] overflow-hidden shadow-sm relative group">
            <img src={p.images[1]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="BR" />
          </div>
          <div className="rounded-[32px] overflow-hidden shadow-sm relative group">
            <img src={p.images[2]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Kitchen" />
          </div>
          <div className="rounded-[32px] overflow-hidden shadow-sm relative group">
            <img src={p.images[3]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Balcony" />
          </div>
          <div className="rounded-[32px] overflow-hidden shadow-sm relative group">
            <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center pointer-events-none">
              <span className="text-white font-medium text-lg">+12 Photos</span>
            </div>
            <img src={p.images[4]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Bath" />
          </div>
        </div>

        {/* Feature Pills Section */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          {[
            { icon: Bed, label: "Configuration", val: p.bhk },
            { icon: Ruler, label: "Super Area", val: p.area },
            { icon: Layout, label: "Floor", val: p.floor },
            { icon: Compass, label: "Facing", val: p.facing }
          ].map((item, i) => (
            <div key={i} className="bg-gray-50/50 p-8 rounded-[32px] border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="bg-white p-4 rounded-2xl mb-4 text-[#14532d] shadow-sm group-hover:scale-110 transition-transform">
                <item.icon size={24} strokeWidth={2} />
              </div>
              <span className="block text-[11px] text-gray-400 uppercase font-medium tracking-[0.2em] mb-2">{item.label}</span>
              <span className="font-medium text-gray-800 tracking-tight">{item.val}</span>
            </div>
          ))}
        </div>

        {/* Tab System & Sidebar Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="col-span-8">
            <div className="border-b border-gray-100 mb-12">
              <div className="flex gap-8">
                {['Overview', 'Amenities', 'Floor Plans', 'Locality'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-6 text-sm font-medium uppercase tracking-widest transition-all relative ${
                      activeTab === tab ? 'text-[#14532d]' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#14532d] rounded-full" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-16">
              {/* About Section */}
              <section>
                <h2 className="text-2xl font-medium text-gray-900 mb-6 tracking-tight">About this Property</h2>
                <p className="text-gray-500 leading-[1.8] text-[15px] font-medium max-w-3xl">
                  {p.description}
                </p>
              </section>

              {/* Amenities Grid */}
              <section>
                <h2 className="text-2xl font-medium text-gray-900 mb-8 tracking-tight">Lifestyle Amenities</h2>
                <div className="grid grid-cols-3 gap-6">
                  {amenities.map(a => (
                    <div key={a.name} className="flex items-center gap-4 bg-gray-50/50 p-5 rounded-2xl border border-gray-100 group hover:bg-white hover:shadow-md transition-all">
                      <div className="bg-[#dcfce7] p-3 rounded-xl text-[#166534] group-hover:scale-110 transition-transform">
                        <a.icon size={20} strokeWidth={2.5} />
                      </div>
                      <span className="font-medium text-gray-700 text-sm">{a.name}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Location Advantage */}
              <section>
                <h2 className="text-2xl font-medium text-gray-900 mb-8 tracking-tight">Location Advantage</h2>
                <p className="text-gray-500 font-medium mb-8 max-w-2xl leading-relaxed">
                  Located in Dharampeth, the most sought-after residential hub in Nagpur with excellent connectivity to Metro and IT parks.
                </p>
                <div className="h-[400px] bg-gray-100 rounded-[40px] overflow-hidden relative shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale scale-110"
                    alt="map placeholder"
                  />
                  {/* Map Pin Overlays (Visual elements to simulate dynamic map) */}
                  <div className="absolute top-1/4 left-1/3 bg-white p-2 rounded-full shadow-2xl border-2 border-[#14532d] animate-bounce">
                    <MapPin size={24} className="text-[#14532d]" fill="currentColor" fillOpacity={0.2} />
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="col-span-4">
            <div className="sticky top-32 space-y-8">
              {/* Contact Card */}
              <div className="bg-white border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[40px] p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-8 tracking-tight">Contact Builder</h3>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Agent" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Rajesh Deshmukh</div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">Nagpur Realty Estates</div>
                  </div>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-[10px] text-gray-400 uppercase font-normal tracking-widest mb-2 opacity-60">Full Name</label>
                    <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-[#14532d]/5 outline-none transition-all font-medium" />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-400 uppercase font-normal tracking-widest mb-2 opacity-60">Phone Number</label>
                    <input type="text" placeholder="+91 00000 00000" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-[#14532d]/5 outline-none transition-all font-medium" />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-400 uppercase font-normal tracking-widest mb-2 opacity-60">Email</label>
                    <input type="email" placeholder="example@email.com" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-[#14532d]/5 outline-none transition-all font-medium" />
                  </div>
                  <button className="w-full bg-[#14532d] text-white py-5 rounded-[24px] font-medium text-sm hover:bg-[#0f4022] transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]">
                    Send Inquiry
                  </button>
                  <p className="text-[10px] text-gray-400 text-center font-medium leading-relaxed">
                    By clicking you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
                  </p>
                </form>
              </div>

              {/* Market Trend Card */}
              <div className="bg-[#0f172a] text-white rounded-[40px] p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 blur-2xl group-hover:bg-white/10 transition-all duration-700" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/10 p-3 rounded-2xl transition-transform group-hover:scale-110">
                    <TrendingUp size={24} className="text-white" />
                  </div>
                  <h4 className="font-medium tracking-tight">Market Trend</h4>
                </div>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">
                  Property prices in Dharampeth have increased by <span className="text-white font-medium tracking-widest">12%</span> in the last 12 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
