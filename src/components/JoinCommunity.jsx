import React, { useState, useEffect } from 'react';
import { HiUserGroup } from 'react-icons/hi';
import { FaRegEnvelope, FaLock, FaUser, FaCheckCircle } from 'react-icons/fa';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { IoTime } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";

const Join = () => {
  const [activeTab, setActiveTab] = useState('signup'); // 'signup' or 'login'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [progress, setProgress] = useState(0);
  const [memberCount, setMemberCount] = useState(0);

  // Simulating increasing member count animation
  useEffect(() => {
    const target = 5892;
    const increment = Math.ceil(target / 100);
    const interval = setInterval(() => {
      setMemberCount(prev => {
        if (prev + increment >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + increment;
      });
    }, 20);
    
    return () => clearInterval(interval);
  }, []);

  // Simulating benefits with timing
  const benefits = [
    { icon: <FaCheckCircle className="text-green-500" />, text: "Access to exclusive community events" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Connect with like-minded individuals" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Participate in charitable initiatives" },
    { icon: <FaCheckCircle className="text-green-500" />, text: "Receive notifications for new events" }
  ];

  // Testimonials
  const testimonials = [
    { name: "Priya Sharma", comment: "Joining this community has been life-changing. I've made amazing friends and participated in meaningful events." },
    { name: "Rahul Verma", comment: "The events are well-organized and the community is incredibly welcoming. Highly recommended!" },
    { name: "Ananya Patel", comment: "I love how this platform connects people with similar interests. It's a perfect blend of social and spiritual growth." }
  ];

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    // Password strength calculation (simple version)
    if (value.length === 0) setProgress(0);
    else if (value.length < 6) setProgress(25);
    else if (value.length < 10) setProgress(50);
    else if (/[A-Z]/.test(value) && /[0-9]/.test(value)) setProgress(100);
    else if (/[A-Z]/.test(value) || /[0-9]/.test(value)) setProgress(75);
    else setProgress(50);
  };

  const getProgressColor = () => {
    if (progress < 30) return 'bg-red-500';
    if (progress < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (  
    <div className="pt-20 pb-16 max-w-[1640px] mx-auto px-4 bg-gradient-to-b from-gray-50 to-gray-100"><br/>
      {/* Header with animated gradient */}
      <div className="flex items-center justify-center gap-2 mb-2">
        <HiUserGroup className="text-purple-600 text-2xl md:text-4xl" />
        <h1 className="bg-gradient-to-r from-purple-600 to-violet-900 bg-clip-text text-transparent text-2xl md:text-4xl font-bold">
          
          Join Our Community
        </h1>
      </div>
      <h2 className="bg-gradient-to-r from-[#03b8f5] to-black bg-clip-text text-transparent text-center text-xl md:text-2xl font-bold pb-4">
        Connect, Grow, and Make a Difference Together
      </h2>
      
      {/* Member count banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg shadow-lg mb-8 max-w-md mx-auto text-center">
        <p className="text-lg font-semibold">Join <span className="text-2xl font-bold">{memberCount.toLocaleString()}</span> members already in our community!</p>
      </div>

      {/* Tab Switcher for Mobile */}
      <div className="md:hidden mb-8">
        <div className="flex rounded-lg overflow-hidden max-w-sm mx-auto border border-gray-200">
          <button 
            className={`w-1/2 py-3 text-center font-medium transition-all duration-300 ${activeTab === 'signup' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
          <button 
            className={`w-1/2 py-3 text-center font-medium transition-all duration-300 ${activeTab === 'login' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-6xl mx-auto">
        {/* Left column: Features and benefits */}
        <div className="w-full md:w-1/3 space-y-6">
          {/* Recent members */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
              <FaRegCalendarAlt className="mr-2" /> Why Join Us?
            </h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Testimonials */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
              <IoTime className="mr-2" /> Member Testimonials
            </h3>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-4 py-1">
                  <p className="text-gray-600 italic text-sm">{testimonial.comment}</p>
                  <p className="text-purple-700 font-medium mt-1">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Form cards */}
        <div className="w-full md:w-2/3">
          {/* Sign Up Card */}
          <div className={`w-full bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${activeTab === 'login' ? 'hidden md:block' : ''}`}>
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Create Your Account</h2>
            <form className="space-y-4">
              <div className="relative">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">Full Name</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <FaUser />
                  </span>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <FaRegEnvelope />
                  </span>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="password">Password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <FaLock />
                  </span>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    className="w-full px-4 py-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Create a strong password"
                    onChange={handlePasswordChange}
                    required
                  />
                  <button 
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                  </button>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-2 rounded-full ${getProgressColor()}`} style={{ width: `${progress}%` }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Password strength: {progress < 30 ? 'Weak' : progress < 70 ? 'Medium' : 'Strong'}</p>
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="confirmPassword">Confirm Password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <FaLock />
                  </span>
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    id="confirmPassword" 
                    className="w-full px-4 py-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Confirm your password"
                    required
                  />
                  <button 
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center">
                <input 
                  id="terms" 
                  type="checkbox" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the <a href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</a> and <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md"
                >
                  Create Account
                </button>
              </div>
            </form>
            <p className="text-gray-600 text-center mt-4">
              Already have an account? <button onClick={() => setActiveTab('login')} className="text-blue-600 hover:underline md:hidden">Login here</button>
              <span className="hidden md:inline">Use the login form</span>
            </p>
          </div>
          
          {/* Login Card */}
          <div className={`w-full bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${activeTab === 'signup' ? 'hidden md:block' : ''}`}>
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Welcome Back</h2>
            <form className="space-y-4">
              <div className="relative">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="loginEmail">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <FaRegEnvelope />
                  </span>
                  <input 
                    type="email" 
                    id="loginEmail" 
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="loginPassword">Password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <FaLock />
                  </span>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="loginPassword" 
                    className="w-full px-4 py-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Enter your password"
                    required
                  />
                  <button 
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                  </button>
                </div>
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
                  <a href="/forgot-password" className="text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md"
                >
                  Login
                </button>
              </div>
              
              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-600">or continue with</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <button type="button" className="inline-flex justify-center items-center py-2.5 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors duration-300">
                  <span className="sr-only">Continue with Google</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                  </svg>
                </button>
                <button type="button" className="inline-flex justify-center items-center py-2.5 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors duration-300">
                  <span className="sr-only">Continue with Facebook</span>
                  <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
                  </svg>
                </button>
                <button type="button" className="inline-flex justify-center items-center py-2.5 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors duration-300">
                  <span className="sr-only">Continue with Twitter</span>
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46,6c-0.77,0.35-1.6,0.58-2.46,0.69c0.88-0.53,1.56-1.37,1.88-2.38c-0.83,0.5-1.75,0.85-2.72,1.05C18.37,4.5,17.26,4,16,4c-2.35,0-4.27,1.92-4.27,4.29c0,0.34,0.04,0.67,0.11,0.98C8.28,9.09,5.11,7.38,3,4.79c-0.37,0.63-0.58,1.37-0.58,2.15c0,1.49,0.75,2.81,1.91,3.56c-0.71,0-1.37-0.2-1.95-0.5v0.03c0,2.08,1.48,3.82,3.44,4.21a4.22,4.22,0,0,1-1.93.07a4.28,4.28,0,0,0,4,2.98a8.521,8.521,0,0,1-5.33,1.84c-0.34,0-0.68-0.02-1.02-0.06C3.44,20.29,5.7,21,8.12,21C16,21,20.33,14.46,20.33,8.79c0-0.19,0-0.37-0.01-0.56C21.17,7.63,21.88,6.87,22.46,6z" />
                  </svg>
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
      
      {/* Final CTA */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold text-gray-700 mb-2">Ready to be part of something meaningful?</h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">Join our community today and start making a difference in your life and the lives of others.</p>
        <button onClick={() => setActiveTab('signup')} className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 hover:scale-105 transition-all duration-300 shadow-md">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Join;