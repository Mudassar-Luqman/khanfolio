import React from "react";
import aboutMeImg from "../assets/images/about-me.png";

const AboutMe = () => {
  return (
    <div className="about-me my-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-14 ">
        <div className="left card-shadow p-5 m-auto col-span-1 ">
          <div className="">
            <img
              className="about-me-img pt-5 px-2"
              src={aboutMeImg}
              alt="About Me"
            />
          </div>
        </div>
        <div className="right col-span-2  ">
          <h1 className=" text-2xl md:text-5xl leading-loose mt-2 text-white  font-bold ">
            About <span className="text-primary-yellow">Me</span>
          </h1>
          <div className=" w-10/12 ">
            <p className="pt-20">
              I’m a Front-End Developer located in Poland. I have a serious
              passion for UI effects, animations and creating intuitive, dynamic
              user experiences.
            </p>
            <p className="pt-6">
              Well-organized person, problem solver, independent employee with
              high attention to detail. Fan of MMA, outdoor activities, TV
              series and English literature. A family person and father of two
              fractious boys,
            </p>
            <p className="pt-6">
              Interested in the entire frontend spectrum and working on
              ambitious projects with positive people.
            </p>

            <p className="pt-6 text-primary-yellow">
              Let’s make something special.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
