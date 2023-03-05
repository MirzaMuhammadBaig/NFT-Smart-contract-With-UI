import React, { useEffect, useState } from "react";
import "./scss/index.scss";
import logo from "../../assets/images/logogsg.png";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [balance, setBalance] = useState(0);

  const { activate, deactivate, chainId, active, account } = useWeb3React();

  // Making the injected trust wallet here
  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 137],
  });

  // connting to metamask
  const metamask = async () => {
    try {
      await activate(injected);
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <div className="navbar_Section">
      <div className="nested_navbarSection">
        <div className="navbar_contentSection">
          <div className="logo">
            <NavLink to={"/"}>
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="links">
            <NavLink
              className={"px-3"}
              to={"https://www.facebook.com/jamarjames11"}
              target="_blank"
            >
              Facebook
            </NavLink>
            <NavLink
              className={"px-3"}
              to={"https://www.instagram.com/jamarjames/"}
              target="_blank"
            >
              Instagram
            </NavLink>
            <NavLink
              className={"px-3"}
              to={
                "https://dcgelitenft.com/metaverse/?q=7e4sgze56b#pw=XHd0FYr7Pl_GLdKABx3S9A"
              }
              target="_blank"
            >
              DCG Metaverse
            </NavLink>
          </div>
          <div className="btn_header">
            {!active ? (
              <button onClick={metamask}>Connect</button>
            ) : (
              <button>
                {" "}
                {account === undefined
                  ? "Connect Wallet"
                  : account === null
                  ? "None"
                  : `${account.substring(0, 6)}...${account.substring(
                      account.length - 4
                    )}`}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
