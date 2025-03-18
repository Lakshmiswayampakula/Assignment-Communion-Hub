import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUsers, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaCalendarAlt, FaUserFriends, FaLightbulb } from 'react-icons/fa';
import { IoMail, IoCall, IoLocation } from 'react-icons/io5';

const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if current page is Join Community page
  const isJoinPage = location.pathname === '/join';
  
  const handleSignIn = () => {
    navigate('/join');
  };
  
  return (
    <>
      {/* Enhanced Personalized Recommendations - Hide on Join page */}
      {!isJoinPage && (
        <div className="bg-gradient-to-r from-blue-600/5 via-indigo-500/10 to-purple-500/5 rounded-2xl my-10 py-12 px-8 text-center shadow-xl relative overflow-hidden border border-blue-100 mx-4 md:mx-8 lg:mx-12">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-blue-400/20 to-transparent rounded-full blur-2xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-t from-purple-400/20 to-transparent rounded-full blur-2xl -ml-32 -mb-32"></div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%237b6cf6\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")'}}></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-blue-700 font-semibold text-sm mb-6 shadow-sm">
              <span className="flex items-center">
                <FaUsers className="mr-2" />
                Join 10,000+ community members
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 leading-tight">Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Perfect Community</span></h2>
            
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of others and get personalized event recommendations based on your interests, skills, and goals.
            </p>
            
            {/* Features section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-50">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <FaCalendarAlt size={20} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Personalized Events</h3>
                <p className="text-gray-600">Discover events tailored to your interests and schedule.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-50">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <FaUserFriends size={20} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Connect with Others</h3>
                <p className="text-gray-600">Build meaningful relationships with like-minded people.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-50">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <FaLightbulb size={20} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Grow Your Skills</h3>
                <p className="text-gray-600">Access workshops and learning opportunities.</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button 
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 px-8 rounded-xl w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                onClick={handleSignIn}
              >
                <span>Join Now</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </button>
              
              <Link 
                to="/events" 
                className="bg-white text-blue-700 border border-blue-100 font-semibold py-3 px-8 rounded-xl w-full sm:w-auto shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Browse Events
              </Link>
            </div>
            
            {/* Social proof */}
            <div className="pt-6 border-t border-blue-100/50">
              <p className="text-sm text-gray-600 mb-4">Trusted by community leaders and participants worldwide</p>
              <div className="flex justify-center space-x-6 opacity-80">
                <div className="h-7 w-auto">⭐️⭐️⭐️⭐️⭐️</div>
                <p className="text-blue-800 font-medium">4.9/5 from 2,000+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="fill-gray-900">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
      
      {/* Main Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6"> 
        <div className="max-w-[1640px] mx-auto px-4">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Column 1: About */}
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <FaUsers className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-white">C<span className="text-blue-500">0</span>MMUNION</h2>
              </div>
              <p className="text-gray-300 mb-6 border-l-4 border-blue-500 pl-4">
                Connecting people across faiths and interests, building meaningful relationships through events and community support.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                  <FaFacebook size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-400 p-3 rounded-full transition-colors duration-300">
                  <FaTwitter size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300">
                  <FaInstagram size={18} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-300">
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>
            
            {/* Column 2: Quick Links - Removed blue underline */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/events", label: "Events" },
                  { to: "/about", label: "About Us" },
                  { to: "/join", label: "Join Community" },
                  { to: "/privacy", label: "Privacy Policy" },
                  { to: "/terms", label: "Terms of Service" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.to} 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-2">›</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 3: Contact Information - Removed blue underline */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="mr-3 p-2 bg-gray-800 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <IoLocation />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">123 Community Lane, Faith City, FC 12345</span>
                </li>
                <li className="flex items-center group">
                  <div className="mr-3 p-2 bg-gray-800 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <IoCall />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">(555) 123-4567</span>
                </li>
                <li className="flex items-center group">
                  <div className="mr-3 p-2 bg-gray-800 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <IoMail />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">info@communion.com</span>
                </li>
              </ul>
            </div>
            
            {/* Column 4: Newsletter - Removed blue underline */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                Newsletter
              </h3>
              <p className="text-gray-300 mb-4">Stay updated with our latest events and community news.</p>
              <form className="space-y-3">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-700 transition-all duration-300"
                  />
                  <div className="absolute right-3 top-3 w-1 h-5 bg-blue-500 animate-pulse"></div>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          {/* Divider with pattern */}
          <div className="relative py-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gray-900 px-4">
                <FaUsers className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {year} C<span className="text-blue-500">0</span>MMUNION. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-3">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</Link>
              <span className="text-gray-600">•</span>
              <Link to="/terms" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</Link>
              <span className="text-gray-600">•</span>
              <Link to="/faq" className="hover:text-blue-400 transition-colors duration-300">FAQ</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;