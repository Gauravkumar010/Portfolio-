import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiCplusplus,
  SiLeetcode,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
 const [openSection, setOpenSection] = useState("skills");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const techSkills = [
    { name: "C++", icon: <SiCplusplus className="text-blue-600 text-4xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-4xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 text-4xl" /> },
  ];

  const codingProfiles = [
    { name: "LeetCode", icon: <SiLeetcode className="text-orange-400 text-4xl" /> },
    { name: "CodeChef", icon: <SiCodechef className="text-[#5B4638] text-4xl" /> },
    { name: "GeeksforGeeks", icon: <SiGeeksforgeeks className="text-green-600 text-4xl" /> },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <section id="skills" className="py-20 ">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
         Skills
        </h2>

        {/* Accordion Item - Skills */}
        <div className="mb-6 rounded-2xl  ">
          <button
            onClick={() => toggleSection("skills")}
            className="w-full flex justify-between items-center px-6 py-4 text-left text-xl font-semibold text-gray-900 hover:bg-gray-100 transition"
          >
            <span>💻 Technical Skills</span>
            <span className="text-gray-500">
              {openSection === "skills" ? "▲" : "▼"}
            </span>
          </button>

          <AnimatePresence>
            {openSection === "skills" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden px-6 pb-6"
              >
                <p className="text-gray-600 mb-10 mt-2 text-center">
                  My technical stack for full-stack and problem-solving.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                  {techSkills.map((skill, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300"
                    >
                      {skill.icon}
                      <p className="mt-3 font-medium text-gray-700">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Accordion Item - Competitive Programming */}
        <div className="rounded-2xl ">
          <button
            onClick={() => toggleSection("competitive")}
            className="w-full flex justify-between items-center px-6 py-4 text-left text-xl font-semibold text-gray-900 hover:bg-gray-100 transition"
          >
            <span>🏆 Competitive Programming</span>
            <span className="text-gray-500">
              {openSection === "competitive" ? "▲" : "▼"}
            </span>
          </button>

          <AnimatePresence>
            {openSection === "competitive" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden px-6 pb-6"
              >
                <p className="text-gray-600 mb-8 mt-2 text-center">
                  I enjoy solving algorithmic challenges using{" "}
                  <span className="font-semibold text-blue-600">C++</span> and
                  have completed{" "}
                  <a
                    href="https://codolio.com/profile/gaurav013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-yellow-500 hover:underline hover:text-yellow-600 transition"
                  >
                    500+ problems
                  </a>{" "}
                  across platforms such as:
                </p>

                <div className="flex flex-wrap justify-center gap-8">
                  {codingProfiles.map((site, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300 w-[150px]"
                    >
                      {site.icon}
                      <p className="mt-3 font-medium text-gray-700">
                        {site.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
