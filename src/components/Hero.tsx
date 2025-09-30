const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Malay <span className="text-[#4F46E5]">Kothadiya</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#EAEAEA] mb-8">
            Full-Stack Developer
          </h2>
          <p className="text-lg text-[#B0B0B0] mb-10 max-w-2xl mx-auto leading-relaxed">
            I build exceptional digital experiences with modern technologies
            like React.js, Node.js, Next.js, and TypeScript. Focused on creating
            scalable, user-friendly applications that solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-[#4F46E5]  text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-medium cursor-pointer"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer border border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5]/10 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A]">
              <div className="text-2xl md:text-3xl font-bold text-[#4F46E5]">
                2+
              </div>
              <div className="text-[#B0B0B0] text-sm">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A]">
              <div className="text-2xl md:text-3xl font-bold text-[#4F46E5]">
                15+
              </div>
              <div className="text-[#B0B0B0] text-sm">Projects Completed</div>
            </div>
            <div className="text-center p-4 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A]">
              <div className="text-2xl md:text-3xl font-bold text-[#4F46E5]">
                10+
              </div>
              <div className="text-[#B0B0B0] text-sm">Happy Clients</div>
            </div>
            <div className="text-center p-4 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A]">
              <div className="text-2xl md:text-3xl font-bold text-[#4F46E5]">
                5+
              </div>
              <div className="text-[#B0B0B0] text-sm">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
