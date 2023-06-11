import React, { useEffect, useRef } from "react";
import team from "../assets/images/team.png";
import { useState } from "react";
import { gsap } from "gsap";

const TechNetwork = () => {
  const teamAnim = useRef(null);
  const [button, setButton] = useState(null);
  const [limit, setLimit] = useState({
    start: 0,
    end: 3,
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

  useEffect(() => {
    gsap.from(teamAnim.current, {
      duration: 0.4,
      opacity: 0,
      x: button ? 900 : -900,
      ease: "power3.out",
    });
  }, [limit]);

  return (
    <div>
      <h1 className=" font-bold text-5xl text-white">
        My Tech <span className="text-primary-yellow ">Network</span>
      </h1>
      <div className="nav-btns flex justify-end gap-4">
        <div
          className="left-btn card-shadow p-4 cursor-pointer"
          onClick={() => {
            if (limit.start < 1) {
              return;
            }
            setButton(false);
            setLimit({ start: limit.start - 1, end: limit.end - 1 });
          }}
        >
          <svg
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
            setButton(true);
            setLimit({ start: limit.start + 1, end: limit.end + 1 });
          }}
        >
          <svg
            className=" rotate-180"
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
      <div className="grid grid-cols-2 pt-8 lg:grid-cols-3 gap-10">
        {sliderContent.slice(limit.start, limit.end).map((item) => (
          <div ref={teamAnim} className="card-shadow p-5" key={Math.random()}>
            <img className=" select-none" src={item.img} alt={item.name} />
            <h2 className=" text-white font-semibold text-xl pt-4">
              {item.name}
            </h2>
            <p className="text-sm font-normal text-primary-yellow pt-3">
              {item.subText}
            </p>
            <p className="text-white pt-4 font-normal text-sm">
              Experiences {item.experience}+ Years
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechNetwork;
