const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3/Tailwind", level: 90 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "RESTful APIs", level: 90 },
        { name: "Authentication", level: 85 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 88 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 75 },
        { name: "Responsive Design", level: 90 },
      ],
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Technical <span className="text-[#4F46E5]">Skills</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A] hover:border-[#4F46E5]/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#4F46E5] mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#EAEAEA]">{skill.name}</span>
                      <span className="text-[#4F46E5]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#2A2A2A] rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#4F46E5] to-[#F43F5E] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
