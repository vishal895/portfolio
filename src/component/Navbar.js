import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-cyan-900 px-5 py-2">
      <Link to="/"><h1 className="font-bold font-serif text-lg sm:text-sm">Vishal</h1></Link>
      <div className="hidden sm:flex gap-5">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#project">Project</a>
        <a href="#skill">Skills</a>
        
       
      </div>
    </div>
  );
};

export default Navbar;
