// Projects Page Component
import geonotes_img from "../../assets/projects/geonotes.jpg";
import weather_forecast_img from "../../assets/projects/weather_forecast.jpg";
import german_traffic_sign_img from "../../assets/projects/german_traffic_sign.jpg";
import care_scheduling_img from "../../assets/projects/care_scheduling.jpg";
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
      devpost: "https://devpost.com/software/geonotes-woy4ix#updates",
      image: geonotes_img,
    },
    {
      title: "Care Scheduling Program",
      description:
        "A program that helps family members take care of their loved ones.",
      techStack: ["Node.js", "Express", "React", "MongoDB"],
      github: "https://github.com",
      demo: "https://scheduling-of-care-aba0b844abd1.herokuapp.com/",
      image: care_scheduling_img,
    },
    {
      title: "Weather Forecast",
      description:
        "Checking the 6-Day weather forecast of all the cities around the globe.",
      techStack: ["jQuery", "HTML/CSS", "OpenWeather API"],
      github: "https://github.com/chimdienn/WeatherForecast",
      demo: "https://chimdienn.github.io/WeatherForecast/",
      image: weather_forecast_img,
    },
    {
      title: "German Traffic Sign Classifier",
      description:
        "Classify German traffic signs into 43 categories using deep learning.",
      techStack: ["Python", "sklearn", "tensorflow", "keras"],
      github: "https://github.com/chimdienn/TrafficSignClassification",
      image: german_traffic_sign_img,
    },
  ];

  const minorProjects = [
    {
      title: "Shadow Taxi",
      description:
        "A 'Driving Taxi' fun, interactive game built in Java using Bagel Game Engine.",
      github: "https://github.com/chimdienn/ShadowTaxi",
    },
    {
      title: "To My Valentine",
      description:
        "A valentine gift for my beloved - with cute animations and romantic confessions.",
      github: "https://github.com",
    },
    {
      title: "Birthday Simon",
      description:
        "A memory game where players repeat a sequence of colors and sounds. Happy birthday! 🎉",
      github: "https://github.com/chimdienn/birthday_simon_game",
    },
  ];

  return (
    <div className="pt-32 fade-in pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-5xl font-bold gradient-text mb-6 pb-4">Projects</h1>
        <p className="text-gray-400 text-lg mb-8">
          I am so proud of these wonders. Have a peek!
        </p>

        {/* Main Projects */}
        <div className="space-y-8 mb-16">
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
                <div className="h-64 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer overflow-hidden">
                  {typeof project.image === "string" &&
                  project.image.length <= 2 ? (
                    // Display emoji if it's a short string (emoji)
                    <span className="text-8xl">{project.image}</span>
                  ) : (
                    // Display actual image
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </a>

              {/* Project Details */}
              <div className="flex-1 p-6 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-1.5 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-300 uppercase tracking-wide"
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
                      DEVPOST
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minor Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Other Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {minorProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-sm uppercase tracking-wide"
                >
                  <i className="fab fa-github mr-2"></i>View Code
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-700 hover:border-purple-500 transition-all duration-300 text-center">
            <div className="text-6xl mb-4">🎨✨</div>
            <h3 className="text-2xl font-bold mb-4">
              Oh wait. Did I miss something?...
            </h3>
            <p className="text-gray-300 text-lg mb-4 max-w-2xl mx-auto">
              This portfolio website we're browsing right now? Yasss, that's
              actually one of my favorite projects! Powered by Express, built
              with React and beautified by TailwindCSS. Ah, supported by a bunch
              of coffee, too! ☕
            </p>
            <p className="text-gray-400 text-sm italic">
              A project showcasing projects? Projectception. 🤯
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
