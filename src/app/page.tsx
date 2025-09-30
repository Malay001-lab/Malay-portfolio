"use client";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

declare global {
  interface Window {
    scrollTimer: NodeJS.Timeout;
  }
}

type ActiveComponent =
  | "home"
  | "about"
  | "experience"
  | "skills"
  | "projects"
  | "contact";

export default function Home() {
  const [activeComponent, setActiveComponent] =
    useState<ActiveComponent>("home");
  const [, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset + 100; // Offset for better visibility

      let currentSection: ActiveComponent = "home";

      // Find the section that's currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop) {
          currentSection = section.id as ActiveComponent;
          break;
        }
      }

      setActiveComponent(currentSection);
      ticking = false;
    };

    const handleScroll = () => {
      setIsScrolling(true);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Throttle scroll events for performance
      if (!ticking) {
        requestAnimationFrame(updateActiveSection);
        ticking = true;
      }

      // Set timeout to clear scrolling state
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    // Initial check on mount
    updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-[#EAEAEA]">
      <Head>
        <title>Malay Kothadiya | Full-Stack Developer</title>
        <meta
          name="description"
          content="Full-Stack Developer specializing in React.js, Node.js, and Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        activeComponent={activeComponent}
        setActiveComponent={(component) =>
          setActiveComponent(component as ActiveComponent)
        }
      />

      <main className="relative">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
