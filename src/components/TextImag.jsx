import React from "react";
import edu2 from "../assets/images/edu2.png";

const TextImag = ({ text }) => {
  return (
    <div
      class="p-3 rounded-lg overflow-hidden shadow-lg relative "
      data-aos="zoom-in-up"
    >
      <img class="object-cover w-full h-full" src={edu2} alt="education" />
      <div class="px-6 py-2 absolute m-auto  left-0 right-0 bottom-0 -translate-y-6 z-10 bg-[#1d1d1d]  w-11/12 opacity-75 rounded-sm">
        <h4 class="pt-2 font-semibold text-center text-white tracking-tight text-xl mb-3">
          {text}
        </h4>
      </div>
      {/* <div className="py-20"></div> */}
    </div>
  );
};

export default TextImag;
