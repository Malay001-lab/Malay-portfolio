import { useState, useEffect } from "react";

interface HeaderProps {
  activeComponent: string;
  setActiveComponent: (component: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  activeComponent,
  setActiveComponent,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setActiveComponent(sectionId);
    setIsMenuOpen(false);
  };

  const handleDownloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");

    // Path to your resume file in the public folder
    // Make sure to put your resume.pdf file in the public folder
    link.href = "/malay kothadiya.pdf";

    // This will force download with the specified filename
    link.download = "Malay_Kothadiya_Resume.pdf";

    // Append to the document, trigger click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#121212]/95 backdrop-blur-md border-b border-[#4F46E5]/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Side - Logo and Resume Button */}
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold text-[#4F46E5]">MK</div>

          {/* Resume Download Button - Desktop */}
          <button
            onClick={handleDownloadResume}
            className="cursor-pointer hidden md:flex items-center space-x-2 bg-transparent hover:bg-indigo-700/10 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm font-medium"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download Resume</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition-all duration-300 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                activeComponent === item.id
                  ? "text-[#4F46E5] bg-[#4F46E5]/10"
                  : "text-[#EAEAEA] hover:text-[#4F46E5] hover:bg-[#4F46E5]/5"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#EAEAEA] p-2 hover:bg-[#4F46E5]/10 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#121212]/95 backdrop-blur-md border-t border-[#4F46E5]/30 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            {/* Resume Download Button - Mobile */}
            <button
              onClick={handleDownloadResume}
              className="flex items-center justify-center space-x-2 bg-[#4F46E5] hover:bg-[#F43F5E] text-white px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium mb-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Download Resume</span>
            </button>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left transition-all duration-300 px-4 py-3 rounded-lg text-sm font-medium ${
                  activeComponent === item.id
                    ? "text-[#4F46E5] bg-[#4F46E5]/10"
                    : "text-[#EAEAEA] hover:text-[#4F46E5] hover:bg-[#4F46E5]/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
