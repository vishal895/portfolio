import React from "react";
import { Link } from "react-router-dom";

const AboutCard = () => {
  return (
    <div className="w-3/4 bg-teal-900  p-4 m-auto mt-10 shadow-2xl box-shadow " id="about">
      <div className="flex justify-between  items-center">
        <div className="content">
          <h2 className="sm:text-5xl text-3xl text-white font-bold">About Me</h2>
          <p className="sm:text-2xl text-lg text-white font-normal mt-6 w-11/12">
            Front-end developer with a passion for creating high-quality web
            experiences, and a proven ability to do so using the latest industry
            trends and best practices. My expertise in key technologies and
            methodologies, including HTML, CSS, JavaScript, and popular
            front-end frameworks, allows me to contribute effectively to web
            projects of all sizes.
          </p>
          <Link to="https://drive.google.com/file/d/1LebltBVY2wjxP0qGGAYh0DkQ_ARjRVSa/view">
          <div className="p-3 text-center bg-gray-400 font-bold tesxt-2xl sm:w-1/5  mt-6 ">RESUME</div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
