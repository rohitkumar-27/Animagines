
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-motion-black/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
        <img src='logo.png' className='w-6 h-7'></img>
          {/* <span className="text-2xl font-bold text-white">AN<span className="text-motion-red">Imagine</span></span> */}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={cn("nav-link", isActive('/') && "active")}>Home</Link>
          <Link to="/services" className={cn("nav-link", isActive('/services') && "active")}>Services</Link>
          <Link to="/projects" className={cn("nav-link", isActive('/projects') && "active")}>Projects</Link>
          <Link to="/faq" className={cn("nav-link", isActive('/faq') && "active")}>FAQ</Link>
          <Link to="/contact" className={cn("nav-link", isActive('/contact') && "active")}>Contact</Link>
        </nav>


        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-motion-black-light/95 to-motion-black-dark/90 backdrop-blur-lg absolute top-full left-0 w-full animate-fade-in">
          <nav className="container mx-auto py-6 px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={cn("text-white py-2", isActive('/') && "text-motion-red")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={cn("text-white py-2", isActive('/services') && "text-motion-red")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className={cn("text-white py-2", isActive('/projects') && "text-motion-red")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/faq" 
              className={cn("text-white py-2", isActive('/faq') && "text-motion-red")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className={cn("text-white py-2", isActive('/contact') && "text-motion-red")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
