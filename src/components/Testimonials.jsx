import React from "react";
import team from "../assets/images/team.png";
import { useState, useEffect } from "react";
import { gsap } from "gsap";

const Testimonials = () => {
  const [limit, setLimit] = useState({
    start: 0,
    end: 1,
  });
  const sliderContent = [
    {
      id: 1,
      name: "Steve Recc",
      subText: "UI/UX Designer",
      img: team,
      experience: 1,
    },
    {
      id: 2,
      name: "David Ril",
      subText: "Web Develop",
      img: team,
      experience: 4,
    },
    { id: 3, name: "Liam Chro", subText: "Animator", img: team, experience: 5 },
    {
      id: 4,
      name: "John Doe",
      subText: "Flutter Expert",
      img: team,
      experience: 6,
    },
    { id: 5, name: "Den Crep", subText: "Writer", img: team, experience: 7 },
    { id: 6, name: "Stuart Rile", subText: "Editor", img: team, experience: 8 },
    {
      id: 7,
      name: "Sheldon Cooper",
      subText: "Blogger",
      img: team,
      experience: 9,
    },
    {
      id: 8,
      name: "Howard Walowitz",
      subText: "Content Writer",
      img: team,
      experience: 10,
    },
  ];

  return (
    <div id="testimonials">
      <h1 className=" font-bold text-5xl text-white">
        Client <span className="text-primary-yellow ">Testimonials</span>
      </h1>
      <div className="nav-btns flex justify-end gap-4">
        <div
          className="left-btn card-shadow p-4 cursor-pointer"
          onClick={() => {
            if (limit.start < 1) {
              return;
            }

            gsap.from(
              ".testtim",

              {
                x: 1000, // Move to the right
                yoyo: true, // Reverse the animation
                repeat: false, // Repeat indefinitely
                duration: 0.8, // Duration of each half of the animation
                ease: "power3.out", // Easing function
                stagger: 0.2,
              }
            );

            setLimit({ start: limit.start - 1, end: limit.end - 1 });
          }}
        >
          <svg
            type="button"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.57 6.69775L3.5 12.7678L9.57 18.8378"
              stroke="#818994"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.5 12.7676H3.66998"
              stroke="#818994"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          className="left-btn card-shadow p-4 cursor-pointer"
          onClick={() => {
            if (limit.end >= sliderContent.length) {
              return;
            }

            gsap.from(
              ".testtim",

              {
                x: -1000, // Move to the right
                yoyo: true, // Reverse the animation
                repeat: false, // Repeat indefinitely
                duration: 0.7, // Duration of each half of the animation
                ease: "power3.out", // Easing function
                stagger: 0.2,
              }
            );

            setLimit({ start: limit.start + 1, end: limit.end + 1 });
          }}
        >
          <svg
            type="button"
            className="rotate-180"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.57 6.69775L3.5 12.7678L9.57 18.8378"
              stroke="#818994"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.5 12.7676H3.66998"
              stroke="#818994"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="testtim ease-in">
        {sliderContent.slice(limit.start, limit.end).map((item) => (
          <div
            className="grid grid-cols-3 gap-2 md:gap-10 mt-10 "
            key={Math.random()}
          >
            <div className="card-shadow p-5 select-none col-span-1 ">
              <img className="w-full" src={item.img} alt={item.name} />
              <h2 className=" text-2xl font-bold text-white pt-4">
                {item.name}
              </h2>
              <p className="text-primary-yellow pt-4">
                Senior director at Bajigur.us
              </p>
            </div>
            <div className="card-shadow p-5 md:p-10 select-none col-span-2">
              <h1 className="text-white font-bold text-2xl pt-4">
                {item.subText}
              </h1>
              <p className="pt-4 text-sm">
                via Upwork - Mar 8,2020-Oct 22, 2022
              </p>
              <svg
                className="my-8"
                width="37"
                height="32"
                viewBox="0 0 37 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.6785 18.456C12.4945 19.352 14.2865 21.784 14.2865 24.984C14.2865 29.08 11.3425 31.896 7.6305 31.896C3.5345 31.896 0.8465 28.824 0.8465 24.984C0.8465 22.936 1.2305 21.4 2.5105 17.688L7.8865 0.0239944H14.0305L9.6785 18.456ZM31.4385 18.456C34.2545 19.352 36.0465 21.784 36.0465 24.984C36.0465 29.08 33.1025 31.896 29.3905 31.896C25.2945 31.896 22.6065 28.824 22.6065 24.984C22.6065 22.936 22.9905 21.4 24.2705 17.688L29.6465 0.0239944H35.7905L31.4385 18.456Z"
                  fill="#FF8A00"
                />
              </svg>
              <p className="pt-4 text-sm text-justify leading-none  md:leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
                vel lobortis tincidunt fames quisque mauris at diam. Nullam
                morbi ipsum turpis amet id posuere torto quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
