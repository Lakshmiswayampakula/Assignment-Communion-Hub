import React from 'react';
import { motion } from 'framer-motion';
import event1 from '../image/events-3.jpg';
import event2 from '../image/events-2.jpg';
import event3 from '../image/events-1.jpg';
import event4 from '../image/events-4.jpg';
import { FaUsers, FaHandsHelping, FaGraduationCap, FaHandshake, FaStar, FaArrowRight } from 'react-icons/fa';
import { IoIosHeartEmpty } from 'react-icons/io';
import { MdOutlineLocationOn } from 'react-icons/md';
import StatsContainer from './StatsContainer';
import FAQ from './Faq';
import { useNavigate } from 'react-router-dom';

const HeadlineCards = () => {
  const navigate = useNavigate();

  const handleEventsNavigation = () => {
    navigate('/events');
  };

  // Animation variant for fade-in effect
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -12,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
    <br/>
      {/* Hero Heading Section */}

  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInVariant}
    className="max-w-[1640px] mx-auto px-4"
  >
    <div className="bg-gradient-to-r from-blue-600/90 to-indigo-800/90 rounded-2xl p-8 md:p-12 text-center shadow-xl relative">
      {/* Shadow gradient overlay for premium look */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-lg opacity-40 -z-10"></div>
      
      <div className="inline-block px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full mb-4">
        <div className="flex items-center">
          <FaStar className="text-yellow-300 mr-2" />
          <span className="text-sm font-medium text-white">Celebrating 70+ Years of Excellence</span>
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">Connecting People, Building Futures</h1>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 text-white">
        Join our vibrant community and be part of something extraordinary
      </p>
        </div>
        </motion.div>
      

      {/* Enhanced Pillars of Excellence Section */}
      <div className="max-w-[1640px] mx-auto p-4 py-16 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-30 -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-100 rounded-full opacity-30 -z-10 blur-3xl"></div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeInVariant}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-blue-50 rounded-full mb-4">
            <span className="text-blue-600 font-medium">What makes us unique</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Our Pillars of Excellence</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the four cornerstones that have made us a leading institution for over seven decades
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Enhanced Card 1 - Community */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group"
          >
            <div className="h-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all duration-300 group-hover:shadow-2xl">
              <div className="relative h-64">
                <img
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  src={event1}
                  alt="Community"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-blue-600/40 flex items-end p-6">
                  <div className="flex items-center">
                    <div className="bg-white p-3 rounded-full mr-4 shadow-lg">
                      <FaUsers className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="text-white font-bold text-2xl">Community</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Established since 1950</span>
                  <span className="text-xs font-medium text-gray-400">70+ years</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Creating spaces where everyone feels welcome and valued, fostering connections that last a lifetime.
                </p>
                <div className="flex justify-between items-center">
                  <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform group-hover:scale-105">
                    Join Now
                  </button>
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 transition-all duration-300 transform group-hover:translate-x-2">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Card 2 - Support */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group"
          >
            <div className="h-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all duration-300 group-hover:shadow-2xl">
              <div className="relative h-64">
                <img
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  src={event2}
                  alt="Support"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 to-green-600/40 flex items-end p-6">
                  <div className="flex items-center">
                    <div className="bg-white p-3 rounded-full mr-4 shadow-lg">
                      <FaHandsHelping className="text-green-600 text-xl" />
                    </div>
                    <h3 className="text-white font-bold text-2xl">Support</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">24/7 Dedicated Assistance</span>
                  <span className="text-xs font-medium text-gray-400">Always available</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Providing resources and assistance to help each member thrive through every stage of their journey.
                </p>
                <div className="flex justify-between items-center">
                  <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-300 transform group-hover:scale-105">
                    Contact Us
                  </button>
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 transition-all duration-300 transform group-hover:translate-x-2">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Card 3 - Alumni */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group"
          >
            <div className="h-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all duration-300 group-hover:shadow-2xl">
              <div className="relative h-64">
                <img
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  src={event3}
                  alt="Alumni"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/90 to-purple-600/40 flex items-end p-6">
                  <div className="flex items-center">
                    <div className="bg-white p-3 rounded-full mr-4 shadow-lg">
                      <FaGraduationCap className="text-purple-600 text-xl" />
                    </div>
                    <h3 className="text-white font-bold text-2xl">Alumni</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">10,000+ Graduates</span>
                  <span className="text-xs font-medium text-gray-400">Global network</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Our graduates form a powerful network of professionals making a difference across the globe.
                </p>
                <div className="flex justify-between items-center">
                  <button className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-all duration-300 transform group-hover:scale-105">
                    Connect
                  </button>
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 transition-all duration-300 transform group-hover:translate-x-2">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Card 4 - Collaboration */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group"
          >
            <div className="h-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all duration-300 group-hover:shadow-2xl">
              <div className="relative h-64">
                <img
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  src={event4}
                  alt="Collaboration"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 to-orange-600/40 flex items-end p-6">
                  <div className="flex items-center">
                    <div className="bg-white p-3 rounded-full mr-4 shadow-lg">
                      <FaHandshake className="text-orange-600 text-xl" />
                    </div>
                    <h3 className="text-white font-bold text-2xl">Collaboration</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">394,567 Associated Members</span>
                  <span className="text-xs font-medium text-gray-400">Growing network</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Working together across differences to create meaningful impact in communities worldwide.
                </p>
                <div className="flex justify-between items-center">
                  <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300 transform group-hover:scale-105">
                    Partner Up
                  </button>
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 transition-all duration-300 transform group-hover:translate-x-2">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Stats Container */}
      <StatsContainer /><br/>

      {/* Our Story Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="mb-24"
            >
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-30"></div>
                    <div className="relative bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl">
                      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Our Story</h2>
                      <p className="mb-4 text-gray-700 dark:text-gray-300">
                        Communion began with a simple idea: to create spaces where people from diverse faith backgrounds could come together in harmony and understanding.
                      </p>
                      <p className="mb-4 text-gray-700 dark:text-gray-300">
                        Founded in 1950, our platform has grown from a small local initiative to a vibrant community that spans across the country, connecting thousands of individuals through shared values and experiences.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Today, we continue to expand our reach, innovate our approach, and deepen our impact — all while staying true to our founding vision of fostering unity in diversity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-xl shadow-lg h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Community gathering" 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl shadow-lg h-48 transform translate-y-6">
                    <img 
                      src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Charity event" 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl shadow-lg h-48 transform translate-y-6">
                    <img 
                      src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Prayer gathering" 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl shadow-lg h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Cultural celebration" 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
      

            <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariant}
      className="mb-8"
    >
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-lg mb-8">
            Be part of something meaningful. Connect with others, share your journey, 
            and help build a more inclusive world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105">
              <IoIosHeartEmpty size={20} /> Get Involved
            </button>
            <button 
              onClick={handleEventsNavigation} // Add onClick handler here
              className="bg-transparent hover:bg-white/20 text-white border-2 border-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <MdOutlineLocationOn size={20} /> Events Near-By-Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
      
      
     
      {/* FAQ Section */}
      <FAQ />

      
    </>
  );
};

export default HeadlineCards;