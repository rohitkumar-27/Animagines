
import React from 'react';
import { Link } from 'react-router-dom';
import {  Instagram, Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8  ">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">AN<span className="text-motion-red">Imagines</span></h3>
            <p className="text-gray-400 mb-6">
              Professional video editing and motion graphics services to elevate your visual content.
            </p>
            <div className="flex space-x-4">
              
              <a href="https://www.facebook.com/people/AnImagines/61575502823901/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-motion-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/_animagine/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-motion-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/106804000/admin/dashboard/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-motion-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

        
          {/* Contact Info */}
          <div className="animate-fade-in" style={{animationDelay: '300ms'}}>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-motion-red mt-1" size={18} />
                <span className="text-gray-400">India</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-motion-red" size={18} />
                <a href="mailto:hello@animagine.in" className="text-gray-400 hover:text-motion-red transition-colors">
                hello@animagine.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 animate-fade-in" style={{animationDelay: '400ms'}}>
          <p>&copy; {new Date().getFullYear()} AnImagines. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
