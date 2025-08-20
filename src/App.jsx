
import React, { useState, useEffect } from 'react';
import './index.css';


function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  // Helper function to get the appropriate logo
  const getLogo = () => {
    return isDarkMode ? '/logo.svg' : '/logo-light.svg';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--dark-gray)] text-white font-sans">
      {/* Modern Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[var(--dark-gray)]/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-4 group">
              <div className="relative">
                <img 
                  src="/logo-light.svg" 
                  alt="Ulmus Logo" 
                  className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute -inset-2 bg-[var(--lime-spark)]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ulmus
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#features" className="text-gray-300 hover:text-[var(--lime-spark)] transition-all duration-300 font-medium relative group">
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--lime-spark)] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-[var(--lime-spark)] transition-all duration-300 font-medium relative group">
                How it works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--lime-spark)] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-[var(--lime-spark)] transition-all duration-300 font-medium relative group">
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--lime-spark)] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#docs" className="text-gray-300 hover:text-[var(--lime-spark)] transition-all duration-300 font-medium relative group">
                Docs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--lime-spark)] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-gray-300 hover:text-white transition-colors duration-300 font-medium px-4 py-2">
                Sign in
              </button>
              <button className="bg-[var(--lime-spark)] text-[var(--dark-gray)] px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[var(--lime-spark)]/30 shadow-lg">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <svg className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[var(--dark-gray)]/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-6 py-8 space-y-6">
              <a href="#features" className="block text-gray-300 hover:text-[var(--lime-spark)] transition-colors duration-300 font-medium py-3 text-lg">
                Features
              </a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-[var(--lime-spark)] transition-colors duration-300 font-medium py-3 text-lg">
                How it works
              </a>
              <a href="#pricing" className="block text-gray-300 hover:text-[var(--lime-spark)] transition-colors duration-300 font-medium py-3 text-lg">
                Pricing
              </a>
              <a href="#docs" className="block text-gray-300 hover:text-[var(--lime-spark)] transition-colors duration-300 font-medium py-3 text-lg">
                Docs
              </a>
              <div className="pt-6 border-t border-white/10 space-y-4">
                <button className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 font-medium py-3 text-lg">
                  Sign in
                </button>
                <button className="w-full bg-[var(--lime-spark)] text-[var(--dark-gray)] px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 text-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden flex items-center">
          <div className="animated-gradient"></div>
          {/* Subtle logo pattern background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url('${getLogo()}')`,
              backgroundSize: '120px 120px',
              backgroundRepeat: 'repeat',
              backgroundPosition: '60px 60px'
            }}></div>
          </div>
        <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 py-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
              Stop building <span className="text-[var(--lime-spark)]">complex email flows.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Ulmus automates the entire onboarding sequence, saving your team hours while delivering a consistent, human experience at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-[var(--lime-spark)] text-[var(--dark-gray)] font-bold rounded-lg text-lg px-10 py-4 hover:shadow-[var(--lime-spark)]/40 transition-all duration-300 shadow-[var(--lime-spark)]/20 hover:scale-105">Try It Now</button>
              <button className="border border-gray-600 bg-gray-700/50 text-white hover:border-gray-500 hover:bg-gray-700 hover:scale-105 transition-all duration-300 font-bold rounded-lg text-lg px-10 py-4">Watch Chat Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why traditional onboarding breaks */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[var(--dark-gray)]">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why traditional onboarding breaks</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-20 max-w-4xl mx-auto leading-relaxed">
              Cumbersome forms. Complex branching logic. Messy data. Users rush through fields, your database fills with noise, and onboarding emails end up generic and ineffective.
            </p>
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              <div className="p-8 rounded-2xl bg-gray-800 shadow border border-gray-700">
                <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6 mx-auto">
                  {/* SVG icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-red-500"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-white">Cumbersome Forms</h3>
                <p className="text-gray-400 leading-relaxed">Users rush through lengthy forms, providing minimal or inaccurate information</p>
              </div>
              <div className="p-8 rounded-2xl bg-gray-800 shadow border border-gray-700">
                <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-red-500"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-white">Complex Logic</h3>
                <p className="text-gray-400 leading-relaxed">Branching workflows become unwieldy and hard to maintain</p>
              </div>
              <div className="p-8 rounded-2xl bg-gray-800 shadow border border-gray-700">
                <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-red-500"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-white">Messy Data</h3>
                <p className="text-gray-400 leading-relaxed">Poor data quality leads to generic, ineffective email sequences</p>
              </div>
            </div>
            <div className="p-10 rounded-2xl bg-[var(--lime-spark)]/10 border border-[var(--lime-spark)]/30">
              <div className="flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[var(--lime-spark)] mr-4"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                <h3 className="text-xl font-semibold text-[var(--lime-spark)]">The Solution</h3>
              </div>
              <p className="text-lg text-white leading-relaxed"><strong>Ulmus closes that gap:</strong> a conversational setup that collects what matters and crafts tailored sequences with AI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Ulmus Works */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-gray-900/60 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">How Ulmus Works</h2>
            </div>
            <div className="space-y-20">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--lime-spark)] to-[var(--lime-spark)] flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-[var(--dark-gray)]" viewBox="0 0 24 24"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <span className="text-[var(--lime-spark)] font-bold text-lg">01</span>
                    <h3 className="text-2xl font-semibold text-white">Converse, don't fill forms</h3>
                  </div>
                  <p className="text-lg text-gray-400 leading-relaxed">A chat asks the essentials about your goals, audience, and tone. If unclear, it re-asks.</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--lime-spark)] to-[var(--lime-spark)] flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-[var(--dark-gray)]" viewBox="0 0 24 24"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <span className="text-[var(--lime-spark)] font-bold text-lg">02</span>
                    <h3 className="text-2xl font-semibold text-white">AI builds the sequence</h3>
                  </div>
                  <p className="text-lg text-gray-400 leading-relaxed">Forget decision-trees. Ulmus designs a tailored roadmap of emails aligned with your objective.</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--lime-spark)] to-[var(--lime-spark)] flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-[var(--dark-gray)]" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <span className="text-[var(--lime-spark)] font-bold text-lg">03</span>
                    <h3 className="text-2xl font-semibold text-white">Emails that guide</h3>
                  </div>
                  <p className="text-lg text-gray-400 leading-relaxed">Every message links to real resources, includes a clear CTA, and feels human and helpful.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[var(--dark-gray)]">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Business Outcomes</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-10 rounded-2xl bg-gray-800 border border-gray-700 shadow hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--lime-spark)] to-[var(--lime-spark)] flex items-center justify-center mb-8 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[var(--dark-gray)]" viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-6 text-white">Boost early activation</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Designed emails help users achieve quick wins and stick around.</p>
              </div>
              <div className="p-10 rounded-2xl bg-gray-800 border border-gray-700 shadow hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--lime-spark)] to-[var(--lime-spark)] flex items-center justify-center mb-8 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[var(--dark-gray)]" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-6 text-white">Reduce early churn</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Deliver value from the first message and keep users engaged.</p>
              </div>
              <div className="p-10 rounded-2xl bg-gray-800 border border-gray-700 shadow hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--lime-spark)] to-[var(--lime-spark)] flex items-center justify-center mb-8 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[var(--dark-gray)]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-6 text-white">Align onboarding & marketing</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Consistent voice, personalized offers, transparent tracking.</p>
              </div>
              <div className="p-10 rounded-2xl bg-gray-800 border border-gray-700 shadow hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--lime-spark)] to-[var(--lime-spark)] flex items-center justify-center mb-8 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[var(--dark-gray)]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-6 text-white">Save time & avoid errors</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Conversational setup cleans your data and removes friction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-6 sm:px-8 lg:px-12 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-gray-800/40 opacity-60" />
        <div className="relative z-10 container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Ready to delight new users <span className="text-[var(--lime-spark)]">from day one?</span></h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-[var(--lime-spark)] text-[var(--dark-gray)] font-bold rounded-lg text-lg px-12 py-4 hover:shadow-[var(--lime-spark)]/40 transition-all duration-300 shadow-[var(--lime-spark)]/20 hover:scale-105">Start your free trial</button>
              <button className="border border-gray-600 bg-gray-700/50 text-white hover:border-gray-500 hover:bg-gray-700 hover:scale-105 transition-all duration-300 font-bold rounded-lg text-lg px-12 py-4">Book a chat walkthrough</button>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Beautiful Modern Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-800 border-t border-white/10">
        {/* Animated background pattern */}
        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-8 group">
                  <div className="relative">
                    <img 
                      src={getLogo()} 
                      alt="Ulmus Logo" 
                      className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute -inset-3 bg-[var(--lime-spark)]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    Ulmus
                  </span>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
                  Transforming email onboarding with AI-powered conversations. The natural way to grow with technology.
                </p>
                <div className="flex space-x-8">
                  {/* Social Media Icons */}
                  <a href="#" className="group">
                    <div className="w-14 h-14 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--lime-spark)] group-hover:border-[var(--lime-spark)] group-hover:scale-110">
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-[var(--dark-gray)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="group">
                    <div className="w-14 h-14 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--lime-spark)] group-hover:border-[var(--lime-spark)] group-hover:scale-110">
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-[var(--dark-gray)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="group">
                    <div className="w-14 h-14 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--lime-spark)] group-hover:border-[var(--lime-spark)] group-hover:scale-110">
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-[var(--dark-gray)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="group">
                    <div className="w-14 h-14 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--lime-spark)] group-hover:border-[var(--lime-spark)] group-hover:scale-110">
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-[var(--dark-gray)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.958 1.404-5.958s-.359-.219-.359-1.219c0-1.142.662-1.994 1.488-1.994.219 0 .482.16.482.219 0 .179-.219.498-.219.219 0-.179.219-.219.219-.498 0-.957-.783-1.562-1.871-1.562-1.178 0-2.179.498-2.179 1.781 0 .498.041.862.179 1.178-.498-.041-.957-.179-1.298-.599-.599-.738-.898-1.562-.898-2.52 0-1.781 1.301-3.44 3.501-3.44 1.871 0 2.928 1.142 2.928 2.481 0 1.037-.359 1.994-1.099 2.659-.359.319-.718.498-1.178.498-.359 0-.718-.179-.898-.498-.179-.219-.359-.599-.179-.957.179-.359.359-.718.359-1.178 0-.599-.359-1.037-.898-1.037-.599 0-1.037.498-1.037 1.178 0 .359.041.718.179 1.037-.898 3.44-1.099 4.019-1.219 4.659-.179.957-.041 2.18.041 3.021C2.678 21.404 6.956 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Product Links */}
              <div>
                <h3 className="text-white font-bold text-lg mb-8 relative">
                  Product
                  <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[var(--lime-spark)] rounded-full"></span>
                </h3>
                <ul className="space-y-6">
                  <li><a href="#" className="text-gray-400 hover:text-[var(--lime-spark)] transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 group-hover:bg-[var(--lime-spark)] transition-colors duration-300"></span>
                    Features
                  </a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[var(--lime-spark)] transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 group-hover:bg-[var(--lime-spark)] transition-colors duration-300"></span>
                    Integrations
                  </a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[var(--lime-spark)] transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 group-hover:bg-[var(--lime-spark)] transition-colors duration-300"></span>
                    API
                  </a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[var(--lime-spark)] transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 group-hover:bg-[var(--lime-spark)] transition-colors duration-300"></span>
                    Pricing
                  </a></li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-white font-bold text-lg mb-8 relative">
                  Company
                  <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[var(--lime-spark)] rounded-full"></span>
                </h3>
                <ul className="space-y-6">
                  <li><a href="#" className="text-gray-400 hover:text-[var(--lime-spark)] transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 group-hover:bg-[var(--lime-spark)] transition-colors duration-300"></span>
                    About
                  </a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[var(--lime-spark)] transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 group-hover:bg-[var(--lime-spark)] transition-colors duration-300"></span>
                    Blog
                  </a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[var(--lime-spark)] transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 group-hover:bg-[var(--lime-spark)] transition-colors duration-300"></span>
                    Careers
                  </a></li>
                  <li><a href="#" className="text-gray-400 hover:text-[var(--lime-spark)] transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 group-hover:bg-[var(--lime-spark)] transition-colors duration-300"></span>
                    Contact
                  </a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-20 pt-16 border-t border-white/10">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Stay in the loop</h3>
                <p className="text-gray-400 mb-10">Get the latest updates, tips, and insights delivered to your inbox.</p>
                <div className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[var(--lime-spark)] focus:ring-1 focus:ring-[var(--lime-spark)] transition-all duration-300"
                  />
                  <button className="bg-[var(--lime-spark)] text-[var(--dark-gray)] px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-[var(--lime-spark)]/30 shadow-lg whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 bg-black/20">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-gray-400">
                  © 2024 Ulmus. We're planting the seeds of innovation.
                </p>
                <div className="flex items-center space-x-8">
                  <a href="#" className="text-gray-400 hover:text-[var(--lime-spark)] transition-colors duration-300">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[var(--lime-spark)] transition-colors duration-300">
                    Terms of Service
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[var(--lime-spark)] transition-colors duration-300">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
