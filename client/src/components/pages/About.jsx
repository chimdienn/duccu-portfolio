import { useState } from "react";
import duccu_avatar from "../../assets/about/duccu.jpg";
import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiJest,
  SiHeroku,
  SiPostman,
} from "react-icons/si";

const About = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const techStacks = {
    Frontend: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
    ],
    Backend: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
    Other: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Heroku", icon: SiHeroku, color: "#430098" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
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
              Hello hello! I am <strong>Quy Trong Duc Tran</strong> - a
              Computing & Software Systems student at the University of
              Melbourne. I build full-stack web apps and am enthusiastic about
              enhancing digital infrastructure. I love hunting down elegant
              solutions to gnarly problems in computing, mathematics, and
              physics.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed pr-12">
              When I'm not deep in code, you'll find me at the gym, on the
              football pitch, tennis court, or badminton court—I'm competitive
              by nature. I also make time to explore new game releases and stay
              on top of what's pushing boundaries in technology.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">
          Technical Skills
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Some of the stacks I’ve been hands-on with lately:
        </p>

        {/* Tab Headers */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(techStacks).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-gray-900/50 text-gray-400 hover:bg-gray-800 border border-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {techStacks[activeCategory].map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-4 p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105"
              >
                <Icon size={64} style={{ color: tech.color }} />
                <span className="text-gray-300 font-medium">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
