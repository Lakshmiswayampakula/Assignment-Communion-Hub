import React, { useState, useRef, useEffect } from "react";
import { FaQuestionCircle, FaTimes, FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ChatBot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hello! I'm here to help you with any questions about our community. How can I assist you today?", 
      isBot: true 
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Sample responses for demo purposes
  const botResponses = [
    "That's a great question! Our community has been connecting people for over 70 years, offering support through every stage of your journey.",
    "I'd be happy to help you with that. We host regular events both online and in-person across the country. Would you like me to share some upcoming events in your area?",
    "Absolutely! To get involved, you can start by joining our online community forums or attending one of our introductory sessions. What interests you most about our organization?",
    "Thanks for reaching out! Our support team is available 24/7. For urgent matters, you can also call us at (555) 123-4567.",
    "I understand your concern. Let me connect you with one of our community specialists who can provide more personalized assistance with this matter."
  ];
  
  // Scroll to bottom when new messages appear
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const toggleChat = () => {
    setChatOpen(!chatOpen);
    if (!chatOpen) {
      // Reset typing indicator when reopening
      setIsTyping(false);
    }
  };
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    
    // Add user message
    setMessages([...messages, { text: newMessage, isBot: false }]);
    setNewMessage("");
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate bot response with intelligent delay based on message length
    const responseDelay = Math.min(1000 + newMessage.length * 20, 3000);
    
    setTimeout(() => {
      setIsTyping(false);
      
      // Select a contextual response (in a real app, you'd use an actual AI service)
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      setMessages(prevMessages => [
        ...prevMessages,
        {
          text: randomResponse,
          isBot: true
        }
      ]);
    }, responseDelay);
  };
  
  // Get time for message timestamp
  const getTimeString = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <>
      {/* Help Button with Pulse Effect */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Get Help"
      >
        {chatOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <>
            <FaQuestionCircle className="text-2xl" />
            <span className="absolute top-0 right-0 h-3 w-3 bg-green-400 rounded-full mr-1 mt-1"></span>
            <span className="animate-ping absolute top-0 right-0 h-3 w-3 bg-green-400 rounded-full mr-1 mt-1 opacity-75"></span>
          </>
        )}
      </motion.button>
      
      {/* Chatbot Interface */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <FaRobot className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Community Assistant</h3>
                  <div className="flex items-center text-xs text-green-300">
                    <span className="h-2 w-2 bg-green-300 rounded-full mr-2"></span>
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white/80 hover:text-white focus:outline-none h-8 w-8 flex items-center justify-center rounded-full hover:bg-white/10"
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto max-h-96 bg-gradient-to-b from-gray-50 to-white">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className={`mb-4 flex ${
                    message.isBot ? "justify-start" : "justify-end"
                  }`}
                >
                  {message.isBot && (
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0 self-end mb-1">
                      <FaRobot className="text-blue-600 text-sm" />
                    </div>
                  )}
                  
                  <div className="flex flex-col max-w-[75%]">
                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        message.isBot
                          ? "bg-white text-gray-800 border border-gray-200 shadow-sm rounded-tl-none"
                          : "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-none"
                      }`}
                    >
                      {message.text}
                    </div>
                    <span className={`text-xs mt-1 text-gray-500 ${message.isBot ? "ml-2" : "mr-2 self-end"}`}>
                      {getTimeString()}
                    </span>
                  </div>
                  
                  {!message.isBot && (
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ml-2 flex-shrink-0 self-end mb-1">
                      <FaUser className="text-white text-sm" />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <FaRobot className="text-blue-600 text-sm" />
                  </div>
                  <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "600ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 bg-white">
              <div className="flex items-center rounded-full border border-gray-300 bg-gray-50 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-gray-700 rounded-l-full"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!newMessage.trim()}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-full m-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane className="text-sm" />
                </motion.button>
              </div>
              <div className="text-xs text-center mt-2 text-gray-500">
                We typically reply within minutes during business hours
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;