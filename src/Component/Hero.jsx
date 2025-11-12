import React from "react";
import { motion } from "framer-motion";
import yellowBlob from "../assets/yellow-bg.png";
import profile from "../assets/Profile.png";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative w-full min-h-screen text-left flex flex-col md:flex-row items-center justify-between overflow-hidden"
      >
        {/* Left Content */}
        <motion.div
          className="z-10 w-full md:w-1/2 mr-10 mb-10 px-6 md:px-16 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-yellow-500 font-semibold tracking-widest"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            WEB DEVELOPER
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Hello, My name is Gaurav
          </motion.h1>

          <motion.p
            className="text-gray-500 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience in web development and competitive programming
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-5 py-2 rounded-md shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.button>
            <motion.button
              className="border border-gray-400 hover:bg-gray-100 px-5 py-2 rounded-md font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image with blob background */}
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={yellowBlob}
            alt="background image yellow"
            className="absolute right-0 translate-y-[-14%] w-[500px] md:w-[600px] h-[500px] opacity-90 pointer-events-none z-0"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
          <motion.img
            src={profile}
            alt="Gaurav"
            className="relative z-10 w-[300px] md:w-[443px] h-[469px] rounded-b-[12vw] object-cover bottom-10 right-9"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
