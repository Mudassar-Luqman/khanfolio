import React from "react";
import galleryone from "../assets/images/galleryone.png";
import gallerytwo from "../assets/images/gallerytwo.png";
import gallerythree from "../assets/images/gallerythree.png";
import gallyfour from "../assets/images/gally4.png";
import galleyfive from "../assets/images/gally5.png";
import gallysix from "../assets/images/gally6.png";
import gallyseven from "../assets/images/gally7.png";
import gallyeight from "../assets/images/gally8.png";

const Highlights = () => {
  return (
    <div className="">
      <h1 className=" font-bold text-5xl text-white">
        High <span className="text-primary-yellow ">lights</span>
      </h1>

      <div className="card-shadow mt-14">
        <div className="gallery p-4">
          <div className=" relative hover:scale-110 cursor-pointer duration-300 gallery-box-one ">
            <img src={galleryone} alt="" />

            <div class="absolute bottom-10 left-0 w-full flex items-center justify-center">
              <span class="bg-black opacity-50 text-white text-xs font-bold px-12 py-2 rounded-full text-center">
                Your Text Here
              </span>
            </div>
          </div>
          <div className=" relative hover:scale-110 cursor-pointer duration-300  rounded-md">
            <img src={gallerytwo} alt="" />
            <div class="absolute bottom-5 left-0 w-full flex items-center justify-center">
              <span class="bg-black opacity-50 text-white text-xs font-bold px-12 py-2 rounded-full text-center">
                Your Text Here
              </span>
            </div>
          </div>
          <div className="relative hover:scale-110 cursor-pointer duration-300 rounded-md">
            <img src={gallerythree} alt="" />
            <div class="absolute bottom-5 left-0 w-full flex items-center justify-center">
              <span class="bg-black opacity-50 text-white text-xs font-bold px-12 py-2 rounded-full text-center">
                Your Text Here
              </span>
            </div>
          </div>
          <div className="relative hover:scale-110 cursor-pointer duration-300 rounded-md">
            <img src={gallyfour} alt="" />
            <div class="absolute bottom-5 left-0 w-full flex items-center justify-center">
              <span class="bg-black opacity-50 text-white text-xs font-bold px-12 py-2 rounded-full text-center">
                Your Text Here
              </span>
            </div>
          </div>
          <div className="relative hover:scale-110 cursor-pointer duration-300 rounded-md">
            <img src={galleyfive} alt="" />
            <div class="absolute bottom-5 left-0 w-full flex items-center justify-center">
              <span class="bg-black opacity-50 text-white text-xs font-bold px-12 py-2 rounded-full text-center">
                Your Text Here
              </span>
            </div>
          </div>

          <div className="relative hover:scale-110 cursor-pointer duration-300 rounded-md gallery-box-two">
            <img src={gallysix} alt="" />
            <div class="absolute bottom-5 left-0 w-full flex items-center justify-center">
              <span class="bg-black opacity-50 text-white text-xs font-bold px-12 py-2 rounded-full text-center">
                Your Text Here
              </span>
            </div>
          </div>
          <div className="relative hover:scale-110 cursor-pointer duration-300 rounded-md">
            <img src={gallyeight} alt="" />
            <div class="absolute bottom-5 left-0 w-full flex items-center justify-center">
              <span class="bg-black opacity-50 text-white text-xs font-bold px-12 py-2 rounded-full text-center">
                Your Text Here
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
