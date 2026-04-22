import React from 'react';
import { 
  TrendingUp, Star, Plane, Train, Map, GraduationCap, 
  Cross, ShoppingBag, Building, Info, ChevronRight,
  Monitor, Layout, Download
} from 'lucide-react';

const ProjectPage = () => {
  const priceData = [
    { year: '2020', price: '₹3,200', height: '40%' },
    { year: '2021', price: '₹3,450', height: '50%' },
    { year: '2022', price: '₹3,700', height: '65%' },
    { year: '2023', price: '₹3,950', height: '80%' },
    { year: '2024', price: '₹4,250', height: '100%', highlight: true },
  ];

  const connectivity = [
    { icon: Plane, name: "Dr. Babasaheb Ambedkar Airport", desc: "5.2 km | 12 mins drive" },
    { icon: Train, name: "Nagpur Metro (Orange Line)", desc: "Khapri Station | 0.8 km" },
    { icon: Map, name: "Outer Ring Road", desc: "Immediate access to NH-44" }
  ];

  const lifeCategories = [
    {
      title: "Education",
      icon: GraduationCap,
      items: [
        { name: "DPS MIHAN", desc: "CBSE | 1.2 km" },
        { name: "AIIMS Nagpur", desc: "Institute of Excellence" }
      ]
    },
    {
      title: "Healthcare",
      icon: Cross,
      items: [
        { name: "IIM Nagpur Health Ctr", desc: "Primary Care | 2 km" },
        { name: "Mure Memorial", desc: "General Hospital | 8 km" }
      ]
    },
    {
      title: "Lifestyle",
      icon: ShoppingBag,
      items: [
        { name: "Empress Mall", desc: "Shopping & Cinema | 12 km" },
        { name: "The MIHAN Club", desc: "Private Leisure | 0.5 km" }
      ]
    },
    {
      title: "Tech Hubs",
      icon: Building,
      items: [
        { name: "Infosys Campus", desc: "IT SEZ Zone" },
        { name: "TCS & HCL Tech", desc: "Major Employment Hub" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafb] font-sans text-gray-900 pb-20">
      <div className="container mx-auto px-8 py-12 max-w-6xl">
        
        {/* Locality Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="flex gap-2 mb-6">
              <span className="bg-[#dcfce7] text-[#166534] text-[10px] font-medium px-3 py-1.5 rounded-full uppercase tracking-widest">Nagpur Hotspot</span>
              <span className="bg-[#021831] text-white text-[10px] font-medium px-3 py-1.5 rounded-full uppercase tracking-widest">Tier 1 Locality</span>
            </div>
            <h1 className="text-5xl font-medium text-gray-900 mb-6 tracking-tight">MIHAN, Nagpur</h1>
            <p className="text-gray-500 font-medium leading-relaxed">
              The Multi-modal International Cargo Hub and Airport at Nagpur is a high-growth SEZ corridor, blending premium residential spaces with India's central logistics powerhouse.
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-baseline gap-2 justify-end mb-2">
              <span className="text-gray-900 text-3xl font-medium tracking-tight">₹4,250</span>
              <span className="text-gray-400 text-xs font-medium uppercase tracking-widest">avg. per sqft</span>
            </div>
            <div className="bg-[#dcfce7] text-[#166534] text-[11px] font-medium px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5">
              <TrendingUp size={14} /> +8.4% YoY
            </div>
          </div>
        </div>

        {/* Hero Visualization */}
        <div className="relative h-[550px] rounded-[48px] overflow-hidden shadow-2xl mb-16 group">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="MIHAN Development"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-12 left-12 flex gap-6">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[32px] min-w-[200px]">
              <span className="text-gray-300 text-[10px] font-medium uppercase tracking-widest block mb-2 opacity-80">Total Area</span>
              <div className="text-white text-3xl font-medium tracking-tight">4,354 Hectares</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[32px] min-w-[200px]">
              <span className="text-gray-300 text-[10px] font-medium uppercase tracking-widest block mb-2 opacity-80">Employment</span>
              <div className="text-white text-3xl font-medium tracking-tight">50,000+ Pros</div>
            </div>
          </div>
        </div>

        {/* Price Trend & Investment Potential */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Price Chart */}
          <div className="md:col-span-8 bg-white rounded-[40px] border border-gray-100 p-10 shadow-sm">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-2">Price Trends</h2>
                <p className="text-gray-400 text-sm font-medium">5-Year Historical Performance</p>
              </div>
              <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
                 <button className="px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-gray-400 hover:text-gray-600 transition-colors">1Y</button>
                 <button className="px-4 py-2 text-[10px] font-medium uppercase tracking-widest bg-[#021831] text-white rounded-lg shadow-sm">5Y</button>
              </div>
            </div>

            <div className="h-64 flex items-end justify-between gap-4 px-4 mb-8">
              {priceData.map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group">
                  <div className="relative w-full h-full flex flex-col justify-end">
                    <div 
                      className={`w-full rounded-t-2xl transition-all duration-700 relative overflow-hidden ${
                        d.highlight ? 'bg-[#dcfce7]' : 'bg-gray-100'
                      }`}
                      style={{ height: d.height }}
                    >
                      <div className={`absolute top-0 left-0 w-full h-1 ${d.highlight ? 'bg-[#166534]' : 'bg-gray-300'}`} />
                    </div>
                    {d.highlight && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#166534] text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg">
                        {d.price}
                      </div>
                    )}
                  </div>
                  <span className="mt-4 text-[11px] font-medium text-gray-400 uppercase tracking-widest">{d.year}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-[24px] border border-gray-100 flex items-center gap-4 group">
              <div className="bg-white p-2.5 rounded-full text-[#166534] shadow-sm group-hover:scale-110 transition-transform">
                <Info size={18} />
              </div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                MIHAN has seen a consistent upward trend since 2021, driven by the expansion of the HCL and Infosys campuses.
              </p>
            </div>
          </div>

          {/* Investment Potential Sidebar */}
          <div className="md:col-span-4 bg-white rounded-[40px] border border-gray-100 p-10 text-gray-900 relative overflow-hidden group flex flex-col shadow-sm">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gray-50 rounded-full -translate-y-24 translate-x-24 blur-3xl group-hover:bg-gray-100 transition-all duration-1000" />
            
            <div className="relative z-10 flex-1">
              <h2 className="text-2xl font-medium mb-2 tracking-tight">Investment Potential</h2>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mb-8 opacity-70">Stability & Growth Rating</p>
              
              <div className="flex items-center gap-4 mb-10">
                <div className="flex gap-1">
                  {[1,2,3,4].map(s => <Star key={s} size={18} className="text-[#166534] fill-current" />)}
                  <Star size={18} className="text-gray-200" />
                </div>
                <span className="text-3xl font-medium tracking-tight">4.2/5</span>
              </div>

              <div className="space-y-8 mb-12">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Rental Yield</span>
                    <span className="text-xs font-medium text-[#166534] uppercase tracking-widest">3.8%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#166534] rounded-full" style={{ width: '65%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Capital Appreciation</span>
                    <span className="text-xs font-medium text-[#166534] uppercase tracking-widest">High</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#166534] rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
              </div>
            </div>

            <button className="relative z-10 w-full bg-[#166534] text-white py-5 rounded-[24px] font-medium text-sm hover:scale-[1.02] shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3">
              Download Full Report
              <Download size={18} />
            </button>
          </div>
        </div>

        {/* Connectivity & Transit */}
        <section className="mb-20">
          <div className="mb-10">
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Connectivity & Transit</h2>
            <p className="text-gray-400 font-medium">Effortless access to the heart of Nagpur</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {connectivity.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-[32px] border border-gray-100 flex items-center gap-6 group hover:shadow-lg transition-all">
                <div className="bg-gray-50 p-4 rounded-2xl text-gray-400 group-hover:text-[#021831] group-hover:bg-[#dcfce7] transition-all">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm mb-1 tracking-tight">{item.name}</h4>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[450px] rounded-[48px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
             <div className="absolute inset-0 bg-black/10 z-10" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-2xl border border-gray-100">
                <div className="w-3 h-3 rounded-full bg-[#021831] animate-ping" />
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#021831]">Central MIHAN Junction</span>
             </div>
             <img 
               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
               className="w-full h-full object-cover scale-110 opacity-60"
               alt="MIHAN Map"
             />
          </div>
        </section>

        {/* Life in MIHAN */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl font-medium text-gray-900 tracking-tight">Life in MIHAN</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {lifeCategories.map((cat, i) => (
              <div key={i} className="bg-white rounded-[32px] border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-gray-300 group-hover:text-[#021831] transition-colors">
                    <cat.icon size={20} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">{cat.title}</h4>
                </div>
                <div className="space-y-8">
                  {cat.items.map((item, j) => (
                    <div key={j} className="relative pl-6 border-l-2 border-gray-50 group-hover/item:border-[#dcfce7] transition-all">
                      <h5 className="font-medium text-gray-900 text-sm mb-1">{item.name}</h5>
                      <span className="text-[10px] text-gray-400 font-medium uppercase tracking-tight">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProjectPage;
