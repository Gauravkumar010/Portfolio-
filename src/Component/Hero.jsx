import React from "react";
import yellowBlob from "../assets/yellow-bg.png";
import profile from "../assets/Profile.png"

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative w-full min-h-screen text-left flex flex-col md:flex-row items-center justify-between overflow-hidden"
      >
        {/* Left Content */}
        <div className="z-10 w-full md:w-1/2 mr-10 mb-10 px-6 md:px-16 space-y-6">
          <p className="text-yellow-500 font-semibold tracking-widest">
            WEB DEVELOPER
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hello, My name is Gaurav
          </h1>
          <p className="text-gray-500 text-lg">
            Experience in web development and competitive programming
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-5 py-2 rounded-md shadow">
              Projects
            </button>
            <button className="border border-gray-400 hover:bg-gray-100 px-5 py-2 rounded-md font-medium">
              LinkedIn
            </button>
          </div>
        </div>

        {/* Right Image with blob background */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={yellowBlob}
            alt="background image yellow"
            className="absolute right-0 translate-y-[-14%] w-[500px] md:w-[600px] h-[500px] opacity-90 pointer-events-none z-0"
          />
          <img
            src={profile}
            alt="Gaurav"
            className="relative z-10 w-[300px] md:w-[443px] h-[469px] rounded-b-[12vw] object-cover
             bottom-10 right-9"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
