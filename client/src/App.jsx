import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";

// Navbar Component
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
          Portfolio
        </Link>
        <div className="flex items-center space-x-8">
          <Link
            to="/about"
            className={`hover:text-purple-400 transition-colors ${
              location.pathname === "/about" ? "gradient-text" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/experience"
            className={`hover:text-purple-400 transition-colors ${
              location.pathname === "/experience" ? "gradient-text" : ""
            }`}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className={`hover:text-purple-400 transition-colors ${
              location.pathname === "/projects" ? "gradient-text" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`hover:text-purple-400 transition-colors ${
              location.pathname === "/contact" ? "gradient-text" : ""
            }`}
          >
            Contact
          </Link>
          <a
            href="https://drive.google.com/your-resume-link"
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

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-github text-2xl text-gray-400 hover:text-white"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-facebook text-2xl text-gray-400 hover:text-white"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-instagram text-2xl text-gray-400 hover:text-white"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-linkedin text-2xl text-gray-400 hover:text-white"></i>
            </a>
          </div>
          <h3 className="text-xl font-semibold mb-2">Quy Trong Duc Tran</h3>
          <p className="text-gray-400 text-sm">
            Copyright © 2025 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

// Home Page Component
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 fade-in">
      <div className="container mx-auto px-6">
        <div className="min-h-screen flex flex-col justify-center">
          <h1 className="text-6xl font-bold mb-6">
            Hello, I'm <span className="gradient-text">Quy Trong Duc Tran</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl">
            A passionate full-stack developer with expertise in creating elegant
            solutions to complex problems. I specialize in building modern web
            applications that deliver exceptional user experiences.
          </p>

          <div className="gradient-border rounded-lg mb-16 max-w-2xl">
            <div className="gradient-border-inner">
              <h2 className="text-2xl font-semibold mb-4">
                Interested? Find out more about my technical skills and
                background
              </h2>
              <button
                onClick={() => navigate("/about")}
                className="gradient-bg text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-medium"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/experience"
              className="card-hover bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 text-center"
            >
              <i className="fas fa-briefcase text-4xl gradient-text mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">Experience</h3>
              <p className="text-gray-400">
                Explore my professional journey and achievements
              </p>
            </Link>

            <Link
              to="/projects"
              className="card-hover bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 text-center"
            >
              <i className="fas fa-code text-4xl gradient-text mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">Projects</h3>
              <p className="text-gray-400">
                Discover my latest work and innovations
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Page Component
const About = () => {
  const techStacks = {
    Frontend: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    Backend: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
    Tools: ["Git", "Docker", "AWS", "CI/CD", "Jest"],
    Other: ["GraphQL", "REST APIs", "WebSockets", "MongoDB", "Redis"],
  };

  return (
    <div className="pt-32 fade-in">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold gradient-text mb-12 text-center">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="w-64 h-64 rounded-full gradient-bg p-1 flex-shrink-0">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <i className="fas fa-user text-6xl text-gray-600"></i>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate software engineer with over 5 years of experience
              in building scalable web applications. My journey in tech started
              with a curiosity about how things work on the internet, and has
              evolved into a career focused on creating meaningful digital
              experiences. I believe in writing clean, maintainable code and am
              constantly learning new technologies to stay at the forefront of
              web development. When I'm not coding, you can find me exploring
              new technologies, contributing to open source, or mentoring
              aspiring developers.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(techStacks).map(([category, skills]) => (
            <div
              key={category}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800"
            >
              <h3 className="text-xl font-semibold gradient-text mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Experience Page Component
const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      organization: "Tech Innovators Inc.",
      time: "2022 - Present",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40% through optimization",
      ],
    },
    {
      title: "Full Stack Developer",
      organization: "Digital Solutions Ltd.",
      time: "2020 - 2022",
      description: [
        "Developed RESTful APIs and React-based frontend applications",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with cross-functional teams in Agile environment",
      ],
    },
    {
      title: "Junior Developer",
      organization: "StartUp Hub",
      time: "2019 - 2020",
      description: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Participated in full software development lifecycle",
        "Contributed to open source projects and internal tools",
      ],
    },
  ];

  return (
    <div className="pt-32 fade-in">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold gradient-text mb-12 text-center">
          Experience
        </h1>

        <div className="carousel-container flex gap-6 pb-6 overflow-x-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800 card-hover"
            >
              <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
              <p className="text-purple-400 mb-2">{exp.organization}</p>
              <p className="text-gray-500 text-sm mb-4">{exp.time}</p>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-400 flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Projects Page Component
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      techStack: "React, Node.js, MongoDB, Stripe",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "🛍️",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates",
      techStack: "Vue.js, Express, PostgreSQL, Socket.io",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "📋",
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chatbot using natural language processing",
      techStack: "Python, TensorFlow, React, FastAPI",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "🤖",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring with beautiful visualizations",
      techStack: "React, D3.js, Node.js, OpenWeather API",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "🌤️",
    },
  ];

  return (
    <div className="pt-32 fade-in">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold gradient-text mb-12 text-center">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 card-hover"
            >
              <div className="h-48 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <p className="text-sm text-purple-400 mb-4">
                  <i className="fas fa-code mr-2"></i>
                  {project.techStack}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 border border-purple-600 rounded hover:bg-purple-600/20 transition-colors"
                  >
                    <i className="fab fa-github mr-2"></i>GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 gradient-bg rounded hover:opacity-90 transition-opacity"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Page Component
const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:your.email@example.com";
  };

  return (
    <div className="pt-32 fade-in">
      <div className="container mx-auto px-6">
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold gradient-text mb-12">
            Wanna get in touch?
          </h1>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-12 border border-gray-800 max-w-lg">
            <i className="fas fa-envelope text-6xl gradient-text mb-6"></i>
            <p className="text-2xl mb-8">your.email@example.com</p>

            <button
              onClick={handleEmailClick}
              className="gradient-bg text-white px-12 py-4 rounded-full hover:opacity-90 transition-opacity font-medium text-lg"
            >
              SAY HELLO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
