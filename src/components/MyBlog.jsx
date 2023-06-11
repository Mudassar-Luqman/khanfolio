import React from "react";
import myblog1 from "../assets/images/myblog1.png";
import myblog2 from "../assets/images/myblog2.png";
import myblog3 from "../assets/images/myblog3.png";

const MyBlog = () => {
  return (
    <div id="blogs">
      <h1 className=" font-bold text-5xl text-white">
        My <span className="text-primary-yellow ">Blog</span>
      </h1>
      <div className="grid grid:cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-8">
        <div className="card-shadow p-3">
          <div className="relative blog-card-image cursor-pointer duration-300 rounded-md">
            <img className="w-full" src={myblog1} alt="" />
            <div class="overlay"></div>
            <div class="absolute bottom-14 px-4">
              <span class=" text-white text-xl font-bold py-2">
                Changing people's lifestyles for the better
              </span>
            </div>
            <div class="absolute bottom-2 px-4">
              <span class="drop-shadow-2xl read-more text-primary-yellow text-base font-bold flex items-center gap-2 ">
                Read More
                <svg
                  className="read-more-arrow"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.025 4.94189L17.0833 10.0002L12.025 15.0586"
                    stroke="#FFB400"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.91666 10H16.9417"
                    stroke="#FFB400"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="card-shadow p-3">
          <div className="relative blog-card-image cursor-pointer duration-300 rounded-md">
            <img className="w-full" src={myblog2} alt="" />
            <div class="overlay"></div>
            <div class="absolute bottom-14 px-4">
              <span class=" text-white text-xl font-bold py-2">
                Changing people's lifestyles for the better
              </span>
            </div>
            <div class="absolute bottom-2 px-4">
              <span class="drop-shadow-2xl read-more text-primary-yellow text-base font-bold flex items-center gap-2 ">
                Read More
                <svg
                  className="read-more-arrow"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.025 4.94189L17.0833 10.0002L12.025 15.0586"
                    stroke="#FFB400"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.91666 10H16.9417"
                    stroke="#FFB400"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="card-shadow p-3">
          <div className="relative blog-card-image cursor-pointer duration-300 rounded-md">
            <img className="w-full" src={myblog3} alt="" />
            <div class="overlay"></div>
            <div class="absolute bottom-14 px-4">
              <span class=" text-white text-xl font-bold py-2">
                Changing people's lifestyles for the better
              </span>
            </div>
            <div class="absolute bottom-2 px-4">
              <span class="drop-shadow-2xl read-more text-primary-yellow text-base font-bold flex items-center gap-2 ">
                Read More
                <svg
                  className="read-more-arrow"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.025 4.94189L17.0833 10.0002L12.025 15.0586"
                    stroke="#FFB400"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.91666 10H16.9417"
                    stroke="#FFB400"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
