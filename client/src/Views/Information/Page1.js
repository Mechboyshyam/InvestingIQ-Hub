import React, { PureComponent } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import "./Page1.css";
import Thinking from "./../../Images/thinking.jpeg";

export class Page1 extends PureComponent {
  render() {
    return (
      <div>
        <Navbar /> <hr />
        {/* this is the main container */}
        <div className="container">
          <h2 className="text-light">
            Embarking on Your Financial Journey : A Beginner's Guide to Stock
            Market Success.
          </h2>
          {/* making two dives here for the content and the information  */}.
          <div className="d-flex text-white">
            <div className="col-4 bg-dark">Content List</div>
            <div className="col-8 bg-danger">
              <h4 className="text-center">
                "Welcome to our learning platform. We are here to learn
                Investing in Stock Market from basic to advanace."
              </h4>
              <p>
                Do you ever have que in your mind that who can invest? Is there
                any criteria for investing? How to invest? Few people say share
                market is gambling, really? You will get all ans of the
                questions listed here and also the questions in your mind.
              </p>{" "}
              <hr />
              <div className="text-center">
                <img className="img-fluid" src={Thinking} alt="jpeg" />
              </div>{" "}
              <hr />
              <p>
                <b>What is share? What is share market?</b>
                <br />
                When we divide the capital of any company in small small equal
                parts. That single small part is called as Share. <br />
                For eg. - If there is a company named as <i>InvestingIQ-Hub</i>
                having capital of 1,000/- Rs. If we divide this in 100 equal
                parts with same ammount then single part cost 10Rs. This small
                part called as Share. <br />
                👉 If you have to know the total share capital of company -{" "}
                <br />
                <span className="formula">
                  Total share capital = Total share of company x Share price
                </span>
                <br />
                <br />I think you might have understand that when you buy an
                share it means you are taking an ownership as per ammount of
                share you buy. <br />
                Moving to next question. Basically when you here market word you
                remember that there is selling and buying of vegetables and
                fruits. In the same way it is also market place where buying and
                selling of stocks occurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page1;
