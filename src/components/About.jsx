import React from "react";
import homepage from "../image/About-background.jpg";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-8 pt-24 relative">
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-lg">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover"
          src={homepage}
          alt="Communion App"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            ABOUT <br />
          </h1> 
          <h2 className="text-green-500">
            "Bringing People of All Faiths Together Through Events & Community
            Support"
          </h2>
          <p className="mt-4 mb-6 text-base sm:text-lg md:text-xl max-w-2xl">
            Our mission is to create a welcoming space where faith and
            fellowship flourish. We empower individuals to connect, share, and
            grow spiritually through meaningful events, volunteer opportunities,
            and enriching discussions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadlineCards;