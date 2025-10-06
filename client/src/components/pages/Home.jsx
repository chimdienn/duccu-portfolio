// Home Page Component
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import "../../styles/home.css";

const Home = () => {
  const navigate = useNavigate();
  const roles = useMemo(
    () => ["Student", "Engineer", "Developer", "Gamer", "Procrastinator"],
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
    <div className="pt-24 fade-in">
      <div className="container mx-auto px-8">
        <div className="min-h-screen flex flex-col justify-center">
          <div className="text-3xl md:text-5xl mb-5 h-14 flex items-center">
            <span className="text-gray-300">I'm a </span>
            <span className="my-blue font-semibold ml-2 relative inline-flex items-center min-w-[180px] md:min-w-[250px]">
              <span>{displayText}</span>
              <span
                className={`cursor ${showCursor ? "opacity-100" : "opacity-0"}`}
              ></span>
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-12">
            <span className="gradient-text-wave">Quy Trong Duc Tran</span>{" "}
            <span className="my-blue">says hi!</span>
          </h1>

          <p className="text-2xl text-gray-300 mb-12 max-w-3xl">
            A full-stack builder who turns messy problems into smooth web
            applications. I care about performance, accessibility, digital
            experiences and shipping things users actually love.
          </p>

          <div className="gradient-border rounded-xl mb-16 max-w-2xl">
            <div className="gradient-border-inner p-6">
              <h2 className="text-2xl font-semibold mb-6">
                Ready to dive deeper? Without further ado...
              </h2>
              <button
                onClick={() => navigate("/about")}
                className="gradient-bg text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-medium"
              >
                Let's Go!
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/experience"
              className="group relative overflow-hidden bg-gray-900/80 rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-800"
            >
              {/* Background gradient - starts subtle, becomes vibrant on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-5 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative p-8 text-center">
                <i className="fas fa-briefcase text-4xl text-gray-500 group-hover:text-blue-400 transition-colors duration-500 mb-4 inline-block transform group-hover:scale-110"></i>
                <h3 className="text-2xl font-bold mb-2 text-gray-200 group-hover:text-white transition-colors duration-500">
                  Experience
                </h3>
                <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-500">
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
              <div className="relative p-8 text-center">
                <i className="fas fa-code text-4xl text-gray-500 group-hover:text-purple-400 transition-colors duration-500 mb-4 inline-block transform group-hover:scale-110"></i>
                <h3 className="text-2xl font-bold mb-2 text-gray-200 group-hover:text-white transition-colors duration-500">
                  Projects
                </h3>
                <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-500">
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
