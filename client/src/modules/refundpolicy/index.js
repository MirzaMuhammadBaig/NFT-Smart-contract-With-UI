import React from "react";
import "./scss/index.scss";
import { Footer, Header } from "../../layout";
import logo from "../../assets/images/logogsg.png";

export const RefundPolicy = () => {
  return (
    <div className="refund_policy w-full">
      <Header />
      <div className="nested_refund">
        <div className="child_refund">
          <div className="logo_refund">
            <img src={logo} alt="logo" />
          </div>
          <div className="refund_content py-6">
            <div className="points">
              <h1>Terms Of Service </h1>
              <p>Updated August 15, 2020</p>
            </div>
            <div className="points">
              <h4>General</h4>
              <h5>No Refund Policy</h5>
              <p>
                Because members immediately benefit from the knowledge of the
                online courses, download of content and mentoring programs that
                they purchase, we do not give refunds. Please realize that you
                are learning skills and bettering yourself just as people do
                when they go to college or trade schools. DCG ask for dedicated
                students who are truly ready to learn and grow. We are waiting
                to help you achieve your goals.
              </p>
            </div>
            <div className="points">
              <h4>Disclaimer</h4>
              <p>
                Although it is highly unlikely, this policy may be changed at
                any time at our discretion. If we should update this policy, we
                will post the updates to this page on our Website.
              </p>
              <p>
                If you have any questions or concerns regarding our privacy
                policy please direct them to admin@dcgelite.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
