import React from "react";
import { useState } from "react";
import EducationCards from "./EducationCards";
import ProfessionalSkills from "./Subcomponents/ProfessionalSkills";
import Experiance from "./Subcomponents/Experiance";
import Achievments from "./Subcomponents/Achievments";

const MyResume = () => {
  const [tabs, setTabs] = useState(1);

  return (
    <div className="">
      {/* glow circle */}
      {/* <svg
        className="absolute -translate-x-40"
        width="663"
        height="663"
        viewBox="0 0 663 663"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5" filter="url(#filter0_f_185_361)">
          <circle cx="331.5" cy="331.5" r="141.5" fill="#FFB400" />
        </g>
        <defs>
          <filter
            id="filter0_f_185_361"
            x="0"
            y="0"
            width="663"
            height="663"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="95"
              result="effect1_foregroundBlur_185_361"
            />
          </filter>
        </defs>
      </svg> */}
      <div className="card-shadow-resume bg-lime-400  flex justify-around duration-700">
        <div>
          <h1
            onClick={() => setTabs(1)}
            className={`hover:text-primary-yellow select-none  duration-300 text-2xl custom-tab ${
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
            className={`hover:text-primary-yellow select-none text-primary-text-gray duration-300 text-2xl custom-tab ${
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
            className={`hover:text-primary-yellow select-none text-primary-text-gray duration-300 text-2xl custom-tab ${
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
            className={`hover:text-primary-yellow select-none text-primary-text-gray duration-300 text-2xl custom-tab ${
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
    </div>
  );
};

export default MyResume;
