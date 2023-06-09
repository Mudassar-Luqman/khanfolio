import React from "react";
import awardOne from "../../assets/images/award1.png";
import awardTwo from "../../assets/images/award2.png";
import awardThree from "../../assets/images/award3.png";
import awardFour from "../../assets/images/award4.png";

const Achievments = () => {
  return (
    <div className="card-shadow mt-12 py-14 px-10">
      <div className="icon-text flex gap-5  items-start align-top pb-8">
        <img className="" src={awardFour} alt="awardFour" />
        <div>
          <h1 className=" font-bold  text-2xl text-white ">
            Best Developer award in 2007
          </h1>
          <p className="text-primary-text-gray pt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour,
          </p>
        </div>
      </div>
      <div className="icon-text flex gap-5 mt-8 items-start align-top pb-8">
        <img className="" src={awardThree} alt="awardThree" />
        <div>
          <h1 className=" font-bold  text-2xl text-white ">
            User research award 2009
          </h1>
          <p className="text-primary-text-gray pt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour,
          </p>
        </div>
      </div>
      <div className="icon-text flex gap-5 mt-8 items-start align-top pb-8">
        <img className="" src={awardTwo} alt="awardTwo" />
        <div>
          <h1 className=" font-bold  text-2xl text-white ">
            Best Wordpress award in 2011
          </h1>
          <p className="text-primary-text-gray pt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour,
          </p>
        </div>
      </div>
      <div className="icon-text flex gap-5 mt-8 items-start align-top pb-8">
        <img className="" src={awardOne} alt="awardOne" />
        <div>
          <h1 className=" font-bold  text-2xl text-white ">
            Android Developer
          </h1>
          <p className="text-primary-text-gray pt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievments;
