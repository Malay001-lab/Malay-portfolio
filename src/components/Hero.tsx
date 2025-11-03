// components/Hero.tsx
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
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-700">MK</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            Malay <span className="text-gray-700">Kothadiya</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
            Senior Frontend Developer & Team Lead
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Results-driven Senior Frontend Developer with 2.5+ years of
            expertise in
            <span className="font-semibold text-gray-900">
              {" "}
              React.js, Next.js, and TypeScript
            </span>
            . Proven track record of leading developer teams and delivering
            scalable applications that increase engagement by 30% and optimize
            performance by 25%.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium"
            >
              My Experience
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">
                2.5+
              </div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">
                10+
              </div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">
                30%
              </div>
              <div className="text-gray-600 text-sm">Engagement Boost</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">
                4+
              </div>
              <div className="text-gray-600 text-sm">Team Members Led</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://github.com/Malay001-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/malay-kothadiya-9664a233b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:malaykothadiya555@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
