import React, { useState } from "react";
import "./scss/index.scss";
import gifDSG from "../../../assets/images/Member-GIF.gif";
import { FaShoppingCart } from "react-icons/fa";
import { useWeb3React } from '@web3-react/core';
import { ethers } from "ethers";
import abi from '../../../abi/abi.json';

export const AboutDCG = () => {

  const { library, account } = useWeb3React();

  const [tokenId, setTokenId] = useState(1);

  const contract_address = abi.contractAddress;

  async function BuyDCGNFTWIth5Eth() {
    if (library !== 'undefined') {
      try {
        const signer = library.getSigner(account);
        const contract = new ethers.Contract(contract_address, abi.abi, signer);
        const sendTX = await contract.buyDCGNFT(tokenId, { gasLimit: 6000000, value: "100000000000000000" })
        await sendTX.wait();
        const Daimond = await contract.diamond();
        setTokenId(Daimond);
        const check = sendTX.toString();
        console.log(check);
      }
      catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className="mainSection_aboutDCG">
      <div className="nested_aboutDCG">
        <div className="nestedSection">
          <div className="heading">
            <h2>Mastermind Alliance</h2>
            <h1>DCG Elite Membership Passes</h1>
            <h5 className="my-3">
              Become a member of the top Crypto and Stock trading group in
              America!
            </h5>
          </div>
          <div className="description">
            <p>
              The Elite DCG pass is your key to “access” alpha data, exclusive
              membership based on planned meetups, IRL events, DCG-related
              drops, and our private DCG Gated Discord of the future! The
              Metaverse is a crowded space, and as DCG Mastermind grows
              globally, these passes ensure you are connected and prove
              ownership inside the DCG community. You will become part of a real
              community, your very own secretive society for those seeking
              financial freedom.{" "}
            </p>
            <ul>
              <li>
                The passes are designed to change over time as new utilities and
                functions will be added.
              </li>
              <li>
                As a DCG Elite Mastermind pass holder, you will have special
                access to future offerings, participate in special DCG teams,
                access early whitelist, bid on internal DCG projects get early
                access to partner drops and IRL activations, with exclusive
                access to future events based on your pass level.
              </li>
            </ul>
          </div>
          <div className="youtube_video w-full overflow-hidden">
            {/* <iframe
              src="https://www.youtube.com/embed/VG8NQOfy3Qs"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            /> */}
            <iframe
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/VG8NQOfy3Qs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div></div>
        </div>
        <div className="nesteSection_two">
          <div className="gif_logo">
            <img src={gifDSG} alt="gifDSG" />
          </div>
          <div className="timer">
            <p>00d :</p>
            <p>00h :</p>
            <p>00m :</p>
            <p>00s </p>
          </div>
          <div className="content_Box">
            <h1 className="py-2s">DCG Member</h1>
            <p className="my-2">
              The official membership pass has instant utility, metaverse access
              and proof of membership. All members will have access to our gated
              discord and web 3.0 properties based on membership level. As a
              membership pass holder, you will be rewarded randomly throughout
              the year with access and physical products. DCG Whitelist, special
              AMA, and guaranteed membership inside of DCG with an active
              subscription. Access may be limited to those without a membership
              pass in the future.
            </p>
            <div className="text-center my-2 price_eth">
              MAX SUPPLY 350 <br /> Price: 0.1 ETH
            </div>
            <div className="flex justify-center items-center">
              {tokenId >= 650 ? (
                <button onClick={BuyDCGNFTWIth5Eth}>
                  <FaShoppingCart className="inline -mt-2 mr-2" />{" "}
                  <span>Mint Now</span>{" "}
                </button>
              ) : (
                null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
