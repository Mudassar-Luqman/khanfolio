import React from "react";
import { useState } from "react";
import EducationCards from "./EducationCards";
import ProfessionalSkills from "./Subcomponents/ProfessionalSkills";
import Experiance from "./Subcomponents/Experiance";
import Achievments from "./Subcomponents/Achievments";
import circle from "../assets/icons/circle.png";
import yellowBlob from "../assets/icons/yellow-blob.svg";

const MyResume = () => {
  const [tabs, setTabs] = useState(1);

  return (
    <div className="relative" id="resume" data-aos="zoom-in">
      <h1 className=" font-bold text-5xl text-white">
        My <span className="text-primary-yellow ">Resume</span>
      </h1>
      <div className="mt-8 card-shadow-resume  md:flex justify-around duration-700">
        <div>
          <h1
            onClick={() => setTabs(1)}
            className={`hover:text-primary-yellow select-none  duration-300 text-xl custom-tab ${
              tabs === 1
                ? " card-shadow text-primary-yellow"
                : "text-primary-text-gray"
            } h-full py-5 px-[50px] rounded-md cursor-pointer `}
          >
            Education
          </h1>
        </div>
        <div>
          <h1
            onClick={() => setTabs(2)}
            className={`hover:text-primary-yellow select-none text-primary-text-gray duration-300 text-xl custom-tab ${
              tabs === 2
                ? " card-shadow text-primary-yellow"
                : "text-primary-text-gray"
            } h-full py-5 px-[50px] rounded-md cursor-pointer `}
          >
            Professional Skills
          </h1>
        </div>
        <div>
          <h1
            onClick={() => setTabs(3)}
            className={`hover:text-primary-yellow select-none text-primary-text-gray duration-300 text-xl custom-tab ${
              tabs === 3
                ? " card-shadow text-primary-yellow"
                : "text-primary-text-gray"
            } h-full py-5 px-[50px] rounded-md cursor-pointer `}
          >
            Experience
          </h1>
        </div>
        <div>
          <h1
            onClick={() => setTabs(4)}
            className={`hover:text-primary-yellow select-none text-primary-text-gray duration-300 text-xl custom-tab ${
              tabs === 4
                ? " card-shadow text-primary-yellow"
                : "text-primary-text-gray"
            } h-full py-5 px-[50px] rounded-md cursor-pointer `}
          >
            Achievements
          </h1>
        </div>
      </div>
      {/* tab One Education */}
      <div className="tbs z-10">
        {tabs === 1 ? (
          <EducationCards />
        ) : tabs === 2 ? (
          <ProfessionalSkills />
        ) : tabs === 3 ? (
          <Experiance />
        ) : (
          <Achievments />
        )}
      </div>

      <img
        className="absolute circle-animation -bottom-8 -right-10 -z-10 w-28"
        src={circle}
        alt=""
      />
      <img
        className="absolute animate-pulse -left-40 bottom-0 -z-10"
        src={yellowBlob}
        alt=""
      />
    </div>
  );
};

export default MyResume;
