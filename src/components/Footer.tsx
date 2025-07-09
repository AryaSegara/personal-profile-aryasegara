// src/components/Footer.tsx

import React, { type JSX } from "react"; // 💡 Impor React untuk typing seperti React.FC dan JSX.Element
import { motion, type Variants } from "framer-motion"; // 💡 Impor tipe 'Variants' dari framer-motion
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// 💡 Definisikan interface untuk struktur data agar kode lebih aman dan mudah dibaca
interface NavLink {
  name: string;
  href: string;
}

interface SocialLink {
  icon: JSX.Element; // Tipe untuk komponen ikon React
  href: string;
  name: string;
}

// 💡 Berikan tipe pada komponen sebagai React.FC (Functional Component)
const Footer: React.FC = () => {
  // 💡 Terapkan tipe pada array of objects
  const navLinks: NavLink[] = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: <FaGithub />,
      href: "https://github.com/AryaSegara",
      name: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/arya-segara-296911358/",
      name: "LinkedIn",
    },
    { icon: <FaInstagram />, href: "https://www.instagram.com/aryaa_sgra/", name: "Instagram" },
  ];

  // 💡 Terapkan tipe 'Variants' pada objek animasi
  const footerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden border-t-2 border-neutral-800 bg-neutral-900/50 py-4 px-4 sm:px-6 lg:px-8 mt-20"
    >
      {/* Efek gradien di bagian atas */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Kolom 1: Nama dan Deskripsi Singkat */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Arya Segara
            </h3>
            <p className="text-neutral-400 text-sm">
              As a web developer, I am an expert in backend and frontend. I use
              React to create interactive UIs and Springboot and Node.js to
              build APIs. which uses MySQL, PostgreSQL, MariaDb and MongoDb
              databases.{" "}
            </p>
          </motion.div>

          {/* Kolom 2: Link Navigasi Cepat */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-white tracking-wider uppercase">
              {""}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kolom 3: Link Sosial Media */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h4 className="font-semibold text-white tracking-wider uppercase">
              Hubungi Saya
            </h4>
            <div className="flex justify-center md:justify-start space-x-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.2, color: "#22d3ee" }} // Efek hover
                  className="text-neutral-400 text-2xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
    </motion.footer>
  );
};

export default Footer;
