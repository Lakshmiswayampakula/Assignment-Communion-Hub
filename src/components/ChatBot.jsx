// In your src/components/ChatBot.jsx file
import React, { useState } from "react";
import { FaQuestionCircle, FaTimes, FaPaperPlane } from "react-icons/fa";

const ChatBot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you today?", isBot: true }
  ]);
  const [newMessage, setNewMessage] = useState("");
  
  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    
    // Add user message
    setMessages([...messages, { text: newMessage, isBot: false }]);
    
    // Simulate bot response (in a real app, you'd call your backend/API here)
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        {
          text: "Thanks for your message! Our team will get back to you soon.",
          isBot: true
        }
      ]);
    }, 1000);
    
    setNewMessage("");
  };
  
  return (
    <>
      {/* Help Icon Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Get Help"
      >
        {chatOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaQuestionCircle className="text-2xl" />
        )}
      </button>
      
      {/* Chatbot Interface */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden transition-all duration-300 border border-gray-200">
          {/* Chat Header */}
          <div className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-semibold">Help & Support</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-[80%] ${
                    message.isBot
                      ? "bg-gray-200 text-gray-800"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;