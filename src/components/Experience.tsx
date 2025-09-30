const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Swiedge Pvt Ltd",
      period: "Feb 2023 - Sept 2025",
      duration: "2.5 years",
      description: [
        "Developed and maintained full-stack web applications using React.js, Next.js, Node.js, and TypeScript",
        "Implemented responsive UI components and optimized frontend performance",
        "Built RESTful APIs and integrated with MongoDB database",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Mentored junior developers and conducted code reviews",
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
      type: "Full-time",
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance Projects",
      period: "2023-2025",
      duration: "2 years",
      description: [
        "Worked with multiple clients to design, develop, and deploy full-stack web applications",
        "Built responsive, user-friendly frontends with reusable UI components",
        "Developed secure and scalable backends with RESTful APIs",
        "Optimized database queries and implemented authentication systems",
        "Ensured cross-browser and cross-platform compatibility",
      ],
      technologies: ["React", "Express", "PostgreSQL", "Firebase", "AWS"],
      type: "Freelance",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-[#4F46E5]">Journey</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            A timeline of my professional growth and contributions across
            various roles and projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#2A2A2A] hover:border-[#4F46E5]/50 transition-all duration-500 h-full"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/5 via-transparent to-[#F43F5E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Header Section */}
              <div className="p-6 border-b border-[#2A2A2A] relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                        exp.type === "Full-time"
                          ? "bg-[#4F46E5]/20 text-[#4F46E5] border border-[#4F46E5]/30"
                          : exp.type === "Freelance"
                          ? "bg-[#F43F5E]/20 text-[#F43F5E] border border-[#F43F5E]/30"
                          : "bg-[#4F46E5]/20 text-[#4F46E5] border border-[#4F46E5]/30"
                      }`}
                    >
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-[#4F46E5] group-hover:text-[#4F46E5] transition-all duration-300">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-[#EAEAEA] mt-1 font-semibold">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[#4F46E5] text-sm font-medium bg-[#4F46E5]/10 px-3 py-1 rounded-full border border-[#4F46E5]/20">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-[#B0B0B0]">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#4F46E5] rounded-full"></div>
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description Section */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start text-[#B0B0B0] group-hover:text-[#EAEAEA] transition-colors duration-300"
                    >
                      <span className="text-[#4F46E5] mr-3 mt-1.5 flex-shrink-0">
                        ▶
                      </span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="pt-4 border-t border-[#2A2A2A]">
                  <h5 className="text-[#B0B0B0] text-sm font-medium mb-3">
                    Key Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#1F1F1F] text-[#4F46E5] px-3 py-1.5 rounded-lg text-xs font-medium border border-[#2A2A2A] group-hover:border-[#4F46E5]/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4F46E5]/0 via-[#4F46E5]/5 to-[#F43F5E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Career Progress Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1A1A1A] px-6 py-3 rounded-2xl border border-[#2A2A2A]">
            <div className="w-3 h-3 bg-[#4F46E5] rounded-full animate-pulse"></div>
            <span className="text-[#B0B0B0] text-sm">
              Continuing to grow and take on new challenges
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
