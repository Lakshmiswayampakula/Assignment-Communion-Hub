import React, { useState } from 'react'; 
import { IoHome } from "react-icons/io5"; 
import { MdEvent } from "react-icons/md"; 
import { FaInfoCircle, FaSearch, FaUserPlus } from "react-icons/fa"; 
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 
import { Link } from 'react-router-dom'; 
import { FaUsers } from 'react-icons/fa';  

const Navbar = () => {   
  const [nav, setNav] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search functionality here
    console.log('Searching for:', searchQuery);
  };

  // Custom logo component for consistency
  const LogoComponent = () => (
    <div className='flex items-center gap-2'>       
      <FaUsers className="h-6 w-6 text-blue-500" />
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide uppercase text-blue-500 drop-shadow-md">     
        C0MMUNION   
      </h1>              
    </div>
  );
  
  return (     
    <div className='fixed top-0 w-full z-30 bg-white shadow-md max-w-[1640px] mx-auto flex justify-between items-center p-3 md:p-4 h-auto md:h-20'>       
      {/* Left side - Logo */}       
      <div className="flex-none">
        <LogoComponent />
      </div>
        
      {/* Desktop Navigation - CENTERED */}        
      <div className='hidden lg:flex items-center justify-center flex-1'>
        <nav className='flex text-base lg:text-lg font-semibold'>            
          <ul className='flex space-x-12 xl:space-x-16'>                
            <li>       
              <Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 flex items-center">         
                <IoHome className="mr-2 text-xl" />Home       
              </Link>     
            </li>                
            <li>       
              <Link to="/events" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 flex items-center">         
                <MdEvent className="mr-2 text-xl" />Events       
              </Link>     
            </li>                
            <li>       
              <Link to="/about" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 flex items-center">         
                <FaInfoCircle className="mr-2 text-xl" />About       
              </Link>     
            </li>
            <li>       
              <Link to="/join" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 flex items-center">         
                <FaUserPlus className="mr-2 text-xl" />Join       
              </Link>     
            </li>             
          </ul>        
        </nav>
      </div>
      
      {/* Medium screen navigation - CENTERED with improved spacing */}
      <div className='hidden md:flex lg:hidden items-center justify-center flex-1'>
        <nav className='flex text-base font-semibold'>            
          <ul className='flex space-x-8'>                
            <li>       
              <Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 flex items-center">         
                <IoHome className="mr-2 text-lg" />Home       
              </Link>     
            </li>                
            <li>       
              <Link to="/events" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 flex items-center">         
                <MdEvent className="mr-2 text-lg" />Events       
              </Link>     
            </li>                
            <li>       
              <Link to="/about" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 flex items-center">         
                <FaInfoCircle className="mr-2 text-lg" />About       
              </Link>     
            </li>
            <li>       
              <Link to="/join" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 flex items-center">         
                <FaUserPlus className="mr-2 text-lg" />Join       
              </Link>     
            </li>             
          </ul>        
        </nav>
      </div>
      
      {/* Right side - Search & Auth Buttons with improved sizes */}
      <div className='hidden md:flex items-center space-x-4'>
        <form onSubmit={handleSearch} className='relative w-48 lg:w-64'>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 px-4 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button 
            type="submit" 
            className="absolute right-0 top-0 mt-2 mr-3 text-gray-600 hover:text-blue-500 transition-colors duration-200"
          >
            <FaSearch size={16} />
          </button>
        </form>
         
        <Link to="/join" className='bg-blue-500 text-white px-4 py-2 rounded-lg text-sm lg:text-base font-semibold hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>Login</Link>
        <Link to="/join" className='bg-blue-500 text-white px-4 py-2 rounded-lg text-sm lg:text-base font-semibold hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>Sign Up</Link>
      </div>              
      
      {/* Mobile Menu Button */}       
      <div className='md:hidden cursor-pointer' onClick={() => setNav(!nav)}>         
        <AiOutlineMenu size={28} />       
      </div>              
      
      {/* Mobile Menu Overlay */}       
      {nav && <div className='bg-black/80 fixed w-full h-screen top-0 left-0 z-10' onClick={() => setNav(false)}></div>}              
      
      {/* Mobile Side Menu */}       
      <div className={`${nav ? 'fixed' : 'hidden'} top-0 right-0 w-[300px] h-screen bg-white z-20 shadow-lg transition-all duration-300`}>         
        <div className='flex justify-between items-center p-4'>           
          <div className='scale-75 origin-left'>
            <LogoComponent />
          </div>       
          <AiOutlineClose size={28} className='cursor-pointer' onClick={() => setNav(false)} />         
        </div>
        
        {/* Mobile Search */}
        <div className="px-4 mb-6">
          <form onSubmit={handleSearch} className='relative'>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 pl-4 pr-10 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button 
              type="submit" 
              className="absolute right-0 top-0 mt-2 mr-3 text-gray-600 hover:text-blue-500 transition-colors duration-200"
            >
              <FaSearch size={18} />
            </button>
          </form>
        </div>
                  
        <nav>              
          <ul className='flex flex-col p-4 text-gray-800'>                  
            <li>       
              <Link to="/" className='text-lg py-4 flex items-center border-b border-gray-100' onClick={() => setNav(false)}>         
                <IoHome size={24} className='mr-4' />Home       
              </Link>     
            </li>                  
            <li>       
              <Link to="/events" className='text-lg py-4 flex items-center border-b border-gray-100' onClick={() => setNav(false)}>         
                <MdEvent size={24} className='mr-4' />Events       
              </Link>     
            </li>                  
            <li>       
              <Link to="/about" className='text-lg py-4 flex items-center border-b border-gray-100' onClick={() => setNav(false)}>         
                <FaInfoCircle size={24} className='mr-4' />About       
              </Link>     
            </li>
            <li>       
              <Link to="/join" className='text-lg py-4 flex items-center border-b border-gray-100' onClick={() => setNav(false)}>         
                <FaUserPlus size={24} className='mr-4' />Join Community       
              </Link>     
            </li>              
          </ul>          
        </nav>
        
        {/* Auth Buttons for Mobile */}
        <div className='flex flex-col p-4 space-y-3 mt-4'>
          <Link to="/join" className='bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center' onClick={() => setNav(false)}>Login</Link>
          <Link to="/join" className='bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center' onClick={() => setNav(false)}>Sign Up</Link>
        </div>
      </div>     
    </div>   
  ); 
};  

export default Navbar;





