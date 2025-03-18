import React, { useState, useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const StatsContainer = () => {
  const [percentValue1, setPercentValue1] = useState(0);
  const [percentValue2, setPercentValue2] = useState(0);
  const [countValue, setCountValue] = useState(0);
  const statsRef = useRef(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !animationTriggered.current) {
        animationTriggered.current = true;
        
        // Start animations
        animateValue(0, 98, 2500, setPercentValue1);
        animateValue(0, 89, 2500, setPercentValue2);
        animateValue(0, 15, 2500, setCountValue);
      }
    }, options);

    // Store the current value in a variable that persists during cleanup
    const currentRef = statsRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animateValue = (start, end, duration, setter) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setter(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <div className="w-full relative py-12" style={{ backgroundColor: '#0B1A41' }} ref={statsRef}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-400 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-500 filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600 filter blur-3xl"></div>
      </div>

      <div className="max-w-[1640px] mx-auto p-4 relative z-10">
        <motion.div 
          className="text-center text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            Helping You Connect, Learn, and{' '}
            <span className="text-blue-400 relative">
              Thrive
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400 opacity-50 rounded-full"></span>
            </span>{' '}
            <span className="text-blue-400 inline-flex items-center mx-2 relative">
              <span className="relative">
                <FaStar className="mx-1 text-yellow-300" />
                <span className="absolute top-0 left-0 animate-ping opacity-75">
                  <FaStar className="mx-1 text-yellow-300" />
                </span>
              </span>
              2x
            </span>{' '}
            Impact
          </h2>
          <p className="text-sm text-blue-200 max-w-2xl mx-auto">
            Join thousands of community members who have transformed their connections and opportunities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center relative z-10">
          <motion.div 
            className="flex flex-col items-center p-5 rounded-xl border border-blue-600/30 shadow-lg"
            style={{
              background: "linear-gradient(135deg, rgba(23, 49, 114, 0.9) 0%, rgba(33, 68, 156, 0.8) 100%)",
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.5)",
              background: "linear-gradient(135deg, rgba(28, 56, 130, 0.95) 0%, rgba(39, 79, 175, 0.85) 100%)"
            }}
          >
            <div className="relative flex items-center justify-center w-16 h-16 mb-3">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300 to-blue-600 opacity-50 blur-sm"></div>
              <div className="relative flex items-center justify-center w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 shadow-lg border border-blue-400/50">
                <div className="text-xl font-bold text-white">%</div>
              </div>
            </div>
            <div className="text-5xl md:text-7xl font-bold mb-1 text-white">
              {percentValue1}
              <span className="text-blue-300">%</span>
            </div>
            <div className="text-lg md:text-xl font-medium text-white">Opportunities Expanded</div>
            <div className="mt-2 text-xs text-blue-200">Based on member surveys</div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center p-5 rounded-xl border border-purple-600/30 shadow-lg"
            style={{
              background: "linear-gradient(135deg, rgba(76, 29, 149, 0.9) 0%, rgba(124, 58, 237, 0.8) 100%)",
              boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)"
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 15px 30px -5px rgba(124, 58, 237, 0.5)",
              background: "linear-gradient(135deg, rgba(85, 33, 166, 0.95) 0%, rgba(139, 92, 246, 0.85) 100%)"
            }}
          >
            <div className="relative flex items-center justify-center w-16 h-16 mb-3">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300 to-purple-600 opacity-50 blur-sm"></div>
              <div className="relative flex items-center justify-center w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 shadow-lg border border-purple-400/50">
                <div className="text-xl font-bold text-white">%</div>
              </div>
            </div>
            <div className="text-5xl md:text-7xl font-bold mb-1 text-white">
              {percentValue2}
              <span className="text-purple-300">%</span>
            </div>
            <div className="text-lg md:text-xl font-medium text-white">Attendee Satisfaction</div>
            <div className="mt-2 text-xs text-purple-200">From post-event feedback</div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center p-5 rounded-xl border border-cyan-600/30 shadow-lg"
            style={{
              background: "linear-gradient(135deg, rgba(6, 95, 124, 0.9) 0%, rgba(14, 165, 233, 0.8) 100%)",
              boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.3)"
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 15px 30px -5px rgba(14, 165, 233, 0.5)",
              background: "linear-gradient(135deg, rgba(8, 115, 150, 0.95) 0%, rgba(56, 189, 248, 0.85) 100%)"
            }}
          >
            <div className="relative flex items-center justify-center w-16 h-16 mb-3">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-600 opacity-50 blur-sm"></div>
              <div className="relative flex items-center justify-center w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg border border-cyan-400/50">
                <div className="text-xl font-bold text-white">K+</div>
              </div>
            </div>
            <div className="text-5xl md:text-7xl font-bold mb-1 text-white">
              {countValue}
              <span className="text-cyan-300">K+</span>
            </div>
            <div className="text-lg md:text-xl font-medium text-white">Engaged Participants</div>
            <div className="mt-2 text-xs text-cyan-200">And growing every day</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StatsContainer;