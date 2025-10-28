// components/About.tsx
const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="relative z-10 p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
              About <span className="text-gray-700">Me</span>
            </h2>

            {/* Single Column Layout */}
            <div className="mx-auto space-y-8">
              {/* Main Description */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <p className="text-gray-700 text-lg leading-relaxed text-center mb-6">
                  I'm a passionate{" "}
                  <span className="font-semibold text-gray-900">
                    Senior Frontend Developer
                  </span>{" "}
                  specializing in modern web technologies. With expertise in{" "}
                  <span className="font-semibold">
                    React.js, Next.js, TypeScript, and Node.js
                  </span>
                  , I create seamless digital experiences that blend beautiful
                  design with robust functionality.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed text-center">
                  I thrive on transforming complex problems into elegant
                  solutions, writing clean, scalable code that stands the test
                  of time. Always learning and adapting to deliver exceptional
                  results that drive business growth and enhance user
                  experiences.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm">
                  <div className="text-2xl mb-3">⚡</div>
                  <h4 className="text-gray-900 font-semibold mb-2">Frontend</h4>
                  <p className="text-gray-600 text-sm">
                    React.js, Next.js, TypeScript, JavaScript, Tailwind CSS,
                    HTML5, CSS3, Redux, Chart.js
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm">
                  <div className="text-2xl mb-3">🚀</div>
                  <h4 className="text-gray-900 font-semibold mb-2">
                    Expertise
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Performance Optimization, Team Leadership, Agile
                    Methodology, CI/CD, Testing, Real-time Applications
                  </p>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Key Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      30%
                    </div>
                    <p className="text-gray-600">Increase in User Engagement</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      25%
                    </div>
                    <p className="text-gray-600">
                      Reduction in Page Load Times
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      40%
                    </div>
                    <p className="text-gray-600">Reduction in Bugs</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      20%
                    </div>
                    <p className="text-gray-600">
                      Increase in Team Productivity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
