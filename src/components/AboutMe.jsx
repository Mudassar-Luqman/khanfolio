import React from "react";
import aboutMeImg from "../assets/images/about-me.png";

const AboutMe = () => {
  return (
    <div className="about-me my-5" id="about">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-14 ">
        <div
          className="left card-shadow p-5 m-auto col-span-1 "
          data-aos="fade-right"
        >
          <div className="">
            <img
              className="about-me-img pt-5 px-2 h-96 object-cover w-96"
              src={aboutMeImg}
              alt="About Me"
            />
          </div>
        </div>
        <div className="  col-span-2" data-aos="fade-left">
          <h1 className=" text-2xl md:text-5xl leading-loose mt-2 text-white  font-bold ">
            About <span className="text-primary-yellow">Me</span>
          </h1>
          <div className=" mx-auto ">
            <p className="pt-10 text-justify text-sm">
              I'm Bilal Khan Nawabzada, a Gold Medalist Software Engineer,
              passionate Flutter developer and seasoned product manager. With a
              deep understanding of both technical development and strategic
              product management, I have Experience of all stages of software
              development and I bring a unique blend of skills to deliver
              exceptional mobile applications and drive successful product
              outcomes.
            </p>

            <p className="pt-6 text-justify text-sm">
              As a Flutter developer, I specialize in creating cross-platform
              mobile apps that provide stunning user experiences. With expertise
              in dart programming, MVVM design pattern and the Flutter
              framework, I design and implement beautiful user interfaces,
              leverage efficient state management techniques, integrate APIs and
              services, and optimize app performance across iOS and Android
              platforms. I strive to deliver seamless, visually appealing, and
              high-performance apps that leave a lasting impression on users.
            </p>
            <p className="pt-6 text-justify text-sm">
              Beyond my technical proficiency, I also have a strong background
              in project & product management. I excel in defining product
              visions and developing robust product strategies.
            </p>

            <p className="pt-6 text-primary-yellow">
              Feel free to reach out to me. I'm open to exciting opportunities
              and collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
