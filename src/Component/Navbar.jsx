import React, { useState } from "react";
import { Mail, Menu, X } from "lucide-react"; 
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Logo */}
        <a href="#home" className="group flex items-center gap-2 transition-all duration-300">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </a>

        {/* Middle: Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-yellow-500 transition duration-300 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Email */}
        <div className="hidden md:flex items-center gap-2 font-medium">
          <a
            href="mailto:gauravit013@gmail.com"
            className="flex items-center gap-2 text-gray-700 px-3 py-1 rounded-full border border-yellow-400 hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300 hover:shadow-[0_0_10px_2px_rgba(253,196,53,0.6)]"
          >
            <Mail size={20} className="text-yellow-500 transition-all duration-300 group-hover:scale-110" />
            gauravit013@gmail.com
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none transition-transform duration-300"
        >
          {menuOpen ? (
            <X size={26} className="animate-spin-slow" />
          ) : (
            <Menu size={26} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-3 text-gray-700 font-medium space-y-4">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="hover:text-yellow-500 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}

          {/* Email Section */}
          <li className="flex items-center gap-2 pt-3 border-t border-gray-200 w-full justify-center">
            <a
              href="mailto:gauravit013@gmail.com"
              className="flex items-center gap-2 text-gray-700 px-3 py-1 rounded-full border border-yellow-400 hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300 hover:shadow-[0_0_10px_2px_rgba(253,196,53,0.6)]"
            >
              <Mail size={20} className="text-yellow-500" />
              gauravit013@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
