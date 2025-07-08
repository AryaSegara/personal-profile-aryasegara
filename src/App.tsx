import { useState, useEffect } from "react";
import { motion, AnimatePresence,type Variants } from "framer-motion";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

// 1. IMPOR DATA PROJECTS DARI FILE CONSTANTS
import { projects } from "./constants.ts"; // Pastikan path/jalur filenya sudah benar

// Loading Screen
const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full mx-auto mb-4"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-cyan-400 font-semibold"
        >
          Loading Portfolio...
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-48 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-4 mx-auto"
        />
      </div>
    </motion.div>
  );
};

// Scroll to Top
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Navigation Dots
const NavigationDots: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const sections: { id: string; label: string }[] = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "tech-stack", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (
            scrollPosition >= offsetTop - windowHeight / 2 &&
            scrollPosition < offsetBottom - windowHeight / 2
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to ${section.label} section`}
          >
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-cyan-500 border-cyan-500 shadow-lg shadow-cyan-500/50"
                  : "border-neutral-500 hover:border-cyan-400"
              }`}
            />
            <span className="absolute left-6 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-neutral-800 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-neutral-700">
              {section.label}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};


const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const pageVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const sectionVariants: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      <motion.div
        initial="initial"
        animate={!isLoading ? "animate" : "initial"}
        variants={pageVariants}
        className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"
      >
        {/* Enhanced Background */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [null, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Header />

          <motion.div id="hero" variants={sectionVariants}>
            <Hero />
          </motion.div>

          <motion.div id="about" variants={sectionVariants}>
            <About />
          </motion.div>

          <motion.div id="tech-stack" variants={sectionVariants}>
            <TechStack />
          </motion.div>

          <motion.div id="projects" variants={sectionVariants}>
            {/*  2. BERIKAN DATA 'projects' SEBAGAI PROP */}
            <Projects projects={projects} />
          </motion.div>

          <motion.footer
            variants={sectionVariants}
            className="border-t border-neutral-800 py-8 mt-20 text-center"
          >
            <p className="text-neutral-500">© 2025 Arya Segara</p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4"
            />
          </motion.footer>
        </div>

        <NavigationDots />
        <ScrollToTop />
      </motion.div>
    </>
  );
};

export default App;