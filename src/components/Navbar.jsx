import React, { useState } from 'react';

// Enhanced Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-2xl backdrop-blur-md border-b border-blue-800/30 sticky top-0 z-[9999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-xl shadow-lg p-2 flex items-center justify-center transform hover:scale-110 transition-all duration-300">
              <img 
                src="/iqraunilogo.jpg" 
                alt="Iqra University Logo" 
                className="h-12 w-auto object-contain rounded-lg"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback Logo */}
              <div 
                className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg hidden items-center justify-center"
                style={{ display: 'none' }}
              >
                <span className="text-white font-black text-xl">IU</span>
              </div>
            </div>
            
            <div className="text-left">
              <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
                IQRA UNIVERSITY
              </h1>
              <p className="text-xs text-blue-300 font-medium -mt-1">
                Excellence in Education
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-white hover:text-amber-400 font-semibold transition-all duration-300 hover:scale-105 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/academics" className="text-white hover:text-amber-400 font-semibold transition-all duration-300 hover:scale-105 relative group">
              Departments
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/admissions" className="text-white hover:text-amber-400 font-semibold transition-all duration-300 hover:scale-105 relative group">
              Admissions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/news-events" className="text-white hover:text-amber-400 font-semibold transition-all duration-300 hover:scale-105 relative group">
              Campus Life
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/contact" className="text-white hover:text-amber-400 font-semibold transition-all duration-300 hover:scale-105 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-amber-400 focus:outline-none focus:text-amber-400 transition-colors duration-300"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 mb-4 shadow-2xl border border-blue-700/30">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="/" 
                className="block text-white hover:text-amber-400 font-semibold py-2 px-4 rounded-lg hover:bg-blue-800/50 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/academics" 
                className="block text-white hover:text-amber-400 font-semibold py-2 px-4 rounded-lg hover:bg-blue-800/50 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Departments
              </a>
              <a 
                href="/admissions" 
                className="block text-white hover:text-amber-400 font-semibold py-2 px-4 rounded-lg hover:bg-blue-800/50 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admissions
              </a>
              <a 
                href="/news-events" 
                className="block text-white hover:text-amber-400 font-semibold py-2 px-4 rounded-lg hover:bg-blue-800/50 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Campus Life
              </a>
              <a 
                href="/contact" 
                className="block text-white hover:text-amber-400 font-semibold py-2 px-4 rounded-lg hover:bg-blue-800/50 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;