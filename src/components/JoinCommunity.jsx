import React, { useState } from 'react';
import { HiUserGroup } from 'react-icons/hi';

const Join = () => {
  const [activeTab, setActiveTab] = useState('signup'); // 'signup' or 'login'

  return (
    <div className="pt-24 pb-16 max-w-[1640px] mx-auto px-4">
      {/* Heading with Icon - Matched to the Events page layout */}
      <div className="flex justify-center mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-500">
            <HiUserGroup className="inline-block mr-2 mb-1" /> 
            Join Our Community
          </h1>
        </div>
      </div>
      
      {/* Tab Switcher for Mobile */}
      <div className="md:hidden mb-8">
        <div className="flex rounded-lg p-2 max-w-sm mx-auto gap-8">
          <button 
            className={`w-1/2 py-2 text-center rounded-lg font-medium transition-all duration-200 ${activeTab === 'signup' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
          <button 
            className={`w-1/2 py-2 text-center rounded-lg font-medium transition-all duration-200 ${activeTab === 'login' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-5xl mx-auto">
        {/* Sign Up Card - Enhanced shadow */}
        <div className={`w-full md:w-1/2 bg-white rounded-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)] p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.35)] transition-shadow duration-300 ${activeTab === 'login' ? 'hidden md:block' : ''}`}>
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Create Account</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Create a password"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Confirm your password"
                required
              />
            </div>
            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-gray-600 text-center mt-4">
            Already have an account? <button onClick={() => setActiveTab('login')} className="text-blue-600 hover:underline md:hidden">Login here</button>
            <span className="hidden md:inline">Use the login form</span>
          </p>
        </div>
        
        {/* Login Card - Enhanced shadow */}
        <div className={`w-full md:w-1/2 bg-white rounded-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)] p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.35)] transition-shadow duration-300 ${activeTab === 'signup' ? 'hidden md:block' : ''}`}>
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="loginEmail">Email Address</label>
              <input 
                type="email" 
                id="loginEmail" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="loginPassword">Password</label>
              <input 
                type="password" 
                id="loginPassword" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  id="remember-me" 
                  type="checkbox" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-gray-600 text-center mt-4">
            Don't have an account? <button onClick={() => setActiveTab('signup')} className="text-blue-600 hover:underline md:hidden">Sign up here</button>
            <span className="hidden md:inline">Use the sign up form</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Join;