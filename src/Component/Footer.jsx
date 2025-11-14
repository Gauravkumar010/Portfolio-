import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-[#FDC435] text-white pt-12 pb-20 overflow-hidden  ">
      {/* Footer Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center space-y-6">
        {/* Name / Tagline */}
        <motion.h2
          className="text-2xl font-semibold text-gray-900"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Gaurav | Web Developer
        </motion.h2>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Email */}
          <a
            href="mailto:gauravit013@gmail.com"
            className="hover:text-gray-900 transition-colors duration-300 "
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Gauravkumar010/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/gaurav010_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gaurav-kumar-4b925322b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/yourxhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors duration-300"
            aria-label="Twitter / X"
          >
            <FaXTwitter />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-sm text-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Gaurav. All rights reserved.
        </motion.p>
      </div>

      {/* Curved Bottom Shape */}
     {/* Curved Top Shape (Flipped Upward) */}
<div className="absolute top-0 left-0 w-full overflow-hidden leading-0 rotate-180">
</div>
    </footer>
  );
};

export default Footer;
