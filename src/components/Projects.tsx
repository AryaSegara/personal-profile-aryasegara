import React, { type JSX } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaHtml5,
  FaCss3,
  FaJava,
  FaDatabase,
  FaShieldAlt,
  FaReact,
  FaFilePdf,
  FaEnvelope,
  FaNodeJs,
} from "react-icons/fa";
import { SiSpring, SiSwagger, SiMysql, SiJavascript, SiMariadb, SiTypescript, SiVite, SiTailwindcss } from "react-icons/si";
import { TbFileReport } from "react-icons/tb";
import type { Project } from "../constants";
// import { Project } from "./constants"; // 👈 Impor tipe Project dari constants

// --- KAMUS TEKNOLOGI ---
// Objek ini memetakan string dari `constants.ts` ke ikon dan nama yang akan ditampilkan.
const techStackMap: { [key: string]: { icon: JSX.Element; name: string } } = {
  // Backend & Database
  Java: { icon: <FaJava className="text-red-400" />, name: "Java" },
  SpringBoot: {icon: <SiSpring className="text-green-500" />,name: "Spring Boot",},
  MySQL: { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
  "JPA/Hibernate": {icon: <FaDatabase className="text-amber-500" />,name: "JPA/Hibernate",},
  "Spring Security + JWT": {icon: <FaShieldAlt className="text-blue-300" />,name: "Spring Security",},

  "Apache PDFBox": { icon: <FaFilePdf className="text-red-500" />, name: "Apache PDFBox" },
  "Spring MailSender": { icon: <FaEnvelope className="text-sky-500" />, name: "Spring MailSender" },
  "MariaDB": { icon: <SiMariadb className="text-cyan-950" />, name: "MariaDB" },
  "NodeJs": { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },

  // Frontend & Lainnya
  HTML: { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  CSS: { icon: <FaCss3 className="text-blue-500" />, name: "CSS" },
  JS: {icon: <SiJavascript className="text-yellow-400" />,name: "JavaScript",},
  TS: {icon: <SiTypescript className="text-blue-500" />,name: "TypeScript",},
  React: { icon: <FaReact className="text-sky-500" />, name: "React" },
  Thymeleaf: { icon: <FaCode className="text-green-400" />, name: "Thymeleaf" },
"Tailwind CSS": {icon: <SiTailwindcss className="text-cyan-400" />,name: "Tailwind CSS",},
  Vite: {icon: <SiVite className="text-purple-500" />,name: "Vite",},

  // Tools & API
  Swagger: {icon: <SiSwagger className="text-emerald-400" />,name: "Swagger",},
  "Apache POI": {icon: <TbFileReport className="text-red-300" />,name: "Apache POI",},
  "API Spotify": {icon: <FaCode className="text-green-500" />,name: "Spotify API",},

  // Bahasa & CLI
  "C Language": {icon: <FaCode className="text-blue-600" />,name: "C Language",},
  "Command-Line Interface (CLI)": {icon: <FaCode className="text-gray-400" />,name: "CLI",},
  "File Handling": {icon: <FaCode className="text-gray-400" />,name: "File Handling",},
};

// Definisikan props untuk komponen Projects
interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <motion.section
      id="projects"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Floating background elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            delay: 3,
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            Featured Projects
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(8, 145, 178, 0.2)",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                initial={{ opacity: 0 }}
              />

              <div className="flex flex-col lg:flex-row h-full">
                {/* Project Image */}
                <motion.div
                  className="lg:w-1/2 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover aspect-video lg:aspect-auto lg:h-[400px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-end p-8">
                    <motion.div
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h2>
                      <div className="flex gap-2">
                        <motion.span
                          className="text-xs px-2 py-1 rounded-full bg-gray-800/80 text-cyan-300"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(8, 145, 178, 0.3)",
                          }}
                        >
                          {project.type}
                        </motion.span>
                        <motion.span
                          className="text-xs px-2 py-1 rounded-full bg-gray-800/80 text-purple-300"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(124, 58, 237, 0.3)",
                          }}
                        >
                          {project.bagian}
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Project Content */}
                <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                  <div className="mb-8">
                    <motion.div
                      className="flex items-center gap-3 mb-6"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/30"
                        animate={{ rotate: [0, 5, 0, -5, 0] }}
                        transition={{
                          rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          },
                        }}
                      >
                        <FaCode className="text-cyan-400 text-xl" />
                      </motion.div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        {project.title}
                      </h2>
                    </motion.div>

                    <motion.p
                      className="text-gray-300 mb-8 leading-relaxed"
                      whileHover={{
                        color: "#f3f4f6",
                        transition: { duration: 0.3 },
                      }}
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-10">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "mirror",
                        }}
                      >
                        <FaCode className="text-cyan-400" />
                      </motion.span>
                      TECH STACK
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {/* 👈 Loop dinamis untuk tech stack */}
                      {project.tech.map((techName, idx) => {
                        const techDetails = techStackMap[techName];
                        if (!techDetails) return null; // Jika tech tidak ada di kamus, lewati

                        return (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-2 bg-gray-700/30 px-3 py-2 rounded-lg border border-gray-600 cursor-default"
                            whileHover={{
                              y: -3,
                              backgroundColor: "rgba(6, 182, 212, 0.2)",
                              borderColor: "#06b6d4",
                              boxShadow: "0 5px 15px rgba(8, 145, 178, 0.2)",
                            }}
                            animate={{ y: [0, -2, 0] }}
                            transition={{
                              y: {
                                duration: 3 + idx,
                                repeat: Infinity,
                                ease: "easeInOut",
                              },
                            }}
                          >
                            <motion.span
                              animate={{ rotate: [0, 10, 0] }}
                              transition={{
                                duration: 5 + idx,
                                repeat: Infinity,
                                repeatType: "mirror",
                              }}
                            >
                              {techDetails.icon}
                            </motion.span>
                            <span className="text-sm text-gray-200">
                              {techDetails.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600/90 hover:bg-cyan-700 text-white rounded-lg transition-all duration-300 relative overflow-hidden group"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 5px 15px rgba(8, 145, 178, 0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{
                          x: "100%",
                          transition: { duration: 0.8 },
                        }}
                      />
                      <FaGithub className="relative z-10" />
                      <span className="relative z-10">View Code</span>
                    </motion.a>

                    {project.visit && (
                      <motion.a
                        href={project.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-purple-600/90 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 relative overflow-hidden group"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 5px 15px rgba(124, 58, 237, 0.4)",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span
                          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{
                            x: "100%",
                            transition: { duration: 0.8 },
                          }}
                        />
                        <FaExternalLinkAlt className="relative z-10" />
                        <span className="relative z-10">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
