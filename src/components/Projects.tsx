// components/Projects.tsx
"use client";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Enterprise E-Commerce Platform",
      description:
        "Led frontend development for a scalable e-commerce platform with secure JWT authentication, dynamic admin panel, and real-time order tracking. Implemented performance optimizations that increased user engagement by 30% and reduced order processing time by 25%.",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "JWT",
        "WebSocket",
        "REST APIs",
        "Jest",
        "React Testing Library",
      ],
      category: "Company Project",
      status: "Completed",
      achievements: [
        "30% increase in user engagement",
        "25% faster order processing",
        "40% reduction in bugs",
      ],
      features: [
        "Secure authentication",
        "Real-time tracking",
        "Admin dashboard",
        "Performance optimized",
      ],
    },
    {
      title: "Real Estate Analytics Dashboard",
      description:
        "Architected a server-side rendered dashboard using Next.js for real-time property analytics serving 5,000+ users. Integrated WebSocket for live data streaming and Chart.js for dynamic visualizations, boosting rendering performance by 25%.",
      technologies: [
        "Next.js",
        "React.js",
        "Redux",
        "Chart.js",
        "WebSocket",
        "REST APIs",
      ],
      category: "Company Project",
      status: "Completed",
      achievements: [
        "40% increase in user engagement",
        "25% performance improvement",
        "5,000+ active users",
      ],
      features: [
        "Real-time analytics",
        "Data visualization",
        "SSR implementation",
        "Scalable architecture",
      ],
    },
    {
      title: "Import-Export Management System",
      description:
        "Developed end-to-end import/export tracking modules with real-time data integration from multiple shipping APIs. Enhanced application performance through advanced responsive design and code-splitting, resulting in 25% user adoption increase.",
      technologies: [
        "React.js",
        "TypeScript",
        "Redux",
        "REST APIs",
        "Docker",
        "Jest",
        "Webpack",
      ],
      category: "Client Project",
      status: "Completed",
      achievements: [
        "25% increase in user adoption",
        "15% reduction in data discrepancies",
        "99.9% system uptime",
      ],
      features: [
        "Multi-API integration",
        "Real-time tracking",
        "Data validation",
        "CI/CD pipeline",
      ],
    },
    {
      title: "Hotel Booking Platform",
      description:
        "Led frontend development of a full-stack hotel reservation system focusing on server-side rendering and dynamic UI. Implemented real-time room availability updates with WebSocket integration, improving initial page load speed by 25%.",
      technologies: [
        "Next.js",
        "React.js",
        "WebSocket",
        "JWT",
        "SSR",
        "Responsive Design",
      ],
      category: "Client Project",
      status: "Completed",
      achievements: [
        "25% faster page loads",
        "Real-time availability",
        "1,000+ monthly users",
        "30% faster transactions",
      ],
      features: [
        "Real-time booking",
        "SSR optimization",
        "Secure payments",
        "Mobile responsive",
      ],
    },
    {
      title: "CRM Dashboard",
      description:
        "Built a comprehensive CRM dashboard for lead management and real-time analytics visualization. Engineered dynamic UI elements with Chart.js and integrated RESTful APIs, enhancing sales team efficiency by 30% through actionable insights.",
      technologies: [
        "React.js",
        "TypeScript",
        "Chart.js",
        "Redux",
        "REST APIs",
        "JWT",
        "CSS Modules",
      ],
      category: "Client Project",
      status: "Completed",
      achievements: [
        "30% sales efficiency boost",
        "Real-time analytics",
        "Scalable components",
        "Automated workflows",
      ],
      features: [
        "Lead tracking",
        "Analytics dashboard",
        "Workflow automation",
        "Team collaboration",
      ],
    },
  ];

  const closeModal = () => setSelectedProject(null);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Project <span className="text-gray-700">Portfolio</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of impactful projects demonstrating full-stack expertise
            and measurable business results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

              <div>
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
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
