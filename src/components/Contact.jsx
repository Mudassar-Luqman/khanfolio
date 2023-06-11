import React from "react";
import contact from "../assets/images/team.png";
import fb from "../assets/icons/fb.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3" id="contact">
      <div className="card-shadow-contact p-10 select-none col-span-1">
        <img className="w-full" src={contact} alt="Contact" />
        <h2 className=" text-xl font-bold text-white pt-6">
          Bilal Khan Nawabzada
        </h2>
        <p className=" pt-4">Chief Operating Officer</p>
        <p className=" pt-4">
          I am available for freelance work. Connect with me via and call in to
          my account.
        </p>
        <p className="pt-4">
          <span className="text-primary-yellow">Phone: </span> +62 123 6700 411
        </p>
        <p className="pt-4">
          <span className="text-primary-yellow">Email: </span>nevine@gmail.com
        </p>

        <div className="social-icons  flex gap-4 mt-8">
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
      <div className="contact-form p-14 col-span-2">
        <div className=" relative ">
          <label for="name" className="primary-text-gray text-sm">
            Your Name (required)
          </label>
          <input
            type="text"
            id="name"
            className=" rounded-lg mt-2 border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 duration-200   text-base focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:border-transparent"
          />
        </div>
        <div className=" relative pt-6">
          <label for="email" className="primary-text-gray text-sm">
            Your Email (required)
          </label>
          <input
            type="email"
            id="email"
            className=" rounded-lg mt-2 border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 duration-200    text-base focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:border-transparent"
            name="email"
          />
        </div>

        <div className=" relative pt-6">
          <label for="subject" className="primary-text-gray text-sm">
            Your Email (required)
          </label>
          <input
            type="text"
            id="subject"
            className=" rounded-lg mt-2 border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 duration-200    text-base focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:border-transparent"
          />
        </div>
        <div className=" relative pt-6">
          <label for="subject" className="primary-text-gray text-sm">
            Your Message
          </label>
          <textarea
            className=" rounded-lg mt-2 border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 duration-200 bg-[#23272C]  text-base focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:border-transparent"
            name=""
            id=""
            cols="30"
            rows="6"
          ></textarea>
        </div>

        <button className="mt-5 bg-primary-yellow py-3 px-8 rounded-md text-white hover:bg-[#FF8600]">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
