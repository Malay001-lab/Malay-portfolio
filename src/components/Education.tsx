"use client";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Application (External)",
      institution: "Bhagwan Mahavir University",
      period: "2023-2025",
      location: "Surat",
      status: "Completed",
      description:
        "Completed my Master of Computer Applications as an external student while working full-time as a Frontend Developer. This allowed me to balance professional responsibilities with academic growth, strengthening both my practical experience and technical foundation.",
      highlights: [
        "Balanced full-time work with academic studies",
        "Enhanced theoretical computer science knowledge",
        "Strengthened technical foundation alongside practical experience",
      ],
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Veer Narmad South Gujarat University",
      period: "2020-2023",
      location: "Surat",
      status: "Completed",
      description:
        "Focused on core computer science and software development concepts, including programming, database management, web technologies, and software engineering. Developed strong analytical, problem-solving, and project implementation skills through hands-on academic and real-world projects.",
      highlights: [
        "Core computer science fundamentals",
        "Software development concepts",
        "Database management & web technologies",
        "Analytical & problem-solving skills",
      ],
    },
    {
      degree: "Full-Stack Engineering",
      institution: "Creative Design & Multimedia Institute",
      period: "2021-2022",
      location: "Surat",
      status: "Completed",
      description:
        "Completed a comprehensive Full Stack Development course covering frontend and backend technologies, including React.js, Node.js, Express.js, and MongoDB. Gained hands-on experience in building end-to-end web applications, API integration, authentication, and deployment, enhancing my ability to deliver complete, production-ready solutions.",
      highlights: [
        "React.js, Node.js, Express.js, MongoDB",
        "End-to-end web application development",
        "API integration & authentication",
        "Production deployment",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Education & <span className="text-gray-700">Certifications</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Academic foundation and professional certifications that complement
            my practical experience
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200">
                      {edu.status}
                    </span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-300">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg text-gray-700 mb-1">
                    {edu.institution}
                  </h4>
                  <p className="text-gray-500 text-sm">{edu.location}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="bg-gray-50 text-gray-700 text-xs px-3 py-1.5 rounded-lg border border-gray-200"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Awards */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Awards & Recognition
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full border border-yellow-300 mb-2 sm:mb-0">
                  Development & Innovation Award
                </span>
                <span className="text-gray-500 text-sm">Feb 2025</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Issued by MicraSquare
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Recognized for exceptional innovation and technical excellence
                in frontend web development. Honored for building scalable,
                high-performance, and visually engaging user interfaces using
                modern technologies such as React.js, Next.js, and TypeScript.
                Commended for delivering clean, maintainable code, implementing
                best UI/UX practices, and demonstrating strong problem-solving
                skills in creating seamless digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
