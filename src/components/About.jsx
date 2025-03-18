import React from "react";
import homepage from "../image/About-background.jpg";
import { FaUsers, FaHandHoldingHeart, FaChurch, FaGlobe } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";
import { motion } from "framer-motion";

const About = () => {
  const coreValues = [
    {
      title: "Inclusion",
      icon: <FaUsers className="text-4xl text-purple-600" />,
      description: "We welcome people of all faiths, backgrounds, and traditions."
    },
    {
      title: "Compassion",
      icon: <FaHandHoldingHeart className="text-4xl text-pink-600" />,
      description: "We act with kindness and empathy towards all community members."
    },
    {
      title: "Respect",
      icon: <FaChurch className="text-4xl text-blue-600" />,
      description: "We honor the diversity of spiritual and cultural expressions."
    },
    {
      title: "Unity",
      icon: <FaGlobe className="text-4xl text-teal-600" />,
      description: "We celebrate what brings us together while respecting our differences."
    }
  ];

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-8 pt-20">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden rounded-lg mb-16">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover"
          src={homepage}
          alt="Communion App"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-purple-900/50 flex flex-col justify-center items-center text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              ABOUT US
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 mb-4">
              "Bringing People of All Faiths Together Through Events & Community Support"
            </h2>
            <p className="mt-4 mb-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-100">
              Our mission is to create a welcoming space where faith and
              fellowship flourish. We empower individuals to connect, share, and
              grow spiritually through meaningful events, volunteer opportunities,
              and enriching discussions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105">
                <FaUsers /> Join Our Community
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105">
                <MdCelebration /> Explore Events
              </button>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Core Values Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
        className="max-w-[1640px] mx-auto p-4 mb-24"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Our Core Values</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      

  
    </div>
  );
};

export default About;