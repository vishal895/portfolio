import React from "react";
import { Link } from "react-router-dom";

const ExperienceCard = () => {
  return (
    <div className="w-3/4 bg-teal-900  p-4 m-auto mt-10 shadow-2xl box-shadow" id="experience">
      <div className="content">
        <h2 className="sm:text-5xl text-3xl text-white font-bold">Experience</h2>
        <div className="flex justify-between items-center text-white mt-3 ">
          <div className="flex whitespace-nowrap flex-col">
            <h3 className="font-bold text-xs sm:text-xl">Front-End Developer,</h3>
            <h3 className="text-xs sm:text-xl">Owens NFT / Blokument Inc</h3>
          </div>

          <h2 className="text-xs sm:text-lg">July 2022 - Nov 2023</h2>
        </div>
        <p>
          <ul className="p-5 list-disc text-white">
            <li>
              Identified web-based user interactions and developed
              highly-responsive user interface components via React concepts.
            </li>
            <li>
              Developed a custom UI component library to improve consistency and
              efficiency across the application.
            </li>
            <li>
              Developed the latest user-facing features using React.js and built
              reusable components & front-end libraries for future use.
            </li>
            <li>
              Optimized components for maximum performance across a vast array
              of web-capable devices and browsers.
            </li>
            <li>
              Collaborated with designers, Senior front-end developers, and
              project managers to develop and maintain multiple responsive
              websites and web applications using HTML, CSS, Bootstrap,
              Material-UI, JavaScript, React.js, JSON, and API Callouts
            </li>
            <li>
              Contributed to code reviews and participated in team meetings to
              discuss project progress and roadblocks.
            </li>
            <li>
              <b>Tech Stack</b> : Html, CSS, Bootstrap, Material ui, JavaScript
              and React
            </li>
          </ul>
        </p>
        <h2 className="font-bold text-3xl text-white">Project</h2>
        <ul className="p-5 list-disc text-of text-white">
          <Link to="https://saas-dev.owens.market/"><li>https://saas-dev.owens.market/</li></Link>
          <Link to="https://release-truestars.d1vlqg2aytje11.amplifyapp.com/"><li>https://release-truestars.d1vlqg2aytje11.amplifyapp.com/</li></Link>
          <li>There are many internal projects and dashboards</li>
        </ul>
        <div className="flex justify-between items-center text-white mt-3 ">
          <div className="flex whitespace-nowrap flex-col">
            <h3 className="font-bold text-xs sm:text-xl">Front-End Developer,</h3>
            <h3 className="text-xs sm:text-xl">MandelBulb Technologies </h3>
          </div>

          <h2 className="text-xs sm:text-lg">Jan 2022 - Apr 2022</h2>
        </div>
        <ul className="p-5 list-disc text-white">
          <li>Effectively coded software changes and alterations based on specific design specifications.</li>
          <li>Mostly worked on the Frontend Bug fixing.</li>
          <li>Worked on the reusable components using React JS.</li>
          <li>Tech Stack:Html,CSS,Bootstrap.</li>
          <li>Soft Skills: Teamwork, Time Management, Communication, Presentation skills.</li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
