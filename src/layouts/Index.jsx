import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Index = () => {
  const ref = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        ref.current.style.transform = "translateX(0%)";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex well-image">
      <div
        ref={ref}
        className="fixed h-full border-r responsive-sidebar z-50 border-dark-color"
      >
        <div
          className="cursor-pointer burger-menu"
          onClick={() => {
            ref.current.style.transform = "translateX(-100%)";
            setShowMenu(false);
          }}
        >
          <svg
            className="w-5 absolute right-4 z-10"
            width="61"
            height="62"
            viewBox="0 0 61 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.05673 57.6932L57.4433 4.30668"
              stroke="#FFB400"
              stroke-width="7"
              stroke-linecap="round"
            />
            <path
              d="M4 5L57.3866 58.3866"
              stroke="#FFB400"
              stroke-width="7"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <SideBar />
      </div>
      <div className="outlet-screen">
        <Outlet />
      </div>
      {showMenu === false && (
        <div
          className="burger-menu delay-1000"
          onClick={() => {
            ref.current.style.transform = "translateX(0%)";

            setShowMenu(true);
          }}
        >
          <svg
            className="w-7 absolute left-4 z-10 cursor-pointer"
            width="83"
            height="49"
            viewBox="0 0 83 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H79.5"
              stroke="#FFB400"
              stroke-width="7"
              stroke-linecap="round"
            />
            <path
              d="M4 25H79.5"
              stroke="#FFB400"
              stroke-width="7"
              stroke-linecap="round"
            />
            <path
              d="M4 45H79.5"
              stroke="#FFB400"
              stroke-width="7"
              stroke-linecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Index;
