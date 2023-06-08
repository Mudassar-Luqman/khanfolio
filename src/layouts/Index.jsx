import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const Index = () => {
  return (
    <div className="flex ">
      <div
        className="fixed h-full border-r bg-primary-dark border-dark-color"
        style={{ width: "18%" }}
      >
        <SideBar />
      </div>
      <div style={{ width: "82%", marginLeft: "18%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
