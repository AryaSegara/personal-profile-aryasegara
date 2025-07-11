import { motion, type Variants } from "framer-motion";
import profile from "../assets/profile.jpg";

// Tipe untuk skill item
interface Skill {
  name: string;
  color: string;
  text: string;
}

const About: React.FC = () => {
  // Skills data
  const skills: Skill[] = [
    {
      name: "Java",
      color: "from-red-500/20 to-red-500/30",
      text: "text-red-400",
    },
    {
      name: "Spring Boot",
      color: "from-green-600/20 to-green-600/30",
      text: "text-green-400",
    },
    {
      name: "REST API",
      color: "from-purple-500/20 to-purple-500/30",
      text: "text-purple-400",
    },
    {
      name: "Node.js",
      color: "from-green-500/20 to-green-500/30",
      text: "text-green-400",
    },
    {
      name: "MySQL",
      color: "from-sky-500/20 to-sky-500/30",
      text: "text-sky-400",
    },
    {
      name: "PostgreSQL",
      color: "from-blue-600/20 to-blue-600/30",
      text: "text-blue-400",
    },
    {
      name: "MongoDB",
      color: "from-emerald-500/20 to-emerald-500/30",
      text: "text-emerald-400",
    },
    {
      name: "Express.js",
      color: "from-slate-500/20 to-slate-500/30",
      text: "text-slate-400",
    },
    {
      name: "HTML5",
      color: "from-orange-500/20 to-orange-500/30",
      text: "text-orange-400",
    },
    {
      name: "CSS3",
      color: "from-blue-500/20 to-blue-500/30",
      text: "text-blue-400",
    },
    {
      name: "Bootstrap",
      color: "from-purple-500/20 to-purple-500/30",
      text: "text-purple-400",
    },
    {
      name: "React",
      color: "from-cyan-500/20 to-cyan-500/30",
      text: "text-cyan-400",
    },
    {
      name: "TypeScript",
      color: "from-blue-600/20 to-blue-600/30",
      text: "text-blue-400",
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      id="about"
      aria-label="About section"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Decorative corners */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-500/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.8 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-purple-500/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.8 }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              About
            </span>{" "}
            <span className="text-neutral-300">Me</span>
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile image */}
          <motion.div
            variants={imageVariants}
            className="w-full lg:w-1/2 flex justify-center relative"
            whileHover="hover"
          >
            <div className="relative">
              <img
                className="rounded-3xl w-80 min-h-72 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover shadow-2xl shadow-cyan-500/20 border-2 border-cyan-500/50 transition-all duration-300"
                src={profile}
                alt="Arya Segara - Backend Developer"
                loading="lazy"
              />
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl -z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.5, scale: 1.1 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4"
              variants={itemVariants}
            >
              FullStack Developer
            </motion.h2>

            <motion.p
              className="text-neutral-400 text-base sm:text-lg leading-relaxed"
              variants={itemVariants}
            >
              Hi, I'm Arya Segara - a full-stack web developer focused on
              developing modern, responsive, and interactive applications. I
              also build scalable back-ends with Java (Spring Boot), Node.js
              (Express.js), and TypeScript. I also build responsive front-ends
              with React.js. With support for databases like PostgreSQL, MySQL,
              or MongoDB, I prioritize performance, clean code structure, and a
              smooth user experience. I develop every project, from the
              interface to the behind-the-scenes logic, to deliver functional
              and efficient digital solutions.
            </motion.p>

            {/* Skills */}
            <motion.div className="pt-4" variants={itemVariants}>
              <motion.h3
                className="text-xl font-semibold text-neutral-300 mb-4"
                variants={itemVariants}
              >
                Expertise:
              </motion.h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {skills.map((skill: Skill, index: number) => (
                  <motion.span
                    key={skill.name}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                    }}
                    className={`px-4 py-2 bg-gradient-to-r ${skill.color} border border-cyan-500/20 rounded-lg text-sm ${skill.text} font-medium shadow-md hover:shadow-cyan-500/20 transition-all duration-300`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
