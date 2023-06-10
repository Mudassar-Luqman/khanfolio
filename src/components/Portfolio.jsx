import React from "react";
import portfolioImage from "../assets/images/portfolio-img1.png";

const Portfolio = () => {
  return (
    <div>
      <h1 className=" font-bold text-5xl text-white">
        My <span className="text-primary-yellow ">Portfolio</span>
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-12  gap-12">
        <div className="card-shadow p-4 cursor-pointer ">
          <div className="portfolio-card-image">
            <img
              className="w-full"
              src={portfolioImage}
              alt="portfolio Image"
            />
          </div>
          <p className="text-primary-yellow pt-2">Web Development</p>
          <h2 className="pt-3 text-white text-xl">
            Personal Portfolio April Fools
          </h2>
        </div>
        <div className="card-shadow p-4 cursor-pointer ">
          <div className="portfolio-card-image">
            <img
              className="w-full"
              src={portfolioImage}
              alt="portfolio Image"
            />
          </div>
          <p className="text-primary-yellow pt-2">Web Development</p>
          <h2 className="pt-3 text-white text-xl">
            Personal Portfolio April Fools
          </h2>
        </div>
        <div className="card-shadow p-4 cursor-pointer ">
          <div className="portfolio-card-image">
            <img
              className="w-full"
              src={portfolioImage}
              alt="portfolio Image"
            />
          </div>
          <p className="text-primary-yellow pt-2">Web Development</p>
          <h2 className="pt-3 text-white text-xl">
            Personal Portfolio April Fools
          </h2>
        </div>
        <div className="card-shadow p-4 cursor-pointer ">
          <div className="portfolio-card-image">
            <img
              className="w-full"
              src={portfolioImage}
              alt="portfolio Image"
            />
          </div>
          <p className="text-primary-yellow pt-2">Web Development</p>
          <h2 className="pt-3 text-white text-xl">
            Personal Portfolio April Fools
          </h2>
        </div>
        <div className="card-shadow p-4 cursor-pointer ">
          <div className="portfolio-card-image">
            <img
              className="w-full"
              src={portfolioImage}
              alt="portfolio Image"
            />
          </div>
          <p className="text-primary-yellow pt-2">Web Development</p>
          <h2 className="pt-3 text-white text-xl">
            Personal Portfolio April Fools
          </h2>
        </div>
        <div className="card-shadow p-4 cursor-pointer ">
          <div className="portfolio-card-image">
            <img
              className="w-full"
              src={portfolioImage}
              alt="portfolio Image"
            />
          </div>
          <p className="text-primary-yellow pt-2">Web Development</p>
          <h2 className="pt-3 text-white text-xl">
            Personal Portfolio April Fools
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
