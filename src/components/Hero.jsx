import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import homepage1 from "../image/homepage.jpg";
import homepage2 from "../image/homepage1.jpg";
import homepage3 from "../image/homepage5.jpg";
import homepage4 from "../image/homepage6.jpg";
// Import profile images for the people counter
import profile1 from "../image/profile1.jpg";
import profile2 from "../image/profile2.jpg";
import profile3 from "../image/profile4.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const heroRef = useRef(null);
  const [expandedGroup, setExpandedGroup] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Slide data with updated redirects and new interactive elements
  const slides = [
    {
      image: homepage1,
      title: "Connecting People Across",
      titleSpan: "Faiths & Interests",
      description: "Join events, connect with communities, and experience meaningful conversations.",
      buttonPrimary: { text: "Explore Events", link: "/events" },
      buttonSecondary: { text: "Learn More", link: "/about" },
      bgColor: "bg-gradient-to-r from-black/70 to-black/40",
      accentColor: "blue",
      showPeopleCounter: true,
      showButtons: true
    },
    {
      image: homepage2,
      title: "Discover Local Events",
      titleSpan: "Near You",
      description: "Find and participate in community gatherings that match your interests and beliefs.",
      buttonPrimary: { text: "Find Events", link: "/events" },
      buttonSecondary: { text: "Sign Up", link: "/join" },
      bgColor: "bg-gradient-to-br from-black/70 via-black/40 to-black/60",
      accentColor: "purple",
      showPeopleCounter: false,
      showButtons: true,
      showEventSearch: true,
      popularSearches: ["Meditation", "Interfaith", "Community Service", "Prayer Group"]
    },
    {
      image: homepage3,
      title: "Join Meaningful",
      titleSpan: "Conversations",
      description: "Connect with like-minded individuals and engage in discussions that matter.",
      buttonPrimary: { text: "Join Discussions", link: "/discussions" },
      buttonSecondary: { text: "Browse Topics", link: "/topics" },
      bgColor: "bg-gradient-to-t from-black/70 to-black/40",
      accentColor: "teal",
      showPeopleCounter: false,
      showButtons: true,
      showInterestTags: true,
      interestTags: ["Spirituality", "Philosophy", "Social Justice", "Mindfulness", "Community", "Traditions"]
    },
    {
      image: homepage4,
      title: "Build Your",
      titleSpan: "Community",
      description: "Create or join groups based on shared values, interests, and goals.",
      buttonPrimary: { text: "Browse Groups", link: "/groups" },
      buttonSecondary: { text: "Create Group", link: "/create-group" },
      bgColor: "bg-gradient-to-bl from-black/70 via-black/40 to-black/60",
      accentColor: "amber",
      showPeopleCounter: false,
      showButtons: true,
      showCommunityGroups: true,
      communityGroups: [
        { name: "Meditation Circle", members: 243, icon: "🧘" },
        { name: "Prayer Group", members: 186, icon: "🙏" },
        { name: "Book Club", members: 112, icon: "📚" }
      ]
    }
  ];

  // Auto-slide functionality with pause feature
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && !isPaused) {
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 700);
      }
    }, 10000); // Increased time to 10 seconds for better interaction

    return () => clearInterval(interval);
  }, [slides.length, isAnimating, isPaused]);

  // Pause auto-slide when mouse enters interactive elements
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  // Resume auto-slide when mouse leaves interactive elements
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Go to specific slide
  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  // Go to next slide
  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  // Go to previous slide
  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  // Get accent colors based on slide
  const getAccentColors = (accentColor) => {
    switch(accentColor) {
      case 'purple':
        return {
          textColor: 'text-purple-400',
          bgColor: 'bg-purple-400',
          shadowColor: 'shadow-purple-500/50',
          buttonColor: 'bg-purple-600 hover:bg-purple-700',
          dotActive: 'bg-purple-500',
          ringColor: 'ring-purple-400'
        };
      case 'teal':
        return {
          textColor: 'text-teal-400',
          bgColor: 'bg-teal-400',
          shadowColor: 'shadow-teal-500/50',
          buttonColor: 'bg-teal-600 hover:bg-teal-700',
          dotActive: 'bg-teal-500',
          ringColor: 'ring-teal-400'
        };
      case 'amber':
        return {
          textColor: 'text-amber-400',
          bgColor: 'bg-amber-400',
          shadowColor: 'shadow-amber-500/50',
          buttonColor: 'bg-amber-600 hover:bg-amber-700',
          dotActive: 'bg-amber-500',
          ringColor: 'ring-amber-400'
        };
      default: // blue
        return {
          textColor: 'text-blue-400',
          bgColor: 'bg-blue-400',
          shadowColor: 'shadow-blue-500/50',
          buttonColor: 'bg-blue-600 hover:bg-blue-700',
          dotActive: 'bg-blue-500',
          ringColor: 'ring-blue-400'
        };
    }
  };

  // People counter component with enhanced animation
  const PeopleCounter = () => {
    return (
      <div className="flex items-center bg-white/30 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-2 mt-2 md:mt-4 mb-3 md:mb-6 shadow-lg border border-white/20 transform transition-all duration-500 hover:scale-105 hover:bg-white/40 group">
        <div className="flex -space-x-2 md:-space-x-3 transition-all duration-300 group-hover:-space-x-1">
          <img 
            src={profile1} 
            alt="Community member" 
            className="w-6 h-6 md:w-10 md:h-10 rounded-full border-2 border-white object-cover shadow-md transition-all duration-300 group-hover:scale-110"
          />
          <img 
            src={profile2} 
            alt="Community member" 
            className="w-6 h-6 md:w-10 md:h-10 rounded-full border-2 border-white object-cover shadow-md transition-all duration-300 group-hover:scale-110"
          />
          <img 
            src={profile3} 
            alt="Community member" 
            className="w-6 h-6 md:w-10 md:h-10 rounded-full border-2 border-white object-cover shadow-md transition-all duration-300 group-hover:scale-110"
          />
        </div>
        <div className="ml-2 md:ml-3">
          <span className="text-white text-xs md:text-base font-semibold">3,94,000+ Associated Menmbers</span>
          <p className="text-xxs md:text-xs text-white/80">5000+ Online now</p>
        </div>
      </div>
    );
  };

  // Event Search Component for Slide 2
  const EventSearch = ({ accentColor }) => {
    const { buttonColor, ringColor } = getAccentColors(accentColor);
    
    // Handle search input change
    const handleSearchChange = (e) => {
      setSearchValue(e.target.value);
    };
    
    return (
      <div className="w-full max-w-xs md:max-w-md mx-auto mt-2 md:mt-4 mb-3 md:mb-6"
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
        <div className="relative">
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search events..."
            className={`w-3/4 pl-3 pr-10 md:pl-4 md:pr-12 py-2 md:py-3 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 text-white text-sm md:text-base placeholder-white/70 shadow-lg focus:outline-none focus:${ringColor} transition-all duration-300`}
          />
          <button className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${buttonColor} rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110`}>
            <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
        
        {/* Popular Searches */}
        <div className="flex flex-wrap gap-1 md:gap-2 mt-2 md:mt-3 justify-center">
          <span className="text-white/80 text-xs md:text-sm">Popular:</span>
          {slides[1].popularSearches.map((term, index) => (
            <button 
              key={index}
              onClick={() => setSearchValue(term)}
              className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-300 hover:scale-105 border border-white/30`}
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Interest Tags Component for Slide 3
  const InterestTags = ({ accentColor }) => {
    const { bgColor } = getAccentColors(accentColor);
    
    const toggleInterest = (interest) => {
      if (selectedInterests.includes(interest)) {
        setSelectedInterests(selectedInterests.filter(item => item !== interest));
      } else {
        setSelectedInterests([...selectedInterests, interest]);
      }
    };
    
    return (
      <div className="w-full max-w-xs md:max-w-md mx-auto mt-2 md:mt-4 mb-3 md:mb-6"
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
        <div className="text-center mb-1 md:mb-2">
          <span className="text-white/90 text-xs md:text-sm font-medium">Select your interests:</span>
        </div>
        <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
          {slides[2].interestTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => toggleInterest(tag)}
              className={`px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedInterests.includes(tag) 
                  ? `${bgColor} text-white shadow-lg` 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {tag}
              {selectedInterests.includes(tag) && (
                <span className="ml-1 md:ml-2 inline-flex items-center justify-center">✓</span>
              )}
            </button>
          ))}
        </div>
        {selectedInterests.length > 0 && (
          <div className="mt-1 md:mt-3 text-center">
            <span className="text-white/90 text-xs md:text-sm">{selectedInterests.length} interests selected</span>
          </div>
        )}
      </div>
    );
  };

  // Community Groups Component for Slide 4
  const CommunityGroups = ({ accentColor, groups }) => {
    const { buttonColor } = getAccentColors(accentColor);
    
    const toggleGroupExpansion = (groupName) => {
      if (expandedGroup === groupName) {
        setExpandedGroup(null);
      } else {
        setExpandedGroup(groupName);
      }
    };
    
    // Custom scrollbar styles added as inline CSS
    const scrollbarStyles = `
      .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: ${accentColor === 'amber' ? 'rgba(251, 191, 36, 0.7)' : 'rgba(255, 255, 255, 0.3)'};
        border-radius: 10px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: ${accentColor === 'amber' ? 'rgba(251, 191, 36, 0.9)' : 'rgba(255, 255, 255, 0.5)'};
      }
    `;
    
    return (
      <div className="w-full max-w-xs md:max-w-md mx-auto mt-2 md:mt-4 mb-3 md:mb-6"
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
        <style>{scrollbarStyles}</style>
        <div className="bg-black/30 backdrop-blur-md rounded-xl p-2 md:p-4 border border-white/20 shadow-xl">
          <h3 className="text-white text-sm md:text-base font-medium text-center mb-2 md:mb-3">Popular Communities</h3>
          <div className="space-y-1 md:space-y-2 max-h-32 md:max-h-48 overflow-y-auto custom-scrollbar">
            {groups.map((group, index) => (
              <div 
                key={index}
                className={`bg-white/10 rounded-lg p-2 md:p-3 cursor-pointer transition-all duration-300 hover:bg-white/20 border border-white/10 ${
                  expandedGroup === group.name ? 'shadow-lg' : ''
                }`}
                onClick={() => toggleGroupExpansion(group.name)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <span className="text-lg md:text-2xl">{group.icon}</span>
                    <div>
                      <h4 className="text-white text-xs md:text-base font-medium">{group.name}</h4>
                      <p className="text-white/70 text-xxs md:text-xs">{group.members} members</p>
                    </div>
                  </div>
                  <button className={`${buttonColor} rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110`}>
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </button>
                </div>
                
                {/* Expanded content */}
                {expandedGroup === group.name && (
                  <div className="mt-2 md:mt-3 pt-2 md:pt-3 border-t border-white/10 animate-fadeIn">
                    <p className="text-white/80 text-xs md:text-sm mb-1 md:mb-2">Join this group to connect with members and participate in events.</p>
                    <div className="flex justify-end">
                      <button className={`${buttonColor} text-white text-xs md:text-sm py-1 px-3 md:px-4 rounded-full shadow-md transition-all duration-300 hover:scale-105`}>
                        Join Group
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Button component with advanced hover effects
  const Button = ({ isSecondary, link, external, accentColor, children }) => {
    const { buttonColor } = getAccentColors(accentColor);
    
    const primaryButtonClass = `px-3 py-2 md:px-6 md:py-3 ${buttonColor} text-white font-semibold text-sm md:text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:translate-y-1 relative overflow-hidden group border-2 border-white/10`;
    
    const secondaryButtonClass = "px-3 py-2 md:px-6 md:py-3 bg-transparent border-2 border-white hover:bg-white/20 text-white font-semibold text-sm md:text-lg rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-y-1 relative overflow-hidden group";
    
    const buttonClass = isSecondary ? secondaryButtonClass : primaryButtonClass;
    
    // For external links
    if (external) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="relative">
          <button className={buttonClass}>
            <span className="relative z-10">{children}</span>
            <span className="absolute inset-0 bg-white/10 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
          </button>
        </a>
      );
    }
    
    // For internal links
    return (
      <Link to={link} className="relative">
        <button className={buttonClass}>
          <span className="relative z-10">{children}</span>
          <span className="absolute inset-0 bg-white/10 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
          {!isSecondary && (
            <>
              <span className="absolute h-1 w-1 rounded-full bg-white/80 animate-ping top-2 left-2"></span>
              <span className="absolute h-1 w-1 rounded-full bg-white/80 animate-ping bottom-2 right-2 animation-delay-500"></span>
            </>
          )}
        </button>
      </Link>
    );
  };

  // Floating 3D decoration elements
  const DecoElements = ({ index, accentColor }) => {
    const { bgColor } = getAccentColors(accentColor);
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative floating elements */}
        <div 
          className={`absolute w-12 h-12 md:w-24 md:h-24 ${bgColor} rounded-full opacity-20 blur-xl`}
          style={{ 
            top: '20%', 
            left: '10%',
            transform: index === currentSlide ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(-50px, -30px, 0) scale(0.8)',
            transition: 'transform 1.5s ease-out',
          }}
        ></div>
        <div 
          className={`absolute w-16 h-16 md:w-32 md:h-32 ${bgColor} rounded-full opacity-20 blur-xl`}
          style={{ 
            bottom: '30%', 
            right: '15%',
            transform: index === currentSlide ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(50px, 30px, 0) scale(0.8)',
            transition: 'transform 1.8s ease-out',
          }}
        ></div>
        <div 
          className={`absolute w-8 h-8 md:w-16 md:h-16 ${bgColor} rounded-full opacity-20 blur-xl`}
          style={{ 
            top: '60%', 
            left: '20%',
            transform: index === currentSlide ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(-20px, 40px, 0) scale(0.8)',
            transition: 'transform 2s ease-out',
          }}
        ></div>
      </div>
    );
  };

  return (
    <div className="max-w-full mx-auto px-0 md:px-4 py-0 md:py-8 pt-16 md:pt-20 overflow-hidden">
      <div 
        ref={heroRef}
        className="relative w-full h-[550px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[750px] rounded-none md:rounded-xl overflow-hidden shadow-2xl perspective-1000"
      >
        {/* Animated background gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-gradient-x z-0"></div>
        
        {/* Slides with 3D effect */}
        {slides.map((slide, index) => {
          const { textColor, bgColor, shadowColor } = getAccentColors(slide.accentColor);
          
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                index === currentSlide ? "opacity-100 translate-x-0 rotate-0 scale-100" : 
                index < currentSlide ? "opacity-0 -translate-x-full rotate-3 scale-95" : "opacity-0 translate-x-full -rotate-3 scale-95"
              }`}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  className={`w-full h-full object-cover transition-transform duration-10000 ${
                    index === currentSlide ? "scale-110" : "scale-100"
                  }`}
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
              
              {/* Custom overlay with gradient */}
              <div className={`absolute inset-0 ${slide.bgColor} flex flex-col justify-center items-center text-center text-white px-4 md:px-6 overflow-hidden`}>
                {/* Design elements */}
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Decorative elements */}
                <DecoElements index={index} accentColor={slide.accentColor} />
                
                {/* Content container with better spacing */}
                <div 
                  className={`transform transition-all duration-700 delay-300 mx-auto max-w-4xl px-4 md:px-8 relative z-10 ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  {/* Glowing accent element */}
                  <div className={`w-16 h-1 md:w-24 md:h-1 mx-auto ${bgColor} mb-3 md:mb-6 rounded-full opacity-80 shadow-lg ${shadowColor}`}></div>
                  
                  {/* Title with responsive font sizes */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-shadow-lg">
                    {slide.title} <br className="md:hidden" />
                    <span className={`${textColor} relative`}>
                      {slide.titleSpan}
                      <span className={`absolute bottom-0 left-0 w-full h-1 ${bgColor} transform scale-x-0 transition-transform duration-700 origin-left delay-700`} style={{ 
                        transform: index === currentSlide ? 'scaleX(1)' : 'scaleX(0)' 
                      }}></span>
                    </span>
                  </h1>
                  
                  {/* Description with responsive font sizes */}
                  <p className="mt-2 md:mt-4 mb-3 md:mb-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-shadow-sm">
                    {slide.description}
                  </p>
                  
                  {/* Interactive elements section with better spacing */}
                  <div className="flex flex-col items-center justify-center">
                    {/* People Counter - Only shown on the first slide */}
                    {slide.showPeopleCounter && index === currentSlide && (
                      <div className={`transform transition-all duration-700 delay-500 ${
                        index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}>
                        <PeopleCounter />
                      </div>
                    )}
                    
                    {/* Event Search - Only shown on slide 2 */}
                    {slide.showEventSearch && index === currentSlide && (
                      <div className={`transform transition-all duration-700 delay-500 ${
                        index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}>
                        <EventSearch accentColor={slide.accentColor} />
                      </div>
                    )}
                    
                    {/* Interest Tags - Only shown on slide 3 */}
                    {slide.showInterestTags && index === currentSlide && (
                      <div className={`transform transition-all duration-700 delay-500 ${
                        index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}>
                        <InterestTags accentColor={slide.accentColor} />
                      </div>
                    )}
                    
                    {/* Community Groups - Only shown on slide 4 */}
                    {slide.showCommunityGroups && index === currentSlide && (
                      <div className={`transform transition-all duration-700 delay-500 ${
                        index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}>
                        <CommunityGroups accentColor={slide.accentColor} groups={slide.communityGroups} />
                      </div>
                    )}
                  </div>
                  
                  {/* Only show buttons if showButtons is true */}
                  {slide.showButtons && (
                    <div className={`flex flex-row gap-2 md:gap-4 justify-center transform transition-all duration-700 delay-700 mt-2 md:mt-4 ${
                      index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}>
                      <Button 
                        link={slide.buttonPrimary?.link || "#"} 
                        external={slide.buttonPrimary?.external}
                        accentColor={slide.accentColor}
                      >
                        {slide.buttonPrimary?.text || "Explore"}
                      </Button>
                      {slide.buttonSecondary && (
                        <Button 
                          isSecondary
                          link={slide.buttonSecondary.link}
                          external={slide.buttonSecondary.external}
                          accentColor={slide.accentColor}
                        >
                          {slide.buttonSecondary.text}
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Modified Navigation Arrows - With enhanced styling */}
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-2 sm:px-6 md:px-10 z-20 pointer-events-none">
          <button
            onClick={prevSlide}
            className="bg-black/30 hover:bg-blue-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm shadow-lg border border-white/10 pointer-events-auto hover:border-white/50 group"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-black/30 hover:bg-blue-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm shadow-lg border border-white/10 pointer-events-auto hover:border-white/50 group"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Enhanced Dots Indicator - With animation effects */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 shadow-lg hover:bg-black/40 transition-all duration-300">
          {slides.map((slide, index) => {
            const { dotActive } = getAccentColors(slide.accentColor);
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide 
                    ? `w-8 h-3 rounded-full ${dotActive} shadow-md shadow-${slide.accentColor}-500/50` 
                    : "w-3 h-3 rounded-full bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            );
          })}
        </div>

        {/* Progress bar at the top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-black/20 z-20">
          <div 
            className={`h-full ${getAccentColors(slides[currentSlide].accentColor).bgColor} origin-left`}
            style={{
              animation: `progress 7s linear ${isAnimating ? 'paused' : 'running'}`
            }}
          ></div>
        </div>
      </div>
      
      {/* Add a slide indicator */}
      <div className="hidden md:flex justify-center mt-4 text-gray-600 font-medium">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm shadow-sm">
          Slide {currentSlide + 1} of {slides.length}
        </span>
      </div>
    </div>
  );
};


export default Hero;