import React from "react";
import { AboutDCG, LevelMemebership,Team, MintProcess, Projects, ContactUs } from "./../index";
import "./aboutDcg/scss/index.scss";

export const MainPage = () => {
  return (
    <div className="mainDVG_Div">
      <AboutDCG />
      <LevelMemebership/>
      <Team/>
      <MintProcess/>
      <Projects/>
      <ContactUs/>
    </div>
  );
};
