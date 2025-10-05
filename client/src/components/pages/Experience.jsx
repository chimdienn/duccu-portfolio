// Experience Page Component
import "../../styles/experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      organization: "Tech Innovators Inc.",
      logo: "🏢", // Replace with actual logo URL/image
      techStack: ["react", "node-js", "python", "aws", "docker"],
      time: "Aug 2022 - Present",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40% through optimization",
        "Architected scalable cloud infrastructure on AWS",
      ],
    },
    {
      title: "Full Stack Developer",
      organization: "Digital Solutions Ltd.",
      logo: "💼", // Replace with actual logo URL/image
      techStack: ["javascript", "react", "java", "postgresql", "git"],
      time: "Jun 2020 - Jul 2022",
      description: [
        "Developed RESTful APIs and React-based frontend applications",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with cross-functional teams in Agile environment",
      ],
    },
    {
      title: "Junior Developer",
      organization: "StartUp Hub",
      logo: "🚀", // Replace with actual logo URL/image
      techStack: ["python", "javascript", "html5", "css3", "mysql"],
      time: "Sep 2019 - May 2020",
      description: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Participated in full software development lifecycle",
        "Contributed to open source projects and internal tools",
      ],
    },
    {
      title: "Software Engineering Intern",
      organization: "Innovation Labs",
      logo: "🔬", // Replace with actual logo URL/image
      techStack: ["c", "cpp", "python", "git"],
      time: "Jun 2019 - Aug 2019",
      description: [
        "Developed automation scripts to improve testing efficiency",
        "Assisted in debugging and optimizing legacy code",
        "Participated in code reviews and team meetings",
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
  };

  return (
    <div className="pt-32 fade-in">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold gradient-text mb-20 text-center">
          E X P E R I E N C E
        </h1>

        <div className="carousel-container flex gap-8 pb-8 overflow-x-auto snap-x snap-mandatory">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[45vw] min-w-[500px] max-w-[600px] bg-gray-900/50 backdrop-blur-sm rounded-xl p-10 border border-gray-800 card-hover snap-center"
              style={{ minHeight: "60vh" }}
            >
              {/* Organization Logo */}
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center text-4xl">
                  {exp.logo}
                  {/* Replace with actual image: 
                  <img src={exp.logo} alt={exp.organization} className="w-full h-full rounded-full object-cover" />
                  */}
                </div>
              </div>

              {/* Organization Name */}
              <h2 className="text-2xl font-bold mb-3 text-white">
                {exp.organization}
              </h2>

              {/* Role Title */}
              <h3 className="text-xl text-purple-400 mb-4">{exp.title}</h3>

              {/* Tech Stack Icons */}
              <div className="flex gap-3 mb-4 flex-wrap">
                {exp.techStack.map((tech, i) => (
                  <div key={i} className="relative group">
                    <i
                      className={`${techIcons[tech]} text-2xl ${techColors[tech]} hover:scale-110 transition-transform cursor-pointer`}
                      title={tech.replace("-", " ").toUpperCase()}
                    ></i>
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {tech.replace("-", " ").toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Duration */}
              <p className="text-gray-400 text-sm mb-6 flex items-center">
                <i className="far fa-calendar-alt mr-2"></i>
                {exp.time}
              </p>

              {/* Description Points */}
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-purple-400 mr-3 mt-1.5 text-xs">
                      <i className="fas fa-chevron-right"></i>
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8">
          <p className="text-gray-500 text-sm flex items-center">
            <i className="fas fa-arrows-alt-h mr-2"></i>
            Scroll horizontally to see more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
