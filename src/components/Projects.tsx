import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Enterprise E-Commerce Platform",
      description:
        "A comprehensive full-stack e-commerce solution with advanced features including product filtering, user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
      category: "Full Stack",
      status: "Completed",
    },
    {
      title: "Corporate Task Management System",
      description:
        "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics for enterprise use.",
      technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
      category: "Web Application",
      status: "Completed",
    },
    {
      title: "Real Estate Listing Platform",
      description:
        "A modern real estate platform with property listings, advanced search filters, agent profiles, and integrated contact management.",
      technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
      category: "Full Stack",
      status: "Completed",
    },
  ];

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project <span className="text-[#4F46E5]">Portfolio</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            A curated selection of professional projects showcasing expertise
            across various domains and technologies
          </p>
        </div>

        {/* Confidentiality Notice */}
        <div className="bg-[#1A1A1A] border border-[#4F46E5]/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="text-[#4F46E5] text-xl mt-1">🔒</div>
            <div>
              <h3 className="text-[#4F46E5] font-semibold text-lg mb-2">
                Project Confidentiality Notice
              </h3>
              <p className="text-[#B0B0B0] text-sm leading-relaxed">
                Due to client confidentiality agreements and company policies,
                detailed project information cannot be publicly disclosed.
                Contact me for detailed case studies.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#2A2A2A] hover:border-[#4F46E5]/50 transition-all duration-500 cursor-pointer h-full flex flex-col"
              onClick={() => setSelectedProject(index)}
            >
              {/* Header Section */}
              <div className="p-6 border-b border-[#2A2A2A] relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                        project.status === "Completed"
                          ? "bg-green-500/10 text-green-500 border border-green-500"
                          : "bg-[#F43F5E]/20 text-[#F43F5E] border border-[#F43F5E]/30"
                      }`}
                    >
                      {project.status}
                    </span>
                    <h3 className="text-xl font-bold text-[#4F46E5] group-hover:text-[#4F46E5] transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#4F46E5] text-sm font-medium bg-[#4F46E5]/10 px-3 py-1 rounded-full border border-[#4F46E5]/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10 flex-1 flex flex-col">
                <p className="text-[#B0B0B0] mb-4 text-sm leading-relaxed line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#1F1F1F] text-[#4F46E5] px-3 py-1.5 rounded-lg text-xs font-medium border border-[#2A2A2A] group-hover:border-[#4F46E5]/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Confidentiality Notice */}
                <div className="flex items-center gap-2 text-xs text-[#666666] border-t border-[#2A2A2A] pt-4 mt-auto">
                  <span className="group-hover:text-[#4F46E5] transition-colors duration-300">
                    🔒
                  </span>
                  <span className="group-hover:text-[#B0B0B0] transition-colors duration-300">
                    Click for details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div
              className="bg-[#1A1A1A] rounded-2xl border border-[#2A2A2A] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-[#2A2A2A] sticky top-0 bg-[#1A1A1A]">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          projects[selectedProject].status === "Completed"
                            ? "bg-[#4F46E5]/20 text-[#4F46E5] border border-[#4F46E5]/30"
                            : "bg-[#F43F5E]/20 text-[#F43F5E] border border-[#F43F5E]/30"
                        }`}
                      >
                        {projects[selectedProject].status}
                      </span>
                      <span className="bg-[#4F46E5]/20 text-[#4F46E5] px-3 py-1 rounded-full text-xs font-medium border border-[#4F46E5]/30">
                        {projects[selectedProject].category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#4F46E5]">
                      {projects[selectedProject].title}
                    </h3>
                    <p className="text-[#B0B0B0] mt-2 text-sm">
                      {projects[selectedProject].description}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-[#B0B0B0] hover:text-[#4F46E5] transition-colors duration-300 p-2 hover:bg-[#1F1F1F] rounded-lg ml-4 flex-shrink-0"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="bg-[#1F1F1F] rounded-lg p-4 border border-[#2A2A2A]">
                  <div className="flex items-center gap-3 text-sm text-[#B0B0B0]">
                    <span className="text-[#4F46E5]">🔒</span>
                    <span>
                      Detailed implementation and client-specific information
                      protected under NDA
                    </span>
                  </div>
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
