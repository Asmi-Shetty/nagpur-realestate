import React, { useState, useEffect } from 'react';
import { Search, MapPin, Home, Briefcase, ShoppingBag, Book, Truck, ArrowRight, ChevronDown } from 'lucide-react';
import ListingPage from './pages/ListingPage';
import DetailPage from './pages/DetailPage';
import SellPage from './pages/SellPage';
import ProjectPage from './pages/ProjectPage';

const Navbar = ({ onNavigate, currentPage }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div 
        className="text-[28px] font-medium text-[#14532d] flex items-center gap-2 cursor-pointer tracking-tighter"
        onClick={() => onNavigate('home')}
      >
        <span>NagpurHomes</span>
      </div>
      <div className="hidden md:flex items-center gap-10 text-gray-400 font-medium text-xs uppercase tracking-widest pl-24">
        <button 
          onClick={() => onNavigate('listing')}
          className={`${currentPage === 'listing' ? 'text-[#14532d] relative' : 'hover:text-[#14532d]'} transition-all pb-1`}
        >
          Buy
          {currentPage === 'listing' && <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#14532d] rounded-full" />}
        </button>
        <button className="hover:text-[#14532d] transition-colors pb-1">Rent</button>
        <button 
          onClick={() => onNavigate('sell')}
          className={`${currentPage === 'sell' ? 'text-[#14532d] relative' : 'hover:text-[#14532d]'} transition-all pb-1`}
        >
          Sell
          {currentPage === 'sell' && <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#14532d] rounded-full" />}
        </button>
        <button 
          onClick={() => onNavigate('projects')}
          className={`${currentPage === 'projects' ? 'text-[#14532d] relative' : 'hover:text-[#14532d]'} transition-all pb-1`}
        >
          Projects
          {currentPage === 'projects' && <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#14532d] rounded-full" />}
        </button>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-gray-400 hover:text-[#14532d] transition-colors p-2">
          <Search size={22} strokeWidth={2.5} />
        </button>
        <button className="bg-[#0f172a] text-white px-8 py-3 rounded-xl font-medium text-sm hover:bg-black transition-all shadow-lg active:scale-95">
          Login
        </button>
      </div>
    </nav>
  );
};

const Hero = ({ onSearch }) => {
  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-[#faf7f2]">
      {/* Background Monument Image */}
      <div className="absolute inset-x-0 top-0 h-[600px] overflow-hidden">
        {/* Warm Sunset Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#f97316]/50 via-[#fbbf24]/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/10 z-0" />
        <img 
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2000" 
          alt="Nagpur Cityscape" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 container mx-auto px-8 h-full flex items-center gap-12 pl-24">
        <div className="flex-1 pt-20">
          <span className="bg-[#dcfce7] text-[#166534] text-[11px] font-medium px-3 py-1.5 rounded-full w-fit mb-8 inline-block uppercase tracking-wider">
            Verified Properties Only
          </span>
          <h1 className="text-5xl font-medium text-white mb-6 max-w-lg leading-[1.1] tracking-tight">
            Find Your Perfect Home in Nagpur
          </h1>
          <p className="text-white/80 text-lg mb-12 max-w-md font-medium leading-relaxed">
            Explore premium residential projects and verified local listings across the Orange City's most sought-after neighborhoods.
          </p>
          
          <div className="bg-[#fefce8]/90 backdrop-blur-md shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] rounded-[32px] p-2 flex flex-col md:flex-row items-center gap-1 max-w-2xl border border-white/40">
            <div className="flex-1 w-full px-6 py-3 hover:bg-white/50 rounded-2xl transition-all cursor-pointer group">
              <span className="block text-gray-500 text-[9px] uppercase font-medium mb-1 tracking-[0.2em] opacity-60">Location</span>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium text-[15px]">Dharampeth</span>
                <ChevronDown size={14} className="text-gray-400 group-hover:text-primary" />
              </div>
            </div>
            <div className="w-px h-10 bg-gray-200/50 hidden md:block" />
            <div className="flex-1 w-full px-6 py-3 hover:bg-white/50 rounded-2xl transition-all cursor-pointer group">
              <span className="block text-gray-500 text-[9px] uppercase font-medium mb-1 tracking-[0.2em] opacity-60">Configuration</span>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium text-[15px]">2 BHK</span>
                <ChevronDown size={14} className="text-gray-400 group-hover:text-primary" />
              </div>
            </div>
            <div className="w-px h-10 bg-gray-200/50 hidden md:block" />
            <div className="flex-1 w-full px-6 py-3 hover:bg-white/50 rounded-2xl transition-all cursor-pointer group">
              <span className="block text-gray-500 text-[9px] uppercase font-medium mb-1 tracking-[0.2em] opacity-60">Budget</span>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium text-[15px]">₹40L - ₹60L</span>
                <ChevronDown size={14} className="text-gray-400 group-hover:text-primary" />
              </div>
            </div>
            <button 
              onClick={onSearch}
              className="bg-[#14532d] text-white p-5 rounded-[24px] hover:bg-[#0f4022] transition-all shadow-xl hover:scale-105 active:scale-95 m-1"
            >
              <Search size={22} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Floating Room Image */}
        <div className="hidden lg:block w-[450px] aspect-[4/5] relative pt-5 -translate-x-10">
           <div className="absolute inset-x-0 h-full bg-[#14532d]/5 rounded-[32px] translate-x-4 translate-y-4" />
           <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
            className="w-full h-full object-cover rounded-[32px] shadow-2xl relative z-10 border-4 border-white"
            alt="Interior"
           />
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, price, location, bhk, tags, image }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
    <div className="relative h-60 overflow-hidden">
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <span className="bg-[#14532d] text-white text-[9px] font-medium px-2 py-1 rounded uppercase tracking-tighter">
          {tags[0]}
        </span>
      </div>
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
    </div>
    <div className="p-6 bg-[#fffdf9]">
      <h3 className="text-lg font-medium text-gray-900 mb-1 leading-tight">{title}</h3>
      <div className="flex items-center gap-1 text-gray-400 text-[11px] mb-6 font-semibold">
        <MapPin size={12} className="text-gray-300" />
        {location}
      </div>
      <div className="flex justify-between items-center border-t border-gray-100 pt-4">
        <div className="text-[#14532d] text-lg font-medium">{price}</div>
        <div className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{bhk}</div>
      </div>
    </div>
  </div>
);

const LocalityCard = ({ name, tagline, icon: IconComponent }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-50 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
    <div className="bg-[#f0fdf4] p-4 rounded-2xl mb-4 text-[#14532d] group-hover:scale-110 transition-transform">
      <IconComponent size={24} />
    </div>
    <h4 className="font-medium text-gray-800 text-sm mb-1">{name}</h4>
    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tight">{tagline}</p>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'listing', 'detail'
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [localities, setLocalities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/properties')
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.log('Backend not ready'));
    
    fetch('http://localhost:8000/api/localities')
      .then(res => res.json())
      .then(data => setLocalities(data))
      .catch(err => console.log('Backend not ready'));
  }, []);

  const staticProperties = [
    {
      id: 1,
      title: "Godrej Anandam",
      price: "₹75 L - 2.5 Cr",
      location: "Ganeshpeth, Nagpur",
      bhk: "2, 3, 4 BHK",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      tags: ["New Launch"],
      rating: 4.8,
      area: "1250 - 3200 sq.ft",
      description: "Godrej Anandam is a premium residential project in the heart of Nagpur. It offers a blend of luxury and comfort with state-of-the-art amenities."
    },
    {
      id: 2,
      title: "Bloomfield Villas",
      price: "₹1.2 Cr - 3.8 Cr",
      location: "Wardha Road, Nagpur",
      bhk: "4 BHK Row Houses",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
      tags: ["Ready to Move"],
      rating: 4.5,
      area: "2400 - 4500 sq.ft"
    },
    {
      id: 3,
      title: "Vrindavan Township",
      price: "₹45 L - 1.1 Cr",
      location: "Jamtha, Nagpur",
      bhk: "1, 2, 3 BHK",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
      tags: ["Eco-Friendly"],
      rating: 4.2,
      area: "850 - 1800 sq.ft"
    }
  ];

  const staticLocalities = [
    { name: "Dharampeth", tagline: "Premium Residential", icon: Home },
    { name: "Wardha Road", tagline: "Connectivity Hub", icon: Truck },
    { name: "MIHAN", tagline: "IT & Aerospace", icon: Briefcase },
    { name: "Manish Nagar", tagline: "Lifestyle & Retail", icon: ShoppingBag },
    { name: "Hingna", tagline: "Industrial & Education", icon: Book }
  ];

  const displayProperties = properties.length > 0 ? properties : staticProperties;
  const displayLocalities = localities.length > 0 ? localities : staticLocalities;

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
    setCurrentPage('detail');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'listing':
        return <ListingPage onPropertyClick={handlePropertyClick} />;
      case 'detail':
        return <DetailPage property={selectedProperty} onBack={() => setCurrentPage('listing')} />;
      case 'sell':
        return <SellPage onBack={() => setCurrentPage('home')} />;
      case 'projects':
        return <ProjectPage />;
      default:
        return (
          <>
            <Hero onSearch={() => setCurrentPage('listing')} />
            
            <section className="container mx-auto px-8 py-16">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h2 className="text-3xl font-medium text-gray-800 mb-2">Top Projects in Nagpur</h2>
                  <p className="text-gray-500">Handpicked luxury townships and premium residences</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 border rounded-full hover:bg-gray-50"><ArrowRight className="rotate-180" size={20} /></button>
                  <button 
                    onClick={() => setCurrentPage('listing')}
                    className="p-2 border rounded-full hover:bg-gray-50"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayProperties.map(prop => (
                  <div key={prop.id} onClick={() => handlePropertyClick(prop)} className="cursor-pointer">
                    <ProjectCard {...prop} />
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-[#fff9f0]/30 py-20">
              <div className="container mx-auto px-8 text-center">
                <h2 className="text-3xl font-medium text-gray-800 mb-2">Popular Nagpur Localities</h2>
                <p className="text-gray-500 mb-12">Invest where it matters the most</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {displayLocalities.map(loc => (
                    <LocalityCard key={loc.name} {...loc} />
                  ))}
                </div>
              </div>
            </section>

            <section className="container mx-auto px-8 py-20">
              <div className="bg-[#4a5568] rounded-[40px] p-12 text-white flex flex-col md:flex-row gap-12 overflow-hidden relative shadow-2xl">
                <div className="flex-1 z-10">
                  <h2 className="text-4xl font-medium mb-6 leading-tight">Nagpur Real Estate Insights</h2>
                  <p className="text-gray-300 mb-8 max-w-lg text-sm font-medium leading-relaxed">Stay ahead with the latest market trends, upcoming infrastructure projects like Metro expansion, and property price forecasts for 2024.</p>
                  <ul className="space-y-4 mb-10 text-sm font-medium">
                    <li className="flex items-center gap-4">
                      <div className="bg-green-500/20 p-2 rounded-lg"><span className="text-xs">📈</span></div> 
                      Wardha Road property values up by 12% YoY
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="bg-yellow-500/20 p-2 rounded-lg"><span className="text-xs">🛠️</span></div> 
                      Metro Phase 2 to impact Hingna & Kanhan connectivity
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="bg-blue-500/20 p-2 rounded-lg"><span className="text-xs">ℹ️</span></div> 
                      New IT parks in MIHAN attracting tier-1 investors
                    </li>
                  </ul>
                  <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-normal text-sm hover:bg-gray-100 transition-all shadow-lg active:scale-95">
                    Download Market Report
                  </button>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-6 z-10">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-[32px] text-center border border-white/5">
                    <span className="text-gray-300 text-[10px] block mb-3 uppercase tracking-[0.2em] font-normal">Avg Price/sq ft</span>
                    <div className="text-4xl font-normal italic">₹5.2K</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-[32px] text-center border border-white/5">
                    <span className="text-gray-300 text-[10px] block mb-3 uppercase tracking-[0.2em] font-normal">Rental Yield</span>
                    <div className="text-4xl font-normal italic">15%</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[32px] text-center border border-white/5">
                     <span className="text-gray-300 text-[10px] block mb-3 uppercase tracking-[0.2em] font-normal">Verified listings</span>
                     <div className="text-4xl font-normal italic">450+</div>
                  </div>
                  <div className="bg-[#14532d]/40 backdrop-blur-md p-8 rounded-[32px] text-center border border-white/10">
                    <span className="text-gray-200 text-[10px] block mb-3 uppercase tracking-[0.2em] font-normal">Growth Hub</span>
                    <div className="text-4xl font-normal italic uppercase text-green-400">Top 5</div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
      <footer className="border-t py-12">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs gap-8">
          <div>
            <span className="font-medium text-gray-800 text-lg">NagpurHomes</span>
            <p className="mt-2 text-gray-400">© 2024 NagpurHomes. Stability & Local Reliability in Real Estate.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">About Nagpur</a>
            <a href="#" className="hover:text-primary">Contact Us</a>
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="text-primary font-medium">Verified Properties.</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
