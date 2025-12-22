import React, { useState, useEffect } from 'react';
import { GraduationCap, Search, Menu, X, Home, BookOpen, Users, FileText } from 'lucide-react';


const NAV_LINKS = [
  { label: 'Beranda', href: '/', icon: Home },
  { label: 'Materi', href: '#materi', icon: BookOpen },
  { label: 'Kontak', href: '#kontak', icon: FileText },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href, label) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
    
    if (href === '#kontak') {
      const footer = document.querySelector('footer');
      footer?.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <a 
            href="#/" 
            onClick={() => handleLinkClick('/', 'Beranda')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                LPP Gurindam
              </h1>
              <p className="text-xs text-gray-500 font-medium tracking-wide">
                Portal Pembelajaran PBJP
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href, link.label);
                }}
                className={`group relative flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeLink === link.href
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <link.icon className={`w-4 h-4 transition-transform duration-300 ${
                  activeLink === link.href ? 'scale-110' : 'group-hover:scale-110'
                }`} />
                <span>{link.label}</span>
                {activeLink === link.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                )}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">

            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href, link.label);
                }}
                className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeLink === link.href
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>
              </a>
            ))}
      
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;