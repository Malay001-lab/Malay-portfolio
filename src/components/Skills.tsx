"use client";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js / Next.js", level: 95 },
        { name: "TypeScript / JavaScript", level: 90 },
        { name: "HTML5 / CSS3 / Tailwind", level: 93 },
        { name: "Redux / State Management", level: 88 },
        { name: "Responsive UI / UX", level: 90 },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js / Express.js", level: 82 },
        { name: "RESTful APIs / GraphQL", level: 85 },
        { name: "MongoDB / MySQL", level: 78 },
        { name: "JWT Authentication", level: 87 },
        { name: "WebSocket / Real-time", level: 80 },
      ],
    },
    {
      title: "Tools & Methodology",
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "Docker / CI/CD", level: 78 },
        { name: "Agile / Scrum / Jira", level: 85 },
        { name: "Jest / React Testing", level: 83 },
        { name: "Performance Optimization", level: 89 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
          Technical <span className="text-gray-700">Skills</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-900 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-700">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-gray-700 to-gray-900 h-2 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Leadership & Additional Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-2xl mb-2">👥</div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Team Leadership
              </h4>
              <p className="text-gray-600 text-sm">
                Leading 4+ developer teams
              </p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold text-gray-900 mb-1">Performance</h4>
              <p className="text-gray-600 text-sm">25-30% optimization gains</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🔄</div>
              <h4 className="font-semibold text-gray-900 mb-1">Agile</h4>
              <p className="text-gray-600 text-sm">
                Scrum & Kanban methodologies
              </p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-semibold text-gray-900 mb-1">Mentoring</h4>
              <p className="text-gray-600 text-sm">Junior developer growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
