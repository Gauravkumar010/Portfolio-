import React from "react";
import gaurav2 from "../assets/aboutpic.png"
const About = () => {
  return (
    <>
       

    <section
      id="about"
    >
       <h1 className="text-3xl font-bold justify-center text-center text-gray-900">About Me</h1>
       <p className="text-gray-600 p-2 text-[15px]" >My introduction</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-10 px-6 md:px-20 py-15">
    
      {/* Left Image Section */}
      <div className="relative flex items-center md:w-1/2">
        <div className="absolute bg-yellow-500 rounded-full w-[300px] h-[300px] z-0"></div>
        <img
          src={gaurav2}
          alt="Gaurav"
          className="relative z-10 w-[250px] h-[250px] object-cover top-7 left-6"
        />
      </div>

      {/* Right Content Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
      
        <p className="text-gray-600 text-lg leading-relaxed">
          I’m a <span className="font-semibold text-gray-900">B.Tech graduate in Information Technology </span> 
          with skills in <span className="text-yellow-500 font-semibold">MERN stack development </span> 
          and <span className="font-semibold">competitive programming</span>. 
          I’m looking for opportunities to grow as a 
          <span className="font-semibold"> Software Developer</span>.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-md shadow">
          Resume
        </button>
      </div>
      </div>
    </section>
        </>
  );
};

export default About;
