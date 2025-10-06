import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "navbar-blur py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          Duc Tran
        </Link>
        <div className="flex items-center space-x-8">
          <Link
            to="/about"
            className={`hover:text-purple-400 transition-colors ${
              location.pathname === "/about" ? "gradient-text-wave" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/experience"
            className={`hover:text-purple-400 transition-colors ${
              location.pathname === "/experience" ? "gradient-text-wave" : ""
            }`}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className={`hover:text-purple-400 transition-colors ${
              location.pathname === "/projects" ? "gradient-text-wave" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`hover:text-purple-400 transition-colors ${
              location.pathname === "/contact" ? "gradient-text-wave" : ""
            }`}
          >
            Contact
          </Link>
          <a
            href="https://drive.google.com/file/d/1VPvp0MteNPnZ1hToLpLstc5dp4FE_wIm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
