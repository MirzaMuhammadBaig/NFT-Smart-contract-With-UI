import React from "react";
import "./scss/index.scss";

export const LevelMemebership = () => {
  return (
    <div className="levelMemb_section w-full py-9">
      <div className="nested_levelMemb">
        <div className="heading_content flex justify-between items-center">
          <h1>5 Levels of Membership</h1>
          <div>
            <button>Get our Newsletters</button>
          </div>
        </div>
        <div className="reading_section my-10">
          <p className="italic">
            The first 1,000 passes will grant exclusive access to DCG gated
            services. DCG is a global mastermind and DCG Elite pass grants
            access to virtual and physical resources based on 5 different
            levels. Holding one of the original 1,000 passes enhances your DCG
            Membership within the DCG Mastermind network. (Apply For DCG
            Membership First). The Five Levels of DCG are:
          </p>
          <div className="sub_heading my-4">
            <span className="font-bold">OFFICIAL MEMBER PASS </span>
            <p className="inline pl-2"> – Membership Enhanced VIP Access.</p>
          </div>
          <div className="sub_heading my-4">
            <span className="font-bold">TEAM MEMBER PASS</span>
            <p className="inline pl-2">
              – Internal Special Access To DCG Mastermind Teams – Special Invite
              To DCG Mastermind Experiences and in-person meetups.
            </p>
          </div>
          <div className="sub_heading my-4">
            <span className="font-bold">OG MEMBER PASS</span>
            <p className="inline pl-2">
              {" "}
              – Veterans members inside DCG – Special Access – Verified Stamp –
              OG Gated Discord Channel – Experienced Members.
            </p>
          </div>
          <div className="sub_heading my-4">
            <span className="font-bold">DCG VERIFIED ELITE MEMBER</span>
            <p className="inline pl-2">
              – 12 Month Time Locks – New Pass Issued Every May! Work directly
              with DCG FOUNDER – Renewable Every 12 Months – Verified Stamp
              -Unlocks Private Investment Team – FaceTime Meetings.
            </p>
          </div>
          <div className="sub_heading my-3">
            <span className="font-bold">DCG LIFETIME ACCESS MEMBER PASS</span>
            <p className="inline pl-2">
              – Most Prestigious Access – VERIFIED MEMBER CHECK MARK – SOFTWARE
              ACCESS, 1 st INVESTMENT ACCESS, BETA ACCESS TO EVERYTHING NEW TO
              DCG – Exclusive ALL Access Within DCG FOR LIFE OF ACTIVE
              MEMBERSHIP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
