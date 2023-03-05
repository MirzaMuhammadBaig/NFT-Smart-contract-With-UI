import React from "react";
import "./scss/index.scss";
import logo from "../../../assets/images/logogsg.png";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import {BsFillCalendarFill} from "react-icons/bs";
import {MdLocationOn} from "react-icons/md"
export const ContactUs = () => {
  return (
    <div className="contactus_section w-full py-10">
      <div className="nested_section">
        <div className="content_contact">
          <div className="contact_data">
            <h1>
              Become a member of the top Crypto and Stock trading group in
              America.
            </h1>
            <p>
              Verified DCG NFT holders will have access to whitelist raffles,
              rights to vote on metaverse projects, community lead suggestions
              and gain access to live market updates via proven successful
              traders.
            </p>
            <button>Learn More</button>
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        {/* form */}
        <div className="form py-10">
          <div className="heading_form">
            <h1>Contact Us</h1>
          </div>
          <div className="nested_form flex justify-between">
            <ul className="mt-4">
              <li>
                <MdEmail />
                <a href="mailto:jamar@mastermindculture.com">
                  {" "}
                  jamar@mastermindculture.com
                </a>
              </li>
              <li>
                <AiFillPhone />
                <a href="tel:+1(800) 965-1572"> +1(800) 965-1572</a>
              </li>
              <li>
                <BsFillCalendarFill />
                <p>Mastermind Culture, LLC</p>
              </li>
              <li>
                <MdLocationOn />
                <p>16192 Costal Highway Lewes, DE 19958 </p>
              </li>
            </ul>
            <div className="form_input py-5">
              <form>
                <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name" />
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Email" />
                </div>
                <div>
                <label htmlFor="message">Message</label>
                {/* <input type="text" id="name" placeholder="Username" /> */}
                <textarea  id="message" rows="3" placeholder="Message"></textarea>
                </div>
                <div className="my-3">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
