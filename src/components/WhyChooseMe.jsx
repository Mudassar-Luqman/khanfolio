import React from "react";
import whyMe from "../assets/images/why-choose-me.png";

const WhyChooseMe = () => {
  return (
    <div className="" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <h1 className=" font-bold text-5xl text-white">
        Why Choose <span className="text-primary-yellow ">Me? </span>
      </h1>
      <img className="pointer-events pt-12" src={whyMe} alt="whyMe" />
    </div>
  );
};

export default WhyChooseMe;
