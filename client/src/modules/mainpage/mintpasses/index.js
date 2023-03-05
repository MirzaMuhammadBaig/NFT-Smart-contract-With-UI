import React, { useState } from "react";
import { useWeb3React } from '@web3-react/core';
import "./scss/index.scss";
import memebrgif from "../../../assets/images/Member-GIF.gif";
import teamgif from "../../../assets/images/TeamMember-GIF.gif";
import OGgif from "../../../assets/images/OG-GIF.gif";
import Elitegif from "../../../assets/images/Elite-GIF.gif";
import lifegif from "../../../assets/images/Lifetime-GIF.gif";
import { ethers } from "ethers";
import abi from '../../../abi/abi.json';

export const MintProcess = () => {

  const { library, account } = useWeb3React();

  const [tokenId, setTokenId] = useState(1);

  const contract_address = abi.contractAddress;

  async function BuyDCGNFTWIth5Eth() {
    if (library !== 'undefined') {
      try {
        const signer = library.getSigner(account);
        const contract = new ethers.Contract(contract_address, abi.abi, signer);
        const sendTX = await contract.buyDCGNFT(tokenId, { gasLimit: 6000000, value: "5000000000000000000" });
        await sendTX.wait();
        const Daimond = await contract.diamond();
        setTokenId(Daimond);
        const check = sendTX.toString()
        console.log(check)
      }
      catch (err) {
        console.log(err)
      }
    }
  }
  async function BuyDCGNFTWIth3Eth() {
    if (library !== 'undefined') {
      try {
        const signer = library.getSigner(account);
        const contract = new ethers.Contract(contract_address, abi.abi, signer);
        const sendTX = await contract.buyDCGNFT(tokenId, { gasLimit: 6000000, value: "3000000000000000000" });
        await sendTX.wait();
        const Daimond = await contract.diamond();
        setTokenId(Daimond);
        const check = sendTX.toString()
        console.log(check)
      }
      catch (err) {
        console.log(err)
      }
    }
  }
  async function BuyDCGNFTWIth1Eth() {
    if (library !== 'undefined') {
      try {
        const signer = library.getSigner(account);
        const contract = new ethers.Contract(contract_address, abi.abi, signer);
        const sendTX = await contract.buyDCGNFT(tokenId, { gasLimit: 6000000, value: "1000000000000000000" });
        await sendTX.wait();
        const Daimond = await contract.diamond();
        setTokenId(Daimond);
        const check = sendTX.toString()
        console.log(check)
      }
      catch (err) {
        console.log(err)
      }
    }
  }
  async function BuyDCGNFTWIthHalfEth() {
    if (library !== 'undefined') {
      try {
        const signer = library.getSigner(account);
        const contract = new ethers.Contract(contract_address, abi.abi, signer);
        const sendTX = await contract.buyDCGNFT(tokenId, { gasLimit: 6000000, value: "500000000000000000" });
        await sendTX.wait();
        const Daimond = await contract.diamond();
        setTokenId(Daimond);
        const check = sendTX.toString()
        console.log(check)
      }
      catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className="mint_process w-full py-10">
      <div className="nested_mintprocess">
        <div className="heading">
          <h1>MINT YOUR PASSES HERE</h1>
        </div>
        <div className="mintCards">
          <div className="childCards">
            <img src={lifegif} alt="lifegif" />
            <div>
              <h2>Lifetime Member</h2>
              <p className="text-sm">
                Mastermind Income Generation Models and Recognized As Official
                DCG Mastermind Partner – Most exclusive relationships With DCG
                FOUNDER – Lifetime access to DCG Metaverse, and gated
                communities within DCG. Get visibility and consideration to join
                the Investment Club and Partnership Opportunities in the crypto
                space. Mastermind Affiliate Builder, For Businesses Owners.
                Revenue Split Discord Unlocked.
              </p>
              <p className="supply">MAX SUPPLY 50</p>
              <div className="text-lg py-1 text-center font-bold italic">
                Price: 5 ETH
              </div>
              <div className="flex justify-center my-1">
                {tokenId < 50 ? (
                <button onClick={BuyDCGNFTWIth5Eth}>Mint Now</button>
                ) : (
                  null
                )}
              </div>
            </div>
          </div>
          <div className="childCards">
            <img src={Elitegif} alt="Elitegif" />
            <div>
              <h2>Elite Member</h2>
              <p className="text-sm">
                Enhanced 12-month DCG Elite membership. Unlocks Special Access
                To DCG ELITE Investment Club and Personal Mentorship. Option to
                renew every 12 months in May. Elite NFT holders have access to
                the DCG ELITE Investment club, private coaching, and monthly 1
                on 1 meetings. ELITE Members get access to DCG founding members
                and access to group buys inside the DCG investment club. Grow
                your account, with the most exclusive alpha and access. All
                Other Benefits Included OG, Team, and Membership.
              </p>
              <p className="supply">MAX SUPPLY 150</p>
              <div className="text-lg py-1 text-center font-bold italic">
                Price: 3 ETH
              </div>
              <div className="flex justify-center my-1">
                {tokenId >= 50 && tokenId < 200 ? (
                <button onClick={BuyDCGNFTWIth3Eth}>Mint Now</button>
                ) : (
                  null
                )}
              </div>
            </div>
          </div>
          <div className="childCards">
            <img src={OGgif} alt="OGgif" />
            <div>
              <h2>OG Member</h2>
              <p className="text-sm">
                Holders of the OG Pass will be grandfathered into all DCG
                founding member’s benefits. Mastermind information, contributor
                of the mastermind alpha data, and pre-release information.
                Special OG Discord gate and early access to original Mastermind
                Experiences. Special whitelisted projects and unlocks special
                access to masterclasses within DCG. Pre-recorded and live
                classes access. No expiration on OG member passes.
              </p>
              <p className="supply">MAX SUPPLY 200</p>
              <div className="text-lg py-1 text-center font-bold italic">
                Price: 1 ETH
              </div>
              <div className="flex justify-center my-1">
                {tokenId >= 200 && tokenId < 400 ? (
                <button onClick={BuyDCGNFTWIth1Eth}>Mint Now</button>
                ) : (
                  null
                )}
              </div>
            </div>
          </div>
          <div className="childCards">
            <img src={teamgif} alt="memebrgif" />
            <div>
              <h2>Team Member</h2>
              <p className="text-sm">
                Official Team Membership Pass Grants access to special teams
                inside the mastermind. Unlock special teams within DCG, access
                to alerts, access mastermind events, visibility to team
                activity, and special team training held within DCG.
              </p>
              <p className="supply">MAX SUPPLY 250</p>
              <div className="text-lg py-1 text-center font-bold italic">
                Price: 0.5 ETH
              </div>
              <div className="flex justify-center my-1">
                {tokenId >= 400 && tokenId < 650 ? (
                <button onClick={BuyDCGNFTWIthHalfEth}>Mint Now</button>
                ) : (
                  null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
