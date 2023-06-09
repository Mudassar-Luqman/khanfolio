import React from "react";
import { useState } from "react";
import EducationCards from "./EducationCards";
import ProfessionalSkills from "./Subcomponents/ProfessionalSkills";
import Experiance from "./Subcomponents/Experiance";

const MyResume = () => {
  const [tabs, setTabs] = useState(1);

  return (
    <>
      <div className="card-shadow-resume flex justify-around duration-700">
        <div>
          <h1
            onClick={() => setTabs(1)}
            className={`hover:text-primary-yellow select-none  duration-300 text-2xl ${
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
            className={`hover:text-primary-yellow select-none text-primary-text-gray duration-300 text-2xl ${
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
            className={`hover:text-primary-yellow select-none text-primary-text-gray duration-300 text-2xl ${
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
            className={`hover:text-primary-yellow select-none text-primary-text-gray duration-300 text-2xl ${
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
      {tabs === 1 ? (
        <EducationCards />
      ) : tabs === 2 ? (
        <ProfessionalSkills />
      ) : tabs === 3 ? (
        <Experiance />
      ) : (
        ""
      )}
    </>
  );
};

export default MyResume;
