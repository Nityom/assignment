"use client"
import React, { useState } from 'react';

interface HeaderProps {
  className?: string;
}

export default function HeaderSection({ className = '' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
 
  const navLinkStyles = {
    color: '#4787FF',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    lineHeight: '14px'
  };
  
  const gradientLineStyle = {
    background: 'linear-gradient(90deg, rgba(0, 120, 255, 0.00) 0%, #0078FF 53%, rgba(0, 120, 255, 0.00) 100%)'
  };
  
  const buttonStyle = {
    background: '#4787FF'
  };
  
 
  const navItems = [
    "Platform",
    "Resource centre",
    "Company",
    "Case studies",
    "Partners"
  ];

  return (
    <header className={`relative bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
   
        <div className="flex items-center justify-between py-3 sm:py-4 lg:py-5">
  
          <div className="flex-shrink-0">
            <span 
              className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold tracking-wider uppercase"
              style={{
                color: '#0078FF',
                fontFamily: '"DM Sans", sans-serif',
                letterSpacing: '1.12px'
              }}
            >
              LOGO
            </span>
          </div>
          
       
          <nav className="hidden md:inline-flex items-center relative py-3 lg:py-5 xl:py-6">

            <div 
              className="absolute top-0 left-0 right-0 h-0.5 lg:h-1 opacity-50"
              style={gradientLineStyle}
            />
  
            <div 
              className="absolute bottom-0 left-0 right-0 h-0.5 lg:h-1 opacity-50"
              style={gradientLineStyle}
            />
            
           
            {navItems.map((item) => (
              <a 
                key={item}
                href="#" 
                className="flex flex-col justify-center flex-shrink-0 text-center transition-colors duration-200 w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 text-xs md:text-sm lg:text-base"
                style={navLinkStyles}
              >
                {item}
              </a>
            ))}
          </nav>
          
        
          <div className="flex-shrink-0 hidden sm:block">
            <button 
              className="text-white font-medium transition-all duration-200 text-xs sm:text-sm lg:text-base px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-lg sm:rounded-xl lg:rounded-xl"
              style={buttonStyle}
            >
              Sign Up Now
            </button>
          </div>
          
       
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="relative p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 text-[#4787FF]"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <div 
                  className={`w-5 h-0.5 bg-[#4787FF] transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <div 
                  className={`w-5 h-0.5 bg-[#4787FF] transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <div 
                  className={`w-5 h-0.5 bg-[#4787FF] transform transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white border-t border-blue-100 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 sm:px-6 pt-4 pb-6 space-y-1">
     
          {navItems.map((item) => (
            <a 
              key={item}
              href="#" 
              className="block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200"
              style={{ color: '#4787FF' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          
    
          <div className="pt-4 sm:hidden">
            <button 
              className="w-full text-white font-medium py-3 px-4 rounded-lg transition-all duration-200"
              style={buttonStyle}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}