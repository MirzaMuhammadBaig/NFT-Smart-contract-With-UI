import React from "react";
import "./scss/index.scss";
import {
  JamarJames,
  TeailaKidd,
  NickHenderson,
  SymoneGamble,
  CryptoBlack,
  RicoC,
  Dennis,
  dazzle,
  mike,
  MoJackson,
  MarkLewis,
  BrandonH,
  GTucker,
  RandyBell,
  LinkGreen,
} from "../../../assets";

const teamMember=[
    {id: 1, img: JamarJames, name: "Jamar James", jobdesc: "Founder and creator"},
    {id: 2, img: TeailaKidd, name: "Teaila Kidd", jobdesc: "DCG Partner and NFT Specialist"},
    {id: 3, img: NickHenderson, name: "Nick Henderson", jobdesc: "DCG Partner and Technical coach"},
    {id: 4, img: SymoneGamble, name: "Symone Gamble", jobdesc: "DCG Member Elite Team"},
    {id: 5, img: CryptoBlack, name: "Crypto Black", jobdesc: "DCG Elite Partner"},
    {id: 6, img: RicoC, name: "Rico C.", jobdesc: "Technical Advisor"},
    {id: 7, img: Dennis, name: "Dennis S.", jobdesc: "Mastermind Team Member"},
    {id: 8, img: dazzle, name: "Dazzle", jobdesc: "DCG Elite Member"},
    {id: 9, img: mike, name: "Mike Miller", jobdesc: "DCG Partner and Day Trader"},
    {id: 10, img: MoJackson, name: "Mo Jackson", jobdesc: "DCG Elite Stock Trader"},
    {id: 11, img: MarkLewis, name: "Mark Lewis", jobdesc: "DCG Elite Member and Coach"},
    {id: 12, img: BrandonH, name: "Brandon H.", jobdesc: "DCG Elite Member and Coach"},
    {id: 13, img: GTucker, name: "G. Tucker", jobdesc: "DCG Elite Coach"},
    {id: 14, img: RandyBell, name: "Randy Bell", jobdesc: "DCG Elite Trader and Coach"},
    {id: 15, img: LinkGreen, name: "Link Green", jobdesc: "DCG Elite Member and Coach"},

]


export const Team = () => {
  return (
    <div className="team_section w-full py-10">
      <div className="nested_section">
        <div className="team_sectionone">
          <h1>The Mastermind Network</h1>
          <p className="py-4">
            NFT Card will give you access to join the mastermind network. Your
            token allows you to explore our private information network,
            comprised of multiple 7-figure traders, analysts, and sector
            specialists. Every base in the trading world is covered.
          </p>
          <div className="team_member">
            {teamMember.map((value) =>{
                return(
                    <div className="childTeam p-5" key={value.id}>
                    <div  className="teammemeber flex gap-3 items-center">
                      <img src={value.img} alt={value.img} />
                      <div>
                        <p>{value.name}</p>
                        <p>{value.jobdesc}</p>
                      </div>
                    </div>
                  </div>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
