import React from "react";
import { Link } from "react-router-dom";

const ProjectInsideCard = ({ ImageProject, ProjectHeading,demo,gitcode}) => {
  return (
    <div className="shadow-md shadow-gray-600 rounded-lg">
      <img
        src={ImageProject}
        alt=""
        className="rounded-md duration-200 hover:scale-105"
      />
      <h3 className="text-xs sm:text-lg mt-2 text-center font-bold">
        {ProjectHeading}
      </h3>
      <div className="flex justify-center items-center">
        <Link to={demo}>
          <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 text-xs sm:text-lg">
            Demo
          </button>
        </Link>
        <Link to={gitcode}>
          <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 text-xs sm:text-lg">
            Code
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectInsideCard;
