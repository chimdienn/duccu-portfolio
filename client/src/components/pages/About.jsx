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

export default About;
