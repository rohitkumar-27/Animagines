
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Animation for page load
    const handlePageLoad = () => {
      document.body.classList.add('page-loaded');
    };
    
    // Add animation class when component mounts
    handlePageLoad();
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    return () => {
      document.body.classList.remove('page-loaded');
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <main className="flex-grow animate-fade-in">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
