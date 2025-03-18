import React, { useState, useEffect } from 'react';
import { events as initialEvents } from '../data/data.js';
import { motion } from 'framer-motion';
import { IoLocationSharp } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
// Import icons for category buttons
import { FaGlobe } from "react-icons/fa"; // All icon
import { FaChurch } from "react-icons/fa"; // Religious icon
import { FaUsers } from "react-icons/fa"; // Social icon
import { FaHandHoldingHeart } from "react-icons/fa"; // Charity icon
import { MdCelebration } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md"; // Add new icon for Events Near Me
import { BsArrowUpRight } from "react-icons/bs";

const Events = () => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ 
    name: '', 
    date: '', 
    time: '', 
    image: '', 
    category: 'religious', 
    description: '', 
    location: '',
    coordinates: { lat: null, lng: null }
  });
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [nearbyActive, setNearbyActive] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState(null);
  const [showLocationModal, setShowLocationModal] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  // Add coordinates to events when component mounts
  useEffect(() => {
    // Map real Indian city coordinates to locations in the data
    const locationCoordinates = {
      'Tirupathi, Andhra Pradesh': { lat: 13.6288, lng: 79.4192 },
      'Gachibowli, Hyderabad': { lat: 17.4401, lng: 78.3489 },
      'Hope Orphanage, Bangalore': { lat: 12.9716, lng: 77.5946 },
      'Pune, Maharashtra': { lat: 18.5204, lng: 73.8567 },
      'ISKCON Temple, Pune': { lat: 18.5362, lng: 73.8396 },
      'Nodia, Uttar Pradesh': { lat: 28.5355, lng: 77.3910 },
      'NGO Office, Jaipur': { lat: 26.9124, lng: 75.7873 },
      'Ashram, Rishikesh': { lat: 30.0869, lng: 78.2676 }
    };
    
    const eventsWithCoordinates = initialEvents.map(event => {
      // If we have pre-defined coordinates for this location, use them
      if (locationCoordinates[event.location]) {
        return {
          ...event,
          coordinates: locationCoordinates[event.location]
        };
      } 
      // Otherwise generate random coordinates within India (fallback)
      else {
        // India's approximate bounding box
        const baseLat = 20.5937; // Central India latitude
        const baseLng = 78.9629; // Central India longitude
        const latOffset = (Math.random() - 0.5) * 10; // +/- 5 degrees
        const lngOffset = (Math.random() - 0.5) * 10; // +/- 5 degrees
        
        return {
          ...event,
          coordinates: {
            lat: baseLat + latOffset,
            lng: baseLng + lngOffset
          }
        };
      }
    });
    
    setEvents(eventsWithCoordinates);
    setFilteredEvents(eventsWithCoordinates);
  }, []);

  const categories = [
    { name: 'All', icon: <FaGlobe />, color: 'from-purple-600 to-indigo-700', textColor: 'text-white' },
    { name: 'Religious', icon: <FaChurch size={18} />, color: 'from-blue-500 to-blue-700', textColor: 'text-white' },
    { name: 'Social', icon: <FaUsers />, color: 'from-orange-500 to-orange-700', textColor: 'text-white' },
    { name: 'Charity', icon: <FaHandHoldingHeart />, color: 'from-pink-500 to-pink-700', textColor: 'text-white' }
  ];

  const getCategoryColor = (category) => {
    const foundCategory = categories.find(cat => cat.name.toLowerCase() === category.toLowerCase());
    return foundCategory ? foundCategory.color : 'from-gray-500 to-gray-700';
  };

  const filterEvents = (category) => {
    setActiveCategory(category);
    if (nearbyActive) {
      // Keep nearby filter active if it was enabled
      applyFilters(category, searchTerm, true);
    } else {
      applyFilters(category, searchTerm, false);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    applyFilters(activeCategory, value, nearbyActive);
  };

  const handleNearbyFilter = () => {
    // If already active, turn off nearby filter
    if (nearbyActive) {
      setNearbyActive(false);
      applyFilters(activeCategory, searchTerm, false);
      return;
    }
    
    // Show location permission modal
    setShowLocationModal(true);
  };

  const requestLocation = () => {
    setLocationLoading(true);
    setLocationError(null);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(userPos);
          setNearbyActive(true);
          setLocationLoading(false);
          setShowLocationModal(false);
          applyFilters(activeCategory, searchTerm, true, userPos);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocationError(
            error.code === 1 
              ? "Location permission denied. Please enable location services to see nearby events." 
              : "Unable to get your location. Please try again later."
          );
          setLocationLoading(false);
          setNearbyActive(false);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 }
      );
    } else {
      setLocationError("Geolocation is not supported by your browser");
      setLocationLoading(false);
      setNearbyActive(false);
    }
  };

  // Calculate distance using Haversine formula for more accurate earth distances
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1); 
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const d = R * c; // Distance in km
    return d;
  };
  
  const deg2rad = (deg) => {
    return deg * (Math.PI/180);
  };

  const applyFilters = (category, search, nearby, location = userLocation) => {
    let filtered = [...events]; // Create a copy to avoid mutating original
    
    // Apply category filter
    if (category !== 'All') {
      filtered = filtered.filter(event => event.category.toLowerCase() === category.toLowerCase());
    }
    
    // Apply search filter
    if (search) {
      filtered = filtered.filter(event => 
        event.name.toLowerCase().includes(search.toLowerCase()) ||
        event.description.toLowerCase().includes(search.toLowerCase()) ||
        event.location.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Apply nearby filter
    if (nearby && location) {
      const MAX_DISTANCE = 500; // Maximum distance in km for "nearby"
      
      // Calculate and add distance to each event
      filtered = filtered.map(event => {
        if (event.coordinates && event.coordinates.lat && event.coordinates.lng) {
          const distance = calculateDistance(
            location.lat, location.lng,
            event.coordinates.lat, event.coordinates.lng
          );
          
          return {
            ...event,
            distance: distance.toFixed(1)
          };
        }
        return event;
      });
      
      // Filter events within MAX_DISTANCE
      filtered = filtered.filter(event => 
        event.distance && parseFloat(event.distance) <= MAX_DISTANCE
      );
      
      // Sort events by distance (closest first)
      filtered.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
    }
    
    setFilteredEvents(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewEvent((prev) => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const addEvent = (e) => {
    e.preventDefault();
    if (newEvent.name && newEvent.date && newEvent.time && newEvent.location) {
      // For demo purposes, add random coordinates to new events within India
      const baseLat = 20.5937; // Central India
      const baseLng = 78.9629;
      const latOffset = (Math.random() - 0.5) * 10;
      const lngOffset = (Math.random() - 0.5) * 10;
      
      const eventWithCoordinates = {
        ...newEvent,
        id: events.length + 1,
        coordinates: {
          lat: baseLat + latOffset,
          lng: baseLng + lngOffset
        }
      };
      
      const updatedEvents = [...events, eventWithCoordinates];
      setEvents(updatedEvents);
      
      // Apply current filters to updated events list
      if (nearbyActive) {
        applyFilters(activeCategory, searchTerm, true, userLocation);
      } else {
        setFilteredEvents(updatedEvents);
      }
      
      setNewEvent({ 
        name: '', 
        date: '', 
        time: '', 
        image: '', 
        category: 'religious', 
        description: '', 
        location: '',
        coordinates: { lat: null, lng: null }
      });
      setShowForm(false);
    }
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-8 pt-20 md:pt-24">
      {/* Enhanced Hero Header with Animated Background */}
      <div className="relative rounded-3xl overflow-hidden mb-8 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 blur opacity-20"></div>
        
        {/* Animated circles in background */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-white opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-20 right-10 w-16 h-16 rounded-full bg-white opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="relative py-12 px-6 sm:px-12 text-center z-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <MdCelebration className="text-white text-3xl md:text-5xl" />
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              EVENTS THAT UNITE
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-white text-lg md:text-2xl opacity-90 max-w-3xl mx-auto"
          >
            Join Hands, Share Moments, Make a Difference
          </motion.p>
        </div>
      </div>

      {/* Filter Controls - Enhanced with Animations */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center space-y-6 my-6 px-2"
      >
        <div className="w-full max-w-6xl">
          {/* Category Buttons - Made More Attractive */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 w-full">
            {categories.map(category => (
              <motion.button 
                key={category.name} 
                onClick={() => filterEvents(category.name)} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-3 bg-gradient-to-r ${category.color} ${category.textColor} 
                           flex items-center justify-center gap-2 rounded-xl 
                           transition-all duration-300 shadow-lg
                           text-sm sm:text-base font-medium
                           ${activeCategory === category.name ? 'ring-2 ring-white' : ''}`}
              >
                {category.icon} <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
          
          {/* Near Me Button - Enhanced */}
          <div className="mb-6 w-full">
            <motion.button 
              onClick={handleNearbyFilter} 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white 
                        flex items-center justify-center gap-2 rounded-xl 
                        transition-all duration-300 shadow-lg
                        text-sm sm:text-base font-medium
                        ${nearbyActive ? 'ring-2 ring-white' : ''}`}
              disabled={locationLoading}
            >
              <MdOutlineLocationOn className="text-xl" /> 
              <span>
                {locationLoading ? 'Getting location...' : nearbyActive ? 'Turn Off Nearby Filter' : 'Events Near Me'}
              </span>
            </motion.button>
          </div>
          
          {/* Search and Add Event - Enhanced */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            <div className="relative sm:col-span-2">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search events by name, description or location..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
              />
            </div>
            
            <motion.button 
              onClick={() => setShowForm(true)} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white
                       flex items-center justify-center gap-2 rounded-xl
                       shadow-lg font-medium"
            >
              <FaPlus /> Add Event
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Location Request Modal - Enhanced */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4" onClick={() => setShowLocationModal(false)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-auto backdrop-blur-xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center mb-4 text-teal-600">
              <MdOutlineLocationOn className="text-3xl mr-2" />
              <h2 className="text-2xl font-bold">Enable Location</h2>
            </div>
            <p className="mb-6 text-gray-600">To see events near you, we need to access your location. This helps us find events within 500km of where you are.</p>
            
            {locationError && (
              <div className="p-4 bg-red-50 text-red-700 rounded-xl mb-6 border border-red-200">
                {locationError}
              </div>
            )}
            
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => setShowLocationModal(false)}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-xl text-gray-800 font-medium transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={requestLocation}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 rounded-xl text-white font-medium flex items-center transition-colors"
                disabled={locationLoading}
              >
                {locationLoading ? 'Getting location...' : 'Allow Access'}
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Form Modal - Enhanced */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4" onClick={() => setShowForm(false)}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-y-auto max-h-[90vh]" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaPlus className="text-purple-600" />
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Add New Event</h2>
            </div>
            
            <form onSubmit={addEvent} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Event Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Event Name" 
                  value={newEvent.name} 
                  onChange={handleInputChange} 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500" 
                  required 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Date</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={newEvent.date} 
                    onChange={handleInputChange} 
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Time</label>
                  <input 
                    type="time" 
                    name="time" 
                    value={newEvent.time} 
                    onChange={handleInputChange} 
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Category</label>
                <select 
                  name="category" 
                  value={newEvent.category} 
                  onChange={handleInputChange} 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500" 
                  required
                >
                  {categories.slice(1).map(category => (
                    <option key={category.name} value={category.name.toLowerCase()}>{category.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Location</label>
                <input 
                  type="text" 
                  name="location" 
                  placeholder="Location" 
                  value={newEvent.location} 
                  onChange={handleInputChange} 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea 
                  name="description" 
                  placeholder="Description" 
                  value={newEvent.description} 
                  onChange={handleInputChange} 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 min-h-[100px]" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Event Image</label>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500" 
                  required 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <button 
                  type="button" 
                  onClick={() => setShowForm(false)} 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded-xl transition-colors duration-300 font-medium"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-xl transition-colors duration-300 font-medium"
                >
                  Add Event
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Events Grid - Enhanced with Motion */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 pt-6"
      >
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(event.category)} text-white shadow-lg`}>
                    {event.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h2 className="font-bold text-xl mb-2 text-gray-800">{event.name}</h2>
                
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaRegCalendarAlt className="text-purple-600 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <IoTime className="text-purple-600 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <IoLocationSharp className="text-purple-600 flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  
                  {nearbyActive && event.distance && (
                    <div className="flex items-center gap-2 text-teal-600 font-medium">
                      <MdOutlineLocationOn className="flex-shrink-0" />
                      <span>{event.distance} km away</span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-600 line-clamp-2 mb-4">{event.description}</p>
                
                <button className='w-full flex justify-center items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-white p-3 transition-all duration-300 font-medium group-hover:scale-105'>
                  Event Details
                  <BsArrowUpRight className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div 
            variants={itemVariants}
            className="col-span-full bg-white p-12 rounded-2xl shadow-md text-center"
          >
            <div className="text-7xl mb-4 flex justify-center">
              {nearbyActive ? "🗺️" : "🔍"}
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No events found</h3>
            <p className="text-gray-600">
              {nearbyActive 
                ? "No events found near your location. Try increasing the search radius or turning off the nearby filter."
                : "Try changing your search or filter criteria."}
            </p>
          </motion.div>
        )}
      </motion.div>
      </div>
    
  );
};

export default Events;

