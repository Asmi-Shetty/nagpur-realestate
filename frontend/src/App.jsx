import React, { useState, useEffect } from 'react';
import { Search, MapPin, Home, Briefcase, ShoppingBag, Book, Truck, ArrowRight, ChevronDown } from 'lucide-react';
import ListingPage from './pages/ListingPage';
import DetailPage from './pages/DetailPage';
import SellPage from './pages/SellPage';
import ProjectPage from './pages/ProjectPage';
import RentPage from './pages/RentPage';
import { Bell, User, Heart as HeartIcon } from 'lucide-react';

const Navbar = ({ onNavigate, currentPage }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-50 sticky top-0 z-50">
      <div className="flex items-center gap-12">
        <div 
          className="text-[24px] font-bold text-[#1e3a8a] flex items-center gap-2 cursor-pointer tracking-tight"
          onClick={() => onNavigate('home')}
        >
          <span className="text-[#14532d]">Parth</span><span className="text-[#0f172a]">Developer</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-gray-500 font-medium text-[13px]">
          <button 
            onClick={() => onNavigate('rent')}
            className={`${currentPage === 'rent' ? 'text-[#14532d] border-b-2 border-[#14532d]' : 'hover:text-[#14532d]'} transition-all pb-1 px-1`}
          >
            Rent
          </button>
          <button 
            onClick={() => onNavigate('listing')}
            className={`${currentPage === 'listing' ? 'text-[#14532d] border-b-2 border-[#14532d]' : 'hover:text-[#14532d]'} transition-all pb-1 px-1`}
          >
            Buy
          </button>
          <button 
            onClick={() => onNavigate('sell')}
            className={`${currentPage === 'sell' ? 'text-[#14532d] border-b-2 border-[#14532d]' : 'hover:text-[#14532d]'} transition-all pb-1 px-1`}
          >
            Sell
          </button>
          <button 
            onClick={() => onNavigate('projects')}
            className={`${currentPage === 'projects' ? 'text-[#14532d] border-b-2 border-[#14532d]' : 'hover:text-[#14532d]'} transition-all pb-1 px-1`}
          >
            New Projects
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="bg-[#14532d] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#0f4022] transition-all active:scale-95">
          Post Property
        </button>
        <div className="flex items-center gap-5 text-gray-400">
          <button className="hover:text-[#14532d] transition-colors relative">
            <Bell size={20} />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
          <button className="hover:text-[#14532d] transition-colors">
            <HeartIcon size={20} />
          </button>
          <button className="hover:text-[#14532d] transition-colors bg-gray-100 p-2 rounded-full">
            <User size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Dropdown = ({ label, value, options, isOpen, onToggle, onSelect }) => {
  return (
    <div className="relative flex-1 w-full">
      <div 
        onClick={onToggle}
        className="w-full px-6 py-3 hover:bg-white/50 rounded-2xl transition-all cursor-pointer group h-full flex flex-col justify-center"
      >
        <span className="block text-gray-500 text-[9px] uppercase font-medium mb-1 tracking-[0.2em] opacity-60">{label}</span>
        <div className="flex items-center justify-between">
          <span className="text-gray-900 font-medium text-[15px] whitespace-nowrap overflow-hidden text-ellipsis">{value}</span>
          <ChevronDown size={14} className={`text-gray-400 group-hover:text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
          {options.map(opt => (
            <div 
              key={opt}
              onClick={() => onSelect(opt)}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors ${value === opt ? 'text-[#14532d] font-medium bg-green-50/50' : 'text-gray-700'}`}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Hero = ({ onSearch }) => {
  const [location, setLocation] = useState('Dharampeth');
  const [bhk, setBhk] = useState('2 BHK');
  const [budget, setBudget] = useState('₹40L - ₹60L');
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const locations = ['Any', 'Dharampeth', 'Manish Nagar', 'Civil Lines', 'Wardha Road', 'Ganeshpeth', 'Jamtha', 'Besa', 'Pratap Nagar'];
  const bhks = ['Any', '1 BHK', '2 BHK', '3 BHK', '4+ BHK'];
  const budgets = ['Any', 'Under ₹40L', '₹40L - ₹60L', '₹60L - ₹1Cr', 'Above ₹1Cr'];

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
          
          <div className="search-container bg-[#fefce8]/90 backdrop-blur-md shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] rounded-[32px] p-2 flex flex-col md:flex-row items-stretch gap-1 max-w-2xl border border-white/40">
            <Dropdown 
              label="Location"
              value={location}
              options={locations}
              isOpen={openDropdown === 'location'}
              onToggle={() => setOpenDropdown(openDropdown === 'location' ? null : 'location')}
              onSelect={(val) => { setLocation(val); setOpenDropdown(null); }}
            />
            <div className="w-px bg-gray-200/50 hidden md:block my-2" />
            <Dropdown 
              label="Configuration"
              value={bhk}
              options={bhks}
              isOpen={openDropdown === 'bhk'}
              onToggle={() => setOpenDropdown(openDropdown === 'bhk' ? null : 'bhk')}
              onSelect={(val) => { setBhk(val); setOpenDropdown(null); }}
            />
            <div className="w-px bg-gray-200/50 hidden md:block my-2" />
            <Dropdown 
              label="Budget"
              value={budget}
              options={budgets}
              isOpen={openDropdown === 'budget'}
              onToggle={() => setOpenDropdown(openDropdown === 'budget' ? null : 'budget')}
              onSelect={(val) => { setBudget(val); setOpenDropdown(null); }}
            />
            <button 
              onClick={() => onSearch({ location, bhk, budget })}
              className="bg-[#14532d] text-white p-5 rounded-[24px] hover:bg-[#0f4022] transition-all shadow-xl hover:scale-105 active:scale-95 m-1 z-10 self-center"
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
      case 'rent':
        return <RentPage />;
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
            <span className="font-medium text-gray-800 text-lg">ParthDeveloper</span>
            <p className="mt-2 text-gray-400">© 2024 ParthDeveloper. Stability & Local Reliability in Real Estate.</p>
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
