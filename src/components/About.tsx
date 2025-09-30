const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-[#1A1A1A] rounded-3xl border border-[#2A2A2A] overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/5 via-transparent to-[#F43F5E]/5"></div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

          <div className="relative z-10 p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              About <span className="text-[#4F46E5]">Me</span>
            </h2>

            {/* Single Column Layout */}
            <div className="mx-auto space-y-8">
              {/* Main Description */}
              <div className="bg-[#1F1F1F] backdrop-blur-sm rounded-2xl p-8 border border-[#2A2A2A]">
                <p className="text-[#B0B0B0] text-lg leading-relaxed text-center mb-6">
                  I&apos;m a passionate{" "}
                  <span className="text-[#4F46E5]">Full Stack Developer</span>{" "}
                  specializing in modern web technologies. With expertise in
                  React.js, Node.js, and Next.js, I create seamless digital
                  experiences that blend beautiful design with robust
                  functionality.
                </p>
                <p className="text-[#B0B0B0] text-lg leading-relaxed text-center">
                  I thrive on transforming complex problems into elegant
                  solutions, writing clean, scalable code that stands the test
                  of time. Always learning and adapting to deliver exceptional
                  results.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-[#1F1F1F] rounded-xl border border-[#2A2A2A] hover:border-[#4F46E5]/50 transition-all duration-300">
                  <div className="text-[#4F46E5] text-2xl mb-3">⚡</div>
                  <h4 className="text-[#4F46E5] font-semibold mb-2">
                    Frontend
                  </h4>
                  <p className="text-[#B0B0B0] text-sm">
                    React, Next.js, TypeScript, Tailwind
                  </p>
                </div>
                <div className="text-center p-6 bg-[#1F1F1F] rounded-xl border border-[#2A2A2A] hover:border-[#F43F5E]/50 transition-all duration-300">
                  <div className="text-[#F43F5E] text-2xl mb-3">🔧</div>
                  <h4 className="text-[#F43F5E] font-semibold mb-2">Backend</h4>
                  <p className="text-[#B0B0B0] text-sm">
                    Node.js, Express, MongoDB, REST APIs
                  </p>
                </div>
                <div className="text-center p-6 bg-[#1F1F1F] rounded-xl border border-[#2A2A2A] hover:border-[#4F46E5]/50 transition-all duration-300">
                  <div className="text-[#4F46E5] text-2xl mb-3">🛠️</div>
                  <h4 className="text-[#4F46E5] font-semibold mb-2">Tools</h4>
                  <p className="text-[#B0B0B0] text-sm">
                    Git, VS Code, Postman, Figma
                  </p>
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
