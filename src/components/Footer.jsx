import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoMail, IoCall, IoLocation } from 'react-icons/io5';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-[1640px] mx-auto px-4">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaUsers className="h-5 w-5 text-blue-500" />
              <h2 className="text-xl font-bold text-blue-500">C0MMUNION</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting people across faiths and interests, building meaningful relationships through events and community support.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Events</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/join" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Join Community</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <IoLocation className="mr-3 text-blue-500 mt-1" />
                <span className="text-gray-400">123 Community Lane, Faith City, FC 12345</span>
              </li>
              <li className="flex items-center">
                <IoCall className="mr-3 text-blue-500" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <IoMail className="mr-3 text-blue-500" />
                <span className="text-gray-400">info@communion.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest events and community news.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {year} C0MMUNION. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-blue-500 transition-colors duration-200">Privacy Policy</Link>
            {' | '}
            <Link to="/terms" className="hover:text-blue-500 transition-colors duration-200">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;