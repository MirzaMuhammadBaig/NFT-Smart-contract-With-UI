import React from "react";
import "./scss/index.scss";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer_section w-full">
      <div className="nested_footer flex justify-between items-center">
        <div className="compname">
          <h1>DCG Mastermind</h1>
        </div>
        <div className="links">
          <ul className="flex items-center gap-3">
            <li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/terms-service">Terms of Services</NavLink>
            </li>
            <li>
              <NavLink to="/refund-policy">Refund Policy</NavLink>
            </li>
          </ul>
        </div>
        <div className="social_links">
          <ul className="flex items-center gap-6">
            <ImFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsYoutube />
          </ul>
        </div>
      </div>
    </div>
  );
};
