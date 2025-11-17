"use client";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Led the complete frontend architecture and development of a scalable, enterprise-level e-commerce platform with secure authentication, real-time interactivity, and optimized performance through modular, reusable components and modern UI design.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Jest",
        "React Testing Library",
        "JWT Authentication",
        "WebSocket",
      ],
      category: "Company Project",
      status: "Completed",
      achievements: [
        "Scalable enterprise-level architecture",
        "Secure authentication system",
        "Real-time interactivity",
        "Optimized performance",
      ],
      features: [
        "Modular reusable components",
        "Modern UI design",
        "Secure authentication",
        "Real-time features",
      ],
      tools: ["Agile", "Jira"],
    },
    {
      title: "Real-Estate Property Management System",
      description:
        "Directed the frontend development of a dynamic, server-side rendered Real Estate Analytics Dashboard built with Next.js, enabling real-time property performance tracking and market insights. Focused on creating a scalable, SEO-friendly, and high-performing interface through efficient state management, modular architecture, and seamless team collaboration.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Redux",
        "WebSocket",
        "Chart.js",
        "Tailwind CSS",
      ],
      category: "Company Project",
      status: "Completed",
      achievements: [
        "Real-time property performance tracking",
        "Market insights dashboard",
        "SEO-friendly interface",
        "High-performing application",
      ],
      features: [
        "Server-side rendering",
        "Efficient state management",
        "Modular architecture",
        "Team collaboration",
      ],
    },
    {
      title: "Stock-Management System",
      description:
        "Developed a robust Stock Management System focused on real-time inventory control, seamless order tracking, and data accuracy. Implemented efficient UI components, dynamic dashboards, and role-based access to enhance stock visibility and streamline warehouse operations.",
      technologies: [
        "React.js",
        "JavaScript",
        "Context API",
        "D3.js",
        "Axios",
        "React Testing Library",
      ],
      category: "Client Project",
      status: "Completed",
      achievements: [
        "Real-time inventory control",
        "Seamless order tracking",
        "Enhanced data accuracy",
        "Streamlined warehouse operations",
      ],
      features: [
        "Efficient UI components",
        "Dynamic dashboards",
        "Role-based access control",
        "Stock visibility enhancement",
      ],
    },
    {
      title: "Hotel-Booking Platform",
      description:
        "Developed the frontend of a Hotel Reservation System focused on real-time room availability, booking management, and smooth user interaction. Implemented dynamic search filters, interactive booking calendars, and responsive dashboards to enhance the overall user experience and streamline hotel operations.",
      technologies: ["Next.js", "JavaScript", "Redux", "Axios"],
      category: "Client Project",
      status: "Completed",
      achievements: [
        "Real-time room availability",
        "Smooth booking management",
        "Enhanced user experience",
        "Streamlined hotel operations",
      ],
      features: [
        "Dynamic search filters",
        "Interactive booking calendars",
        "Responsive dashboards",
        "User-friendly interface",
      ],
    },
    {
      title: "Finance Management System",
      description:
        "Built a Finance Management System to track income, expenses, and budgets with real-time analytics, EMI and interest calculations, and interactive dashboards, providing a secure and intuitive platform for effective financial management.",
      technologies: [
        "React.js",
        "TypeScript",
        "Context API",
        "Fetch API",
        "Chart.js",
      ],
      category: "Client Project",
      status: "Completed",
      achievements: [
        "Real-time financial analytics",
        "EMI and interest calculations",
        "Interactive dashboards",
        "Secure financial platform",
      ],
      features: [
        "Income/expense tracking",
        "Budget management",
        "Interactive visualizations",
        "Secure platform",
      ],
    },
  ];

  const closeModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Project <span className="text-gray-700">Portfolio</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of projects demonstrating full-stack expertise and
            technical capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(index)}
              className="group bg-white border border-gray-200 hover:border-gray-400 rounded-2xl p-6 flex flex-col transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md h-full"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded border border-gray-300">
                  {project.category}
                </span>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded border border-green-300">
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm flex-1 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-lg border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-lg border border-gray-200">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div
              className="bg-white rounded-2xl border border-gray-200 max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
              >
                ✕
              </button>

              <div className="flex justify-between items-start mb-4 pr-3">
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-300">
                  {projects[selectedProject].category}
                </span>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full border border-green-300">
                  {projects[selectedProject].status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {projects[selectedProject].title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {projects[selectedProject].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {projects[selectedProject].achievements.map(
                      (achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-600 text-sm flex items-start"
                        >
                          <span className="text-green-500 mr-2">✓</span>
                          {achievement}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                  <ul className="space-y-2">
                    {projects[selectedProject].features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-gray-600 text-sm flex items-start"
                      >
                        <span className="text-gray-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-lg border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {projects[selectedProject].tools && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Tools & Methodologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tools.map((tool, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-700 text-xs px-3 py-1.5 rounded-lg border border-blue-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
