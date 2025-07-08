/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useScroll, useMotionValueEvent, useMotionValue } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import profile from "../assets/profile.jpg";

const Hero: React.FC = () => {
  const [displayedRole, setDisplayedRole] = useState<string>("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const heroRef = useRef<HTMLElement | null>(null);
  const prevScrollY = useMotionValue(0);

  const roles: string[] = ["Web Developer", "Backend Developer Java", "Front-End Developer", "Fullstack Developer"];
  const typingSpeed: number = 100;
  const pauseDuration: number = 1500;

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const current = latest;
    const previous = prevScrollY.get();

    if (current > previous && current > 100) {
      setIsVisible(false);
    } else if (current < previous - 5) {
      setIsVisible(true);
    }

    prevScrollY.set(current);
  });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentRole = roles[currentRoleIndex];

    if (isTyping) {
      if (displayedRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      if (displayedRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedRole(displayedRole.substring(0, displayedRole.length - 1));
        }, typingSpeed / 2);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, currentRoleIndex, isTyping]);

  return (
    <motion.section
      ref={heroRef}
      id="hero"
      className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -50,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-60 items-center">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              className="text-blue-500 block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Arya Segara
            </motion.span>
          </motion.h1>

          <motion.div
            className="h-12 mb-4 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.h2
              className="text-xl md:text-2xl font-semibold text-blue-400 min-h-[2.5rem] flex items-center"
              key={currentRoleIndex}
            >
              {displayedRole}
              <motion.span
                className={`ml-1 inline-block w-1 h-6 bg-cyan-400 ${
                  !isTyping &&
                  displayedRole.length === roles[currentRoleIndex].length
                    ? "opacity-0"
                    : ""
                }`}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-gray-400 mb-8 max-w-md mx-auto md:mx-0">
              {"As a web developer, I am an expert in backend and frontend. I use React to create interactive UIs and Springboot and Node.js to build APIs. which uses MySQL, PostgreSQL, MariaDb and MongoDb databases.".split(
                " "
              ).map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8 + i * 0.03,
                    duration: 0.5,
                  }}
                  style={{ display: "inline-block", marginRight: "4px" }}
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-300 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.25)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 100, rotate: 20 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <div className="relative">
            <motion.img
              src={profile}
              alt="Arya Segara"
              className="rounded-full border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/25 w-64 h-64 md:w-80 md:h-80 object-cover"
              animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl -z-10"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: [0.3, 0.5, 0.3] }}
              transition={{
                delay: 0.7,
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;