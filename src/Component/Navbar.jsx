// import React from "react";

// function Navbar() {
//   return (
//     <>
//       <nav className="flex justify-between items-center py-3 px-3 bg-[#E5E5E5] shadow-2xl md:px-16">
//         {/* Logo/Name: You'd make "Gaurav" the logo */}
//         <div className="text-2xl text-gray-800">Gaurav</div>

//         {/* Navigation Links: flexbox, horizontal spacing */}
//         <ul className="flex space-x-6">
//           <li>
//             <a
//               href="#home"
//               className="font-semibold text-gray-700 hover:text-black"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#about"
//               className="font-semibold text-gray-700 hover:text-black"
//             >
//               About
//             </a>
//           </li>

//           <li>
//             <a
//               href="#skill"
//               className="font-semibold text-gray-700 hover:text-black"
//             >
//               Skill
//             </a>
//           </li>
//           <li>
//             <a
//               href="#project"
//               className="font-semibold text-gray-700 hover:text-black"
//             >
//               Project
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contacts"
//               className="font-semibold text-gray-700 hover:text-black"
//             >
//               Contacts
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Navbar;


import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="font-semibold text-lg text-gray-800">Gaurav</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-500">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-500">Skill</a></li>
          <li><a href="#projects" className="hover:text-yellow-500">Project</a></li>
          <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
