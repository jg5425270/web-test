import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center">
        <Image src="/logo.png" alt="JJM Technology Logo" width={48} height={48} />
        <span className="ml-3 text-xl font-bold text-gray-800">JJM Technology</span>
      </div>
      {/* Add your nav links here */}
    </nav>
  );
}

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center">
        <Image src="/logo.png" alt="JJM Technology Logo" width={48} height={48} />
        <span className="ml-3 text-xl font-bold text-gray-800">JJM Technology</span>
      </div>
      {/* Add your nav links here */}
    </nav>
  );
}

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/logo.png" alt="JJM Technology" className="h-8 w-8 mr-2" />
            <div className="text-2xl font-bold text-jjm-primary">JJM Technology</div>
            <div className="text-sm text-jjm-neutral-dark ml-2">LLC</div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-jjm-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-jjm-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-jjm-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-jjm-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-jjm-primary text-white px-4 py-2 rounded-lg hover:bg-jjm-primary-dark transition-colors text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-700 hover:text-jjm-primary focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-jjm-primary block px-3 py-2 text-base font-medium w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-jjm-primary block px-3 py-2 text-base font-medium w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-jjm-primary block px-3 py-2 text-base font-medium w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-jjm-primary block px-3 py-2 text-base font-medium w-full text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-jjm-primary text-white block px-3 py-2 rounded-lg text-base font-medium mx-3 mb-2 w-auto"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
