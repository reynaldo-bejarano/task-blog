import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Principal = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Principal;
