// Experience Page Component
import "../../styles/experience.css";
import ai_ds_cubed_logo from "../../assets/experience/ai_ds_cubed_logo.png";
import unimelb_logo from "../../assets/experience/unimelb_logo.svg";
import bws_logo from "../../assets/experience/bws_logo.jpeg";
import ivsum_logo from "../../assets/experience/ivsum_logo.png";

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer",
      organization: "AI @ DSCubed",
      logo: ai_ds_cubed_logo,
      techStack: ["python", "javascript", "postgresql"],
      time: "SEP 2025 - PRESENT",
      description: [
        "Contributed to a student engineering team to build an automonous AI agent",
        "Vision of creating an AI that independently pursues organizational goals",
      ],
    },
    {
      title: "Academic Tutor",
      organization:
        "School of Mathematics and Statistics, University of Melbourne",
      logo: unimelb_logo,
      techStack: ["mathematics", "matlab", "m-file"],
      time: "JUL 2025 - PRESENT",
      description: [
        "Delivered the MAST10007 Linear Algebra course to first-year university students",
        "Facilitated weekly computer lab workshops for approximately 40 undergraduate students",
        "Employed computational tools such as MATLAB, m-files, and GeoGebra applets",
        "Offered tailored support to students, contributing to their academic progress",
      ],
    },
    {
      title: "Web Developer Intern",
      organization: "Business Web Solutions",
      logo: bws_logo,
      techStack: ["python", "javascript", "html5", "css3", "postgresql", "git"],
      time: "APR 2025 - JUN 2020",
      description: [
        "Built over 20 real-world projects, mastering both front-end and back-end development",
        "Completed comprehensive assignments, enhancing practical skills and problem-solving abilities",
        "Managed project timelines independently while collaborating closely with team mentors",
      ],
    },
    {
      title: "Logistics Officer",
      organization:
        "Internation Vietnamese Student at The University of Melbourne (IVSUM)",
      logo: ivsum_logo,
      techStack: ["av-systems", "digital", "event-management", "logistics"],
      time: "SEP 2024 - SEP 2025",
      description: [
        "Planed and executed key activities, including Winter Camp and Music Night",
        "Provided digital support for events by setting up AV systems, online registration platforms, and digital check-in processes",
        "Fostered an inclusive and welcoming environment, interacting with students from diverse backgrounds",
      ],
    },
  ];

  // Tech stack icon mapping (using Font Awesome brand icons)
  const techIcons = {
    react: "fab fa-react",
    "node-js": "fab fa-node-js",
    python: "fab fa-python",
    javascript: "fab fa-js",
    java: "fab fa-java",
    c: "fas fa-code",
    cpp: "fas fa-code",
    html5: "fab fa-html5",
    css3: "fab fa-css3-alt",
    git: "fab fa-git-alt",
    aws: "fab fa-aws",
    docker: "fab fa-docker",
    postgresql: "fas fa-database",
    mysql: "fas fa-database",

    mathematics: "fas fa-square-root-alt",
    matlab: "fas fa-chart-line",
    "m-file": "fas fa-file-code",
    geogebra: "fas fa-shapes",

    logistics: "fas fa-truck-loading",
    "av-systems": "fas fa-video",
    digital: "fas fa-laptop",
    "event-management": "fas fa-calendar-check",
  };

  // Tech stack colors
  const techColors = {
    react: "text-cyan-400",
    "node-js": "text-green-500",
    python: "text-yellow-400",
    javascript: "text-yellow-300",
    java: "text-red-500",
    c: "text-blue-500",
    cpp: "text-blue-600",
    html5: "text-orange-500",
    css3: "text-blue-400",
    git: "text-orange-600",
    aws: "text-orange-400",
    docker: "text-blue-500",
    postgresql: "text-blue-600",
    mysql: "text-blue-500",

    mathematics: "text-indigo-400",
    matlab: "text-orange-500",
    "m-file": "text-gray-400",

    logistics: "text-green-400",
    "av-systems": "text-red-400",
    digital: "text-blue-400",
    "event-management": "text-purple-400",
  };

  return (
    <div className="pt-20 md:pt-32 fade-in pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-12 md:mb-20 text-center mt-6 md:mt4">
          E X P E R I E N C E
        </h1>

        <div className="carousel-container flex gap-4 md:gap-8 pb-6 md:pb-8 overflow-x-auto snap-x snap-mandatory px-4 md:px-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] min-w-[280px] md:min-w-[500px] max-w-[600px] bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-10 border border-gray-800 card-hover snap-center mx-auto"
              style={{ minHeight: "auto" }}
            >
              {/* Organization Logo */}
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-800 rounded-full flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={exp.organization}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Role Title */}
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white text-center md:text-left">
                {exp.title}
              </h2>

              {/* Organization Name */}
              <h3 className="text-base md:text-xl text-purple-400 mb-3 md:mb-4 text-center md:text-left">
                {exp.organization}
              </h3>

              {/* Tech Stack Icons */}
              <div className="flex gap-2 md:gap-3 mb-3 md:mb-4 flex-wrap justify-center md:justify-start">
                {exp.techStack.map((tech, i) => (
                  <div key={i} className="relative group">
                    <i
                      className={`${techIcons[tech]} text-xl md:text-2xl ${techColors[tech]} hover:scale-110 transition-transform cursor-pointer`}
                      title={tech.replace("-", " ").toUpperCase()}
                    ></i>
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                      {tech.replace("-", " ").toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Duration */}
              <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 flex items-center justify-center md:justify-start">
                <i className="far fa-calendar-alt mr-2"></i>
                {exp.time}
              </p>

              {/* Description Points */}
              <ul className="space-y-2 md:space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-purple-400 mr-2 md:mr-3 mt-1 md:mt-1.5 text-xs flex-shrink-0">
                      <i className="fas fa-chevron-right"></i>
                    </span>
                    <span className="text-xs md:text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6 md:mt-8">
          <p className="text-gray-500 text-xs md:text-sm flex items-center">
            <i className="fas fa-arrows-alt-h mr-2"></i>
            Scroll horizontally to see more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
