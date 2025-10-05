// About Page Component
import duccu_avatar from "../../assets/about/duccu.jpg";
const About = () => {
  const techStacks = {
    Frontend: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    Backend: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
    Tools: ["Git", "Docker", "AWS", "CI/CD", "Jest"],
    Other: ["GraphQL", "REST APIs", "WebSockets", "MongoDB", "Redis"],
  };

  return (
    <div className="pt-32 fade-in">
      <div className="container mx-auto px-12">
        <h1 className="text-5xl font-bold gradient-text mb-12 text-center">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-16 p-6">
          <div className="w-64 h-64 rounded-full gradient-bg p-1 flex-shrink-0">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <img
                src={duccu_avatar}
                alt="Quy Trong Duc Tran"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-xl text-gray-300 leading-relaxed mb-3 pr-12">
              Hello hello! I am <strong>Quy Trong Duc Tran</strong> — a
              Computing & Software Systems student at the University of
              Melbourne. I build full-stack web apps and am enthusiastic about
              enhancing digital infrastructure. I love hunting down elegant
              solutions to gnarly problems in algorithms, maths, and physics.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed pr-12">
              When I'm not deep in code, you'll find me at the gym, on the
              football pitch, tennis court, or badminton court—I'm competitive
              by nature. I also make time to explore new game releases and stay
              on top of what's pushing boundaries in tech.
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
