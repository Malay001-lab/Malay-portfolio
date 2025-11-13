"use client";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer & Team Lead",
      company: "MicraSquare",
      period: "March 2023 – Present",
      duration: "2.8 years",
      description: [
        "Lead a team of 4 frontend developers, driving successful delivery of high-quality web applications that improved user engagement by 20%",
        "Spearheaded the transition to modern frontend frameworks, reducing development time by 30% and enhancing application performance",
        "Mentored junior developers, fostering skill growth and increasing team productivity by 25%",
        "Collaborated cross-functionally with design and backend teams to implement scalable solutions that supported business growth objectives",
        "Architected and implemented scalable React.js and Next.js applications with TypeScript and modern state management",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Redux",
        "Tailwind CSS",
        "MongoDB",
        "Team Leadership",
        "Agile Methodology",
      ],
      type: "Full-time",
      achievements: [
        "20% engagement boost",
        "30% faster development",
        "25% team productivity",
        "4 developers led",
      ],
    },
    {
      title: "Associate Frontend Developer",
      company: "SwiftEdge Pvt Ltd",
      period: "May 2022 – Feb 2023",
      duration: "10 months",
      description: [
        "Assisted in frontend development for client projects using React.js, TypeScript, and Tailwind CSS, contributing to a 25% increase in user engagement",
        "Collaborated with backend teams to support REST API integration, helping to reduce project delivery timelines by 15%",
        "Optimized frontend load times by 30%, improving accessibility and boosting user satisfaction scores by 20%",
        "Participated in code reviews and shared best practices, aiding an 18% reduction in bugs and enhancing team quality standards",
        "Developed dynamic, responsive UI components and integrated backend APIs for various client applications",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Tailwind CSS",
        "REST APIs",
        "JavaScript",
        "Responsive Design",
      ],
      type: "Full-time",
      achievements: [
        "25% engagement increase",
        "30% performance gain",
        "18% bug reduction",
        "15% faster delivery",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Professional <span className="text-gray-700">Experience</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My journey through impactful roles, team leadership, and product
            innovation that delivers measurable business results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 transition-all duration-300 h-full shadow-sm hover:shadow-md"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-300">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-gray-700">{exp.company}</h4>
                  </div>
                  <span className="text-gray-700 text-sm bg-gray-100 px-3 py-1 rounded-full border border-gray-300">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{exp.period}</p>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {exp.description.map((line, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 leading-relaxed"
                    >
                      • {line}
                    </li>
                  ))}
                </ul>

                {/* Achievements */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Achievements:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="bg-gray-50 text-gray-700 text-xs px-3 py-1 rounded-lg border border-gray-200"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-lg border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"></div>
            <span className="text-gray-600 text-sm">
              Continuously evolving through leadership challenges and technical
              innovation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
