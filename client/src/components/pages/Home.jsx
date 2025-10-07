// Home Page Component
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import "../../styles/home.css";

const Home = () => {
  const navigate = useNavigate();
  const roles = useMemo(
    () => ["a Student", "a Developer", "a Gamer", "a Procrastinator", "Duccu"],
    []
  );
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      // Typing animation
      const currentRole = roles[currentRoleIndex];
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80); // Typing speed
      } else {
        // Finished typing, wait before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500); // Wait time before deleting
      }
    } else {
      // Deleting animation
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50); // Deleting speed (faster than typing)
      } else {
        // Finished deleting, move to next role
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRoleIndex, roles]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Cursor blink speed

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="pt-20 md:pt-24 fade-in pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col justify-center pt-8 md:pt-20">
          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-5 h-10 md:h-14 flex items-center">
            <span className="text-gray-300">I'm </span>
            <span className="my-blue font-semibold ml-2 relative inline-flex items-center min-w-[140px] sm:min-w-[160px] md:min-w-[250px]">
              <span>{displayText}</span>
              <span
                className={`cursor ${showCursor ? "opacity-100" : "opacity-0"}`}
              ></span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-12">
            <span className="gradient-text-wave">Quy Trong Duc Tran</span>{" "}
            <span className="my-blue">says hi!</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl">
            A full-stack builder who turns messy problems into smooth web
            applications. I care about performance, accessibility, digital
            experiences and shipping things users actually love.
          </p>

          <div className="gradient-border rounded-xl mb-10 md:mb-16 max-w-2xl">
            <div className="gradient-border-inner p-4 md:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Ready to dive deeper? Without further ado...
              </h2>
              <button
                onClick={() => navigate("/about")}
                className="gradient-bg text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-sm md:text-base"
              >
                Let's Go!
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Link
              to="/experience"
              className="group relative overflow-hidden bg-gray-900/80 rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-800"
            >
              {/* Background gradient - starts subtle, becomes vibrant on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-5 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative p-6 md:p-8 text-center">
                <i className="fas fa-briefcase text-3xl md:text-4xl text-gray-500 group-hover:text-blue-400 transition-colors duration-500 mb-3 md:mb-4 inline-block transform group-hover:scale-110"></i>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-200 group-hover:text-white transition-colors duration-500">
                  Experience
                </h3>
                <p className="text-sm md:text-base text-gray-500 group-hover:text-gray-300 transition-colors duration-500">
                  Explore my professional journey and achievements
                </p>
              </div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-lg transition-all duration-500"></div>
            </Link>

            <Link
              to="/projects"
              className="group relative overflow-hidden bg-gray-900/80 rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-800"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 opacity-5 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative p-6 md:p-8 text-center">
                <i className="fas fa-code text-3xl md:text-4xl text-gray-500 group-hover:text-purple-400 transition-colors duration-500 mb-3 md:mb-4 inline-block transform group-hover:scale-110"></i>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-200 group-hover:text-white transition-colors duration-500">
                  Projects
                </h3>
                <p className="text-sm md:text-base text-gray-500 group-hover:text-gray-300 transition-colors duration-500">
                  Discover my latest work and innovations
                </p>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-lg transition-all duration-500"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
