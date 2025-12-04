import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle,
  Globe,
  Phone,
  Mail,
  MessageCircle,
  Play,
  ArrowRight
} from 'lucide-react';

// Digi Mabble Logo Component
const DigiMabbleLogo = ({ className = "h-10 w-auto" }) => (
  <img 
    src="https://firebasestorage.googleapis.com/v0/b/sharptronics-6cvn2d.firebasestorage.app/o/digimabble%20logo.png?alt=media&token=fe898add-12ad-4852-a93f-21ae50a5cb80" 
    alt="Digi Mabble" 
    className={className}
  />
);

/**
 * DIGIMABBLE PRODUCT DATA
 * -----------------------
 */
const PRODUCTS_DATA = [
  {
    id: 1,
    title: "Restaurant Reservation WhatsApp Bot",
    category: "AI Automation",
    shortDescription: "A fully automated booking assistant that lives in WhatsApp. Handle reservations 24/7 without human intervention.",
    features: [
      "Seamless integration with existing reservation systems (POS/CRM).",
      "Real-time dynamic pricing and table availability checks.",
      "Full user control: Book new reservations, cancel existing ones, or modify details.",
      "Completely automated booking flow."
    ],
    benefits: [
      "Eliminates missed calls and lost booking opportunities.",
      "Reduces front-desk staff workload significantly.",
      "Provides instant confirmation to customers."
    ],
    stepsToUse: [
      "Start conversation by sending the pre-filled 'hello' message.",
      "Select your need: New Reservation, Cancel, or Modify.",
      "Enter contact details when prompted.",
      "System automatically checks real-time table availability.",
      "Complete checkout process.",
      "Receive instant booking confirmation."
    ],
    demoLink: "https://wa.me/15556394197?text=hello",
    // Using the logo as the main icon
    icon: <DigiMabbleLogo className="h-8 w-8" />
  },
  {
    id: 2,
    title: "Smart Clinic Appointment Assistant",
    category: "Healthcare Automation",
    shortDescription: "Transform patient access with an intelligent booking agent. Patients can triage needs and secure appointments instantly on WhatsApp.",
    features: [
      "Specialty-based booking flow (Select Medical Need).",
      "Real-time doctor availability and slot management.",
      "Automated appointment reminders to reduce no-shows.",
      "Secure patient data handling and seamless EMR integration."
    ],
    benefits: [
      "24/7 Patient access to scheduling without phone wait times.",
      "Drastically reduces front-desk administrative load.",
      "Minimizes scheduling errors and double-bookings."
    ],
    stepsToUse: [
      "Initiate chat to access the Virtual Receptionist.",
      "Select 'New Appointment' from the menu.",
      "Choose your specific Medical Need (e.g., General, Dental).",
      "System instantly checks and displays available slots.",
      "Confirm details to receive your digital appointment pass."
    ],
    demoLink: "https://wa.me/15556394197?text=hello",
    icon: <DigiMabbleLogo className="h-8 w-8" />
  }
];

// --- COMPONENTS ---

const TopBar = () => {
  return (
    <div className="bg-[#1b2955] text-white py-2 px-6 text-sm hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex gap-6">
           <span className="font-bold text-white">Product Demo Portal</span>
        </div>
        <div className="flex gap-6">
           <span className="flex items-center gap-2">
             <span className="text-gray-400">Client Support:</span>
             <span className="font-bold hover:text-[#faa31a] cursor-pointer transition-colors">+32 467 85 99 60</span>
           </span>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <DigiMabbleLogo className="h-12 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[#1b2955] font-bold text-sm uppercase tracking-wide">
          <a href="#" className="text-[#1b2955] hover:text-[#faa31a] transition-colors">Product Showcase</a>
          {/* Button changed to Blue #1b2955 */}
          <button className="bg-[#1b2955] hover:bg-[#2a3b75] text-white font-bold px-6 py-3 rounded-full transition-all shadow-md text-xs">
            Contact Sales
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#1b2955]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 p-6 flex flex-col gap-4 shadow-xl z-50">
          <a href="#" className="text-[#1b2955] py-2 font-bold uppercase">Product Showcase</a>
          {/* Button changed to Blue #1b2955 */}
          <button className="bg-[#1b2955] text-white font-bold py-3 rounded-md w-full uppercase text-sm">
            Contact Sales
          </button>
        </div>
      )}
    </nav>
  );
};

const ProductDetail = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Column: Product Info */}
        <div className="lg:col-span-7 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
          
          {/* Header */}
          <div className="mb-6">
            <div>
              <span className="text-[#faa31a] font-bold text-xs uppercase tracking-wider mb-1 block">
                {product.category}
              </span>
              <h2 className="text-3xl font-extrabold text-[#1b2955] mb-2">
                {product.title}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {product.shortDescription}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Features List */}
            <div>
              <h3 className="text-[#1b2955] font-bold text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                <CheckCircle size={18} className="text-[#faa31a]" /> Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle size={16} className="text-[#faa31a] mt-0.5 shrink-0" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits List */}
            <div>
              <h3 className="text-[#1b2955] font-bold text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                <CheckCircle size={18} className="text-[#faa31a]" /> Benefits
              </h3>
              <ul className="space-y-3">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 bg-[#faa31a] rounded-full mt-2 shrink-0" />
                    <span className="leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive / Demo Area */}
        <div className="lg:col-span-5 bg-gray-50 p-8 lg:p-12 flex flex-col justify-center">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
            <h3 className="text-[#1b2955] font-bold mb-4 flex items-center gap-2">
              <Play size={18} className="text-[#faa31a]" /> Steps to Experience
            </h3>
            <ol className="space-y-4">
              {product.stepsToUse.map((step, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-slate-600">
                  <span className="font-bold text-[#faa31a] bg-[#faa31a]/10 w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Primary Action Button changed to Blue #1b2955 */}
          <a 
            href={product.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-[#1b2955] hover:bg-[#2a3b75] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 text-lg group"
          >
            <MessageCircle size={24} className="fill-white" />
            Experience Bot on WhatsApp
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#1b2955] mb-4">Our Innovation Portfolio</h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Explore our latest AI-driven solutions designed to transform retail and service experiences.
          </p>
        </div>
        
        <div className="space-y-8">
          {PRODUCTS_DATA.map(product => (
            <ProductDetail key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1b2955] text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="mb-6">
            <DigiMabbleLogo className="h-10 w-auto brightness-0 invert" />
          </div>
          <p className="leading-relaxed mb-4 text-gray-300">
            Empowering businesses with intelligent, scalable automation.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact</h4>
          <ul className="space-y-2">
            <li className="flex gap-2 items-center text-gray-300">
              <Phone size={14} className="text-[#faa31a]" />
              +32 467 85 99 60
            </li>
            <li className="flex gap-2 items-center text-gray-300">
              <Mail size={14} className="text-[#faa31a]" />
              info@digimabble.com
            </li>
            <li className="flex gap-2 items-start text-gray-300">
              <Globe size={14} className="text-[#faa31a] mt-0.5" />
              <span>Avenue Eiffel 8, 1300 Wavre, Belgium</span>
            </li>
          </ul>
        </div>

        <div className="md:text-right">
          <p className="text-gray-300">&copy; 2025 Digi Mabble Solutions.</p>
          <div className="flex gap-4 mt-2 justify-start md:justify-end">
             <a href="#" className="hover:text-[#faa31a] transition-colors text-gray-400">Privacy</a>
             <a href="#" className="hover:text-[#faa31a] transition-colors text-gray-400">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APP COMPONENT ---

const App = () => {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      <TopBar />
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;
