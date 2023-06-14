import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import headerSliderOne from "../assets/images/header-slider1.png";
import headerSliderTwo from "../assets/images/header-slider2.jpg";
import fb from "../assets/icons/fb.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import { useState } from "react";
import AboutMe from "../components/AboutMe";
import Counter from "../components/Counter";
import Expertise from "../components/Expertise";
import ResumeVideo from "../components/ResumeVideo";
import WhatMeDo from "../components/WhatMeDo";
import MyResume from "../components/MyResume";
import TextImage from "../components/TextImage";
import Portfolio from "../components/Portfolio";
import Highlights from "../components/Highlights";
import TechNetwork from "../components/TechNetwork";
import MyBlog from "../components/MyBlog";
import Testimonials from "../components/Testimonials";
import TextImag from "../components/TextImag";
import Contact from "../components/Contact";
import Footer from "../layouts/Footer";
import WhyChooseMe from "../components/WhyChooseMe";
import { gsap } from "gsap";

export const HomePage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    gsap.from(".main-header", { duration: 0.7, x: "500px" });
  }, []);

  const sliderImages = [
    { id: 1, url: headerSliderOne },
    // { id: 2, url: headerSliderTwo },
  ];

  const [currentBgImage, setCurrentBgImage] = useState(sliderImages[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentBgImage(sliderImages[count]);
      setCount((prev) => (prev + 1) % sliderImages.length); // Reset count to 0 when it exceeds the length
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on unmounting
  }, [count, sliderImages.length]);

  return (
    <>
      <div className="homepage" id="home">
        <div
          className="slider-header h-screen object-contain transition-all"
          style={{
            backgroundImage: `url(${currentBgImage.url})`,
          }}
        >
          <div className=" h-full pl-3 sm:pl-10 md:pl-16 flex items-center">
            <div className="main-header   ">
              <div className="content text-white ">
                <h1 className="text-md md:text-2xl leading-loose font-bold drop-shadow-2xl">
                  {" "}
                  Hi,I'm
                </h1>
                <h1 className="drop-shadow-2xl text-2xl md:text-5xl leading-loose mt-2  font-bold ">
                  <span className="text-primary-yellow">Bilal Khan</span>{" "}
                  Nawabzada
                </h1>
                <h1 className="text-xl md:text-4xl typewriter font-bold leading-loose duration-300 mt-2 flex">
                  <span className="pr-2">a, </span>
                  <Typewriter
                    options={{
                      strings: [" Flutter Expert", "Product Manager"],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: "natural",
                      delay: "natural",
                      changeDeleteSpeed: "natural",
                      wrapperClassName: "typeeffect",
                    }}
                  />
                </h1>
                <p
                  style={{ textShadow: "1px 1px #000" }}
                  className="text-white w-full md:w-3/5 text-md pt-6 leading-snug	drop-shadow-2xl"
                >
                  I Help clients define product strategies and roadmaps aligned
                  with their business goals and target market. I offer
                  end-to-end mobile app development solutions, ensuring seamless
                  experiences from concept to deployment. I Utilize agile
                  methodologies to ensure efficient development processes.
                </p>
              </div>

              <div className="social-icons  flex gap-4 mt-12">
                <img
                  className="social-icon w-10 md:w-16 h-10 md:h-16 p-3 md:p-5"
                  src={fb}
                  alt="facebook"
                />
                <img
                  className="social-icon w-10 md:w-16 h-10 md:h-16 p-3 md:p-5"
                  src={twitter}
                  alt="twitter"
                />
                <img
                  className="social-icon w-10 md:w-16 h-10 md:h-16 p-3 md:p-5"
                  src={instagram}
                  alt="instagram"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End of Slider Header */}

        <hr className="w-3/4 border-1 border-black my-14  m-auto" />

        <div className="px-2 md:px-20">
          <div className="h-screen">
            <AboutMe />
            <Counter />
          </div>
          <hr className=" w-3/4 border-1 border-black my-20  m-auto" />
          <Expertise />
          <hr className=" w-3/4 border-1 border-black my-20  m-auto" />
          <ResumeVideo />
          <hr className=" w-3/4 border-1 border-black my-14  m-auto" />
          {/* what i do section */}
          <WhatMeDo />
          <hr className="w-3/4 border-1 border-black  my-10 lg:mt-64 mb-10  m-auto clearfix" />
          <MyResume />
          <hr className=" w-3/4 border-1 border-black my-16  m-auto" />

          <TextImage text={"The education should be very interactual."} />
          <hr className=" w-3/4 border-1 border-black my-16  m-auto" />
          <Portfolio />
          <hr className=" w-3/4 border-1 border-black my-16  m-auto" />
          <WhyChooseMe />
          <hr className=" w-3/4 border-1 border-black my-16  m-auto" />
          <Highlights />
          <hr className=" w-3/4 border-1 border-black my-16  m-auto" />
          <TechNetwork />
          <hr className=" w-3/4 border-1 border-black my-16  m-auto" />
          <MyBlog />
          <hr className=" w-3/4 border-1 border-black my-16  m-auto" />

          <Testimonials />
          <hr className=" w-3/4 border-1 border-black my-16  m-auto" />
          <TextImag text={"The education should be very interactual."} />
          <hr className=" w-3/4 border-1 border-black my-16  m-auto" />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};
