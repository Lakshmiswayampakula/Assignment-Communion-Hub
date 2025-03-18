import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaAngleDown, FaAngleUp } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is CommunionHub?",
      answer: "CommunionHub is a platform that connects individuals for community events, learning opportunities, and networking. Our mission is to help you build meaningful connections and grow personally and professionally."
    },
    {
      question: "How can I participate in events?",
      answer: "You can participate in events by creating an account, browsing our events calendar, and registering for events that interest you. Once registered, you'll receive details about the event location, time, and any preparation needed."
    },
    {
      question: "Is there a fee to join events?",
      answer: "Most community events are free to join. Premium workshops and specialized training sessions may have a fee, which will be clearly marked on the event page. We strive to keep costs accessible while providing high-quality experiences."
    },
    {
      question: "How do I create my own event?",
      answer: "To create your own event, log into your account, navigate to the 'Create Event' section, and fill out the event details form. You can specify the type of event, capacity, location, date, time, and any other relevant information."
    },
    {
      question: "Can I cancel my registration for an event?",
      answer: "Yes, you can cancel your registration by going to your 'My Events' section in your profile and selecting the event you wish to cancel. Please note that some events may have cancellation deadlines, after which fees might not be refundable."
    },
    {
      question: "How can I connect with other attendees?",
      answer: "CommunionHub offers in-platform messaging that allows you to connect with other event attendees before, during, and after events. You can also join event-specific discussion groups and exchange contact information during events if other attendees consent."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full py-10 bg-white">
      <div className="w-full px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
            <h3 className="text-lg font-medium text-blue-500">Got Questions?</h3>
            <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-2">Frequently Asked Questions</h2>
          <p className="text-base text-gray-600 max-w-4xl mx-auto">
            Find answers to common questions about CommunionHub and how to make the most of our platform.
          </p>
        </div>
        
        <div className="w-full mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              style={{
                background: 'white',
                borderLeft: activeIndex === index ? '4px solid #3b82f6' : '4px solid transparent'
              }}
            >
              <div 
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${activeIndex === index ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'} transition-colors duration-300`}>
                    <FaQuestionCircle className="text-lg" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-blue">{faq.question}</h3>
                </div>
                <div className={`p-2 rounded-full ${activeIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'} transition-colors duration-300`}>
                  {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4"
                  >
                    <div className="pl-8 ml-3 border-l-2 border-blue-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Didn't find what you were looking for?</p>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;


