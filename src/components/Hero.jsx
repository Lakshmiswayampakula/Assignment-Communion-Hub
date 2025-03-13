import React from "react";
import homepage from "../image/homepage.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-8 pt-24">
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-lg">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover "
          src={homepage}
          alt="Communion App"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Connecting People Across <br />
            <span className="text-blue-400">Faiths & Interests</span>
          </h1>
          <p className="mt-4 mb-6 text-base sm:text-lg md:text-xl max-w-2xl">
            Join events, connect with communities, and experience meaningful conversations.
          </p>
          <div className="flex flex-row gap-4">
            <Link to="/events">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md transition-transform transform hover:scale-105">
                Explore Events
              </button>
            </Link>
            <Link to="/about">
              <button className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold text-lg rounded-lg shadow-md transition-transform transform hover:scale-105">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;