import React from "react";
import { motion } from "framer-motion";
import gaurav2 from "../assets/aboutpic.png";

const About = () => {
  return (
    <>
      <section id="about">
        <motion.h1
          className="text-3xl font-bold justify-center text-center text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-gray-600 p-2 text-[15px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          My introduction
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-10 px-6 md:px-20 py-10">
          {/* Left Image Section */}
          <div className="relative flex items-center md:w-1/2">
            <div className="absolute bg-[#FDC435] rounded-full w-[300px] h-[300px] z-0"></div>
            <img
              src={gaurav2}
              alt="Gaurav"
              className="relative z-10 w-[250px] h-[250px] object-cover top-7 left-6"
            />
          </div>

          {/* Right Content Section */}
          <motion.div
            className="md:w-1/2 text-center md:text-left space-y-6 relative md:-left-5"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              I’m a{" "}
              <span className="font-semibold text-gray-900">
                B.Tech graduate in Information Technology{" "}
              </span>
              with skills in{" "}
              <span className="text-yellow-500 font-semibold">
                MERN stack development{" "}
              </span>
              and{" "}
              <span className="font-semibold">competitive programming</span>.
              I’m looking for opportunities to grow as a
              <span className="font-semibold"> Software Developer</span>.
            </motion.p>

            <motion.button
              onClick={() => window.open("/Resume_Up.pdf", "_blank")}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-full shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
