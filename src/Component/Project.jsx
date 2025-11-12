import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Yoga App",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    image: "/ittar2.jpg",
    // link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built using React, Tailwind CSS, and Framer Motion animations.",
    image: "/photo1.jpg",
    // link: "#",
  },
  {
    title: "E-commerce UI",
    description:
      "Designed a sleek and minimal UI for an e-commerce platform using React and Tailwind CSS.",
    image: "/images/project3.jpg",
    // link: "#",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const nextProject = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-slide every 5s (pause on hover)
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % projects.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const project = projects[index];

  return (
    <section
      className="py-20"
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Projects <span className="border-b-4 border-yellow-400 ml-2"></span>
        </h2>

        <div
          className="relative overflow-hidden rounded-3xl shadow-xl bg-white flex flex-col md:flex-row items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* AnimatePresence for smooth horizontal transition */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.title}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -200 : 200 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col md:flex-row items-center w-full"
            >
              {/* Left Side: Text */}
              <div className="w-full md:w-1/2 p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-800 hover:text-white transition-all"
                >
                  View Project
                </a>
              </div>

              {/* Right Side: Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-r-3xl w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left/Right Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
