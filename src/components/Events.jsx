import React, { useState } from 'react';
import { events as initialEvents } from '../data/data.js';
import { RiArrowRightUpLine } from "react-icons/ri";
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

const Events = () => {
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);
  const [events, setEvents] = useState(initialEvents);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ name: '', date: '', time: '', image: '', category: 'religious', description: '', location: '' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'All', icon: <FaGlobe />, color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700' },
    { name: 'Religious', icon: <FaChurch size={18} />, color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700' },
    { name: 'Social', icon: <FaUsers />, color: 'bg-orange-600', hoverColor: 'hover:bg-orange-700' },
    { name: 'Charity', icon: <FaHandHoldingHeart />, color: 'bg-pink-600', hoverColor: 'hover:bg-pink-700' }
  ];

  const filterEvents = (category) => {
    setActiveCategory(category);
    applyFilters(category, searchTerm);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    applyFilters(activeCategory, value);
  };

  const applyFilters = (category, search) => {
    let filtered = events;
    
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
    if (newEvent.name && newEvent.date && newEvent.time && newEvent.image) {
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      setFilteredEvents(updatedEvents);
      setNewEvent({ name: '', date: '', time: '', image: '', category: 'religious', description: '', location: '' });
      setShowForm(false);
    }
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-8 pt-20 md:pt-24">
      {/* Responsive Header */}
      <div className="flex items-center justify-center gap-2 mb-2">
        <MdCelebration className="text-purple-600 text-2xl md:text-4xl" />
        <h1 className="bg-gradient-to-r from-purple-600 to-violet-900 bg-clip-text text-transparent text-2xl md:text-4xl font-bold">
          Events that Unite
        </h1>
      </div>
      <h1 className="bg-gradient-to-r from-[#03b8f5] to-black bg-clip-text text-transparent text-center text-xl md:text-4xl font-bold pb-1">
        Join Hands, Share Moments, Make a Difference
      </h1>

      {/* Filter Controls - Made Responsive */}
      <div className="flex flex-col items-center space-y-4 my-4 px-2">
        <div className="w-full max-w-6xl">
          {/* Category Buttons - Made Responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 w-full">
            {categories.map(category => (
              <button 
                key={category.name} 
                onClick={() => filterEvents(category.name)} 
                className={`px-3 py-2 ${category.color} ${category.hoverColor} text-white 
                           flex items-center justify-center gap-1 rounded-md transform 
                           transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg
                           text-sm sm:text-base
                           focus:outline-none ${activeCategory === category.name ? 'ring-2 ring-white ring-opacity-50' : ''}`}
              >
                {category.icon} <span className="ml-1">{category.name}</span>
              </button>
            ))}
          </div>
          
          {/* Search and Add Event - Made Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
            </div>
            
            <button 
              onClick={() => setShowForm(true)} 
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white
                       flex items-center justify-center gap-2 rounded-md
                       transform transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg
                       focus:outline-none"
            >
              <FaPlus /> Add Event
            </button>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md mx-auto overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4">Add New Event</h2>
            <form onSubmit={addEvent} className="space-y-3">
              <input type="text" name="name" placeholder="Event Name" value={newEvent.name} onChange={handleInputChange} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <input type="time" name="time" value={newEvent.time} onChange={handleInputChange} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <select name="category" value={newEvent.category} onChange={handleInputChange} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                {categories.slice(1).map(category => (
                  <option key={category.name} value={category.name.toLowerCase()}>{category.name}</option>
                ))}
              </select>
              <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleInputChange} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <textarea name="description" placeholder="Description" value={newEvent.description} onChange={handleInputChange} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded" required />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors duration-300 focus:outline-none">Add Event</button>
                <button type="button" onClick={() => setShowForm(false)} className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition-colors duration-300 focus:outline-none">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Events Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 pt-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300 p-4">
              <img src={event.image} alt={event.name} className="w-full object-cover rounded-lg" style={{ height: '150px' }} />
              <h2 className="font-bold text-lg sm:text-xl mt-2">{event.name}</h2>
              <p className="text-gray-600 flex items-center gap-2 text-sm sm:text-base"><span><FaRegCalendarAlt /></span>{event.date}</p>
              <p className="text-gray-700 flex items-center gap-2 text-sm sm:text-base"><span><IoTime /></span>{event.time}</p>
              <p className="text-gray-700 flex items-center gap-2 text-sm sm:text-base"><span><IoLocationSharp /></span>{event.location}</p>
              <p className="pt-3 text-gray-700 text-sm sm:text-base">{event.description}</p>
              <button className='w-full mt-4 flex justify-center items-center bg-red-600 hover:bg-red-700 rounded-lg text-white p-2 transition-colors duration-300 focus:outline-none text-sm sm:text-base'>
                Event Details<span className="ml-2"><RiArrowRightUpLine /></span>
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600 py-8">No events found</div>
        )}
      </div>
    </div>
  );
};

export default Events;