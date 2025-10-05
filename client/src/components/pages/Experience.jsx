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

export default Experience;
