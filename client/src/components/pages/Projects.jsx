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
export default Projects;
