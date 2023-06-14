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
          <h1 className=" font-bold  text-2xl text-white ">Gold Medalist</h1>
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
            Award of Creativity & innovation
          </h1>
          <p className="text-primary-text-gray pt-3">
            Superior University Lahore Awarded with Creativity & innovation
            Award in Technopreneurial Expo'16 on winning Project Competition at
            Expo Center Lahore.
          </p>
        </div>
      </div>
      <div className="icon-text flex gap-5 mt-8 items-start align-top pb-8">
        <img className="" src={awardTwo} alt="awardTwo" />
        <div>
          <h1 className=" font-bold  text-2xl text-white ">
            Award of Excellence
          </h1>
          <p className="text-primary-text-gray pt-3">
            Superior University Lahore Awarded with "Award of Excellence" for
            winning MIT Blossoms Competition in Superior Olympiad at Superior
            University Organized by IEEE SUL & Superior IT Club on May 2015.
          </p>
        </div>
      </div>
      <div className="icon-text flex gap-5 mt-8 items-start align-top pb-8">
        <img className="" src={awardOne} alt="awardOne" />
        <div>
          <h1 className=" font-bold  text-2xl text-white ">
            Speed Programming Winner
          </h1>
          <p className="text-primary-text-gray pt-3">
            Superior University Lahore Awarded with "Award of Excellence" for
            winning Speed Programming Competition in SQPC (Superior Quiz &
            Programming Competition) at Superior University Organized by IEEE
            SUL & Superior IT Club on August 2014.
          </p>
        </div>
      </div>

      <div className="icon-text flex gap-5 mt-8 items-start align-top pb-8">
        <img className="" src={awardOne} alt="awardOne" />
        <div>
          <h1 className=" font-bold  text-2xl text-white ">
            IEEE General Sectary SUL
          </h1>
          <p className="text-primary-text-gray pt-3">
            Superior University Lahore Awarded with "Award of Excellence" for
            winning Speed Programming Competition in SQPC (Superior Quiz &
            Programming Competition) at Superior University Organized by IEEE
            SUL & Superior IT Club on August 2014.
          </p>
        </div>
      </div>

      <div className="icon-text flex gap-5 mt-8 items-start align-top pb-8">
        <img className="" src={awardOne} alt="awardOne" />
        <div>
          <h1 className=" font-bold  text-2xl text-white ">
            Vice President Of IT Club
          </h1>
          <p className="text-primary-text-gray pt-3">
            Superior University Lahore Awarded with "Award of Excellence" for
            winning Speed Programming Competition in SQPC (Superior Quiz &
            Programming Competition) at Superior University Organized by IEEE
            SUL & Superior IT Club on August 2014.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievments;
