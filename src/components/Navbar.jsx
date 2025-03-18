import React, { useState, useEffect } from 'react'; 
import { IoHome } from "react-icons/io5"; 
import { MdEvent } from "react-icons/md"; 
import { FaInfoCircle, FaSearch, FaUserPlus, FaUsers } from "react-icons/fa"; 
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {   
  const [nav, setNav] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  
  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  // Animated logo component
  const LogoComponent = () => (
    <motion.div 
      className='flex items-center gap-2 cursor-pointer'
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >       
      <div className="relative">
        <FaUsers className={`h-7 w-7 ${scrolled ? 'text-blue-600' : 'text-blue-500'} transition-colors duration-300`} />
        
      </div>
      <h1 className={`text-xl md:text-2xl lg:text-3xl font-bold tracking-wide uppercase ${scrolled ? 'text-blue-600' : 'text-blue-500'} drop-shadow-sm transition-colors duration-300`}>     
        C<span className="text-orange-500">0</span>MMUNION   
      </h1>              
    </motion.div>
  );
  
  // Individual nav item component with hover effects
  const NavItem = ({ to, icon: Icon, label }) => (
    <li>
      <Link 
        to={to} 
        className="relative group text-gray-800 hover:text-blue-600 transition-colors duration-200 flex items-center py-2"
      >
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
        <Icon className="mr-2 text-xl group-hover:rotate-6 transition-transform duration-200" />
        {label}
      </Link>
    </li>
  );
  
  return (     
    <div className={`fixed top-0 w-full z-30 ${scrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-white'} transition-all duration-300 shadow-md max-w-[1640px] mx-auto flex justify-between items-center p-3 md:p-4 h-auto md:h-20`}>       
      {/* Left side - Logo */}       
      <div className="flex-none">
        <LogoComponent />
      </div>
        
      {/* Desktop Navigation - CENTERED */}        
      <div className='hidden lg:flex items-center justify-center flex-1'>
        <nav className='flex text-base lg:text-lg font-semibold'>            
          <ul className='flex space-x-12 xl:space-x-16'>                
            <NavItem to="/" icon={IoHome} label="Home" />
            <NavItem to="/events" icon={MdEvent} label="Events" />
            <NavItem to="/about" icon={FaInfoCircle} label="About" />
            <NavItem to="/join" icon={FaUserPlus} label="Join" />
          </ul>        
        </nav>
      </div>
      
      {/* Medium screen navigation - CENTERED with improved spacing */}
      <div className='hidden md:flex lg:hidden items-center justify-center flex-1'>
        <nav className='flex text-base font-semibold'>            
          <ul className='flex space-x-8'>                
            <NavItem to="/" icon={IoHome} label="Home" />
            <NavItem to="/events" icon={MdEvent} label="Events" />
            <NavItem to="/about" icon={FaInfoCircle} label="About" />
            <NavItem to="/join" icon={FaUserPlus} label="Join" />
          </ul>        
        </nav>
      </div>
      
      {/* Right side - Search & Auth Buttons with improved sizes */}
      <div className='hidden md:flex items-center space-x-4'>
        <form onSubmit={handleSearch} className='relative w-48 lg:w-64 group'>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 px-4 text-sm lg:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:shadow-md"
          />
          <button 
            type="submit" 
            className="absolute right-0 top-0 mt-2 mr-3 text-gray-600 hover:text-blue-500 transition-colors duration-200"
          >
            <FaSearch size={16} />
          </button>
        </form>
        
        <div className="flex items-center space-x-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/join" className='bg-transparent text-blue-600 border border-blue-600 px-4 py-2 rounded-full text-sm lg:text-base font-semibold hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>Login</Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/join" className='bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full text-sm lg:text-base font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md'>Sign Up</Link>
          </motion.div>
        </div>
      </div>              
      
      {/* Mobile Menu Button */}       
      <div className='md:hidden cursor-pointer' onClick={() => setNav(!nav)}>         
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <AiOutlineMenu size={28} className="text-blue-500" />
        </motion.div>
      </div>              
      
      {/* Mobile Menu Overlay */}       
      {nav && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='bg-black/70 backdrop-blur-sm fixed w-full h-screen top-0 left-0 z-10' 
          onClick={() => setNav(false)}
        ></motion.div>
      )}
      
      {/* Mobile Side Menu */}       
      <motion.div 
        className={`fixed top-0 right-0 w-[300px] h-screen bg-white z-20 shadow-lg transition-all duration-300 ${nav ? 'translate-x-0' : 'translate-x-full'}`}
        initial={{ x: 300 }}
        animate={{ x: nav ? 0 : 300 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className='flex justify-between items-center p-4 border-b'>           
          <div className='scale-75 origin-left'>
            <LogoComponent />
          </div>       
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <AiOutlineClose size={28} className='cursor-pointer text-blue-500' onClick={() => setNav(false)} />
          </motion.div>
        </div>
        
        {/* Mobile Search */}
        <div className="px-4 py-4 border-b">
          <form onSubmit={handleSearch} className='relative'>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 pl-4 pr-10 text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button 
              type="submit" 
              className="absolute right-0 top-0 mt-2 mr-3 text-gray-600 hover:text-blue-500 transition-colors duration-200"
            >
              <FaSearch size={18} />
            </button>
          </form>
        </div>
                  
        <nav className="py-2">              
          <ul className='flex flex-col text-gray-800'>                  
            <li>       
              <Link to="/" className='text-lg py-4 px-4 flex items-center border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200' onClick={() => setNav(false)}>         
                <IoHome size={24} className='mr-4 text-blue-500' />Home       
              </Link>     
            </li>                  
            <li>       
              <Link to="/events" className='text-lg py-4 px-4 flex items-center border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200' onClick={() => setNav(false)}>         
                <MdEvent size={24} className='mr-4 text-blue-500' />Events       
              </Link>     
            </li>                  
            <li>       
              <Link to="/about" className='text-lg py-4 px-4 flex items-center border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200' onClick={() => setNav(false)}>         
                <FaInfoCircle size={24} className='mr-4 text-blue-500' />About       
              </Link>     
            </li>
            <li>       
              <Link to="/join" className='text-lg py-4 px-4 flex items-center border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200' onClick={() => setNav(false)}>         
                <FaUserPlus size={24} className='mr-4 text-blue-500' />Join Community       
              </Link>     
            </li>              
          </ul>          
        </nav>
        
        {/* Auth Buttons for Mobile */}
        <div className='flex flex-col p-4 space-y-3 mt-4'>
          <Link to="/join" className='border border-blue-500 text-blue-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center' onClick={() => setNav(false)}>Login</Link>
          <Link to="/join" className='bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center shadow-md' onClick={() => setNav(false)}>Sign Up</Link>
        </div>
        
        {/* Status badge */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span>Online Community</span>
          </div>
        </div>
      </motion.div>     
    </div>   
  ); 
};  

export default Navbar;