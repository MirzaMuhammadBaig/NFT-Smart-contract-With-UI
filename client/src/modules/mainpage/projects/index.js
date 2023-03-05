import React from "react";
import "./scss/index.scss";
import { NavLink } from "react-router-dom";
import {
  gsg,
  // nipsey,
  jayz,
  The_Star_of_The_Show_Thumb,
  the8020,
  nonamethumb_1,
  // series,
  Demo_new,
} from "../../../assets/index";

// nipsey,
  // jayz,
  // NewGalleryPass_fabian,
  // nonamethumb_1,
  // series,
  // Demo_new
export const Projects = () => {
  return (
    <div className="w-full py-10 project_section">
      <div className="nested_project">
        <h1 className="py-4">Partner Projects</h1>
        <div className="project_cataloge">
          <div className="projectCard">
            <img src={gsg} alt="imgownerLogo1" loading="lazy" />
            <p className="desc">GSG Digital Network</p>
            <div className="flex justify-between items-center">
              <p>Multi Chain</p>
              <button>Visit Site</button>
            </div>
          </div>
          <div className="projectCard">
            {/* <img src={nipsey} alt="nipsey" loading="lazy" /> */}
            <p className="desc">Martin Underwood | Nipsey Hustle</p>
            <div className="flex justify-between items-center">
              <p>Polygon/Binance</p>
              <button>Visit Site</button>
            </div>
          </div>
          <div className="projectCard">
            <img src={the8020} alt="NewGalleryPass_fabian" loading="lazy" />
            <p className="desc">The 80/20 Social Defi</p>
            <div className="flex justify-between items-center">
              <p>Multi Chain</p>
              <button>Visit Site</button>
            </div>
          </div>
          <div className="projectCard">
            {/* <img src={series} alt="series" loading="lazy" /> */}
            <p className="desc">Lenny Llama Beat Club</p>
            <div className="flex justify-between items-center">
              <p>Polygon/Binance</p>
              <NavLink to="https://gsgnft.com/web3/pages/lennys-llamas.html"  target={"_blank"}>Visit Now</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
