// Projects Page Component
const Projects = () => {
  const projects = [
    {
      title: "GeoNotes",
      description:
        "Drop pins and add notes on a live, interactive map. Won the 'Best Overall' award at the Catylist Hackathon by CISSA.",
      techStack: [
        "Node.js",
        "MongoDB",
        "Google Maps API",
        "Macrostrat API",
        "PBDB API",
      ],
      github: "https://github.com/quangngz/GeoNotes",
      demo: "https://demo.com",
      devpost: "https://devpost.com/software/geonotes-woy4ix#updates",
      image: "🛍️",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates",
      techStack: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "📋",
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chatbot using natural language processing",
      techStack: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "🤖",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring with beautiful visualizations",
      techStack: ["React", "D3.js", "Node.js", "OpenWeather API"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "🌤️",
    },
  ];

  return (
    <div className="pt-32 fade-in">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-5xl font-bold gradient-text mb-6 pb-4">Projects</h1>
        <p className="text-gray-400 text-lg mb-8">
          Work I’m proud of - have a peek.
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 bg-gray-900/30 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              {/* Project Image */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-1/3 flex-shrink-0"
              >
                <div className="h-64 md:h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                  <span className="text-8xl">{project.image}</span>
                </div>
              </a>

              {/* Project Details */}
              <div className="flex-1 p-6 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-1.5 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors font-semibold uppercase tracking-wide"
                    >
                      <i className="fab fa-github mr-2"></i>GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition-opacity font-semibold uppercase tracking-wide"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.devpost && (
                    <a
                      href={project.devpost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition-opacity font-semibold uppercase tracking-wide"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
