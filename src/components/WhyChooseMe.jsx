import React from "react";
import whyMe from "../assets/images/why-choose-me.png";
import circle1 from "../assets/images/choose-me-circle.svg";
import circle2 from "../assets/images/choose-me-circletwo.svg";

const WhyChooseMe = () => {
  return (
    <div className=" p-10 mt-12">
      <div className="flex justify-center items-center relative">
        <div className="relative">
          <img className="translate-x-14" src={circle1} alt="" />

          <div className="choose-me-block absolute  lg:px-3 py-2 rounded-3xl lg:-translate-x-20 -translate-y-4">
            <h2 className="text-white text-sm">Agile Project Management </h2>
            <p className="pt-2 text-xs hidden lg:block">
              ensuring efficient delivery and adaptability to changing
              requirements.
            </p>
          </div>
        </div>

        <div className=" bg-blend-darken">
          <img className=" why-me-image  -translate-y-14 " src={whyMe} alt="" />
        </div>
        <div className="relative">
          <img className=" -translate-x-14" src={circle2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
