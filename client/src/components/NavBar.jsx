import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "navbar-blur py-4" : "pt-4 pb-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          Duc Tran
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
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
            className="gradient-bg text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-lg"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-gray-800 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ top: scrolled ? "72px" : "88px" }}
      >
        <div className="flex flex-col py-6 px-6 space-y-4">
          <Link
            to="/about"
            className={`text-lg hover:text-purple-400 transition-colors py-2 ${
              location.pathname === "/about" ? "gradient-text-wave" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/experience"
            className={`text-lg hover:text-purple-400 transition-colors py-2 ${
              location.pathname === "/experience" ? "gradient-text-wave" : ""
            }`}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className={`text-lg hover:text-purple-400 transition-colors py-2 ${
              location.pathname === "/projects" ? "gradient-text-wave" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`text-lg hover:text-purple-400 transition-colors py-2 ${
              location.pathname === "/contact" ? "gradient-text-wave" : ""
            }`}
          >
            Contact
          </Link>
          <a
            href="https://drive.google.com/file/d/1VPvp0MteNPnZ1hToLpLstc5dp4FE_wIm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity font-medium text-center mt-2"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
