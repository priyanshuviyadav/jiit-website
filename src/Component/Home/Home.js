import React from "react";
import MainBody from "./2-main-body/MainBody";
import PopUp from "./PopUp/PopUp";

const Home = () => {
  return (
    <div className='home' style={{ position: "relative" }}>
      <PopUp />
      <MainBody />
    </div>
  );
};

export default Home;
