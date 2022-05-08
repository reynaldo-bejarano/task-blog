import React from "react";
import logo from "../img/gif-logo.svg";

const Home = () => {
  return (
    <section className="container ">
      <div className="d-flex justify-content-center mt-5">
        <img
          src={logo}
          alt="logo"
          height="300px"
          width="300px"
          className="mt-5"
        />
      </div>
      
    </section>
  );
};

export default Home;
