import React from "react";
import "./Blogs.css";
import Thinking from "./../../Images/thinking.jpeg";
// import { useState } from "react";

function Blogs(){
    // const [currentBlog, setAllBlog] = useState("");
    return (
      <div className="parent main-1 mt-2">
        {/* this is the main container */}
        <div className="mt-2">
          <h3 className="text-center title-design">
            "Welcome aboard our blog! We're delighted to have you join us
            as we kick off this adventure together. Get ready to dive into
            intriguing topics and insightful discussions. Let's make this
            journey one to remember!"
          </h3>
          <hr />
        </div>
        <div>
          {/* making two dives here for the content and the information  */}
          <div className="d-flex flex-box text-align">
            <div className="col-4 text-center content p-3">Content List</div>
            <div className="col-8 blog">
              {/* <div className="text-center"><span className=" over-view">Overview</span></div> */}
              <div className="text-center">
                <h4 className="text-center title-design-topic ">
                "Embarking on Your Financial Journey : A Beginner's Guide to
                  Stock Market Success. "
                </h4>
                <img className="img-fluid" src={Thinking} alt="jpeg" />
              </div>
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
                👉 If you have to know the total share capital of company -
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
              <p>
                Stocks are differnciated into three categories - Small cap, Mid
                cap and Large cap. They differ from each other in terms of
                growth potential and risk. Small-caps have growth potential,
                mid-caps balance stability and expansion and large-caps are
                dependable, well-established businesses.
              </p>
              <p>
                There is no restriction to invest, it can be small investor or
                big mutual funds, FII and DII companies.
                <ul>
                  <li>
                    FII : Foreign Institutional Investor - These are the
                    institutions invest in our financial market from outside of
                    country which are registered or headquarterd.
                  </li>
                  <li>
                    DII : Domestic Institutional Investor - Institutions or
                    group of investor who choose to invest in financial market
                    within the country where they live. These investement
                    decisions are impacted by both political and economic
                    trends.
                  </li>
                </ul>
              </p>
              <hr />
              <span>
                <b>
                  Before investing you must have to know the benefits of these
                  business:-
                </b>
                <ol>
                  <li>
                    You will get more time, if you know very well about making
                    profit.{" "}
                  </li>
                  <li>
                    This business doesn't need proper place or office. You just
                    need your Laptop or Mobile.
                  </li>
                </ol>
              </span>
              {/* what is nse and bse */}
              <p>
                <b>What is NSE and BSE?</b>
                <ol>
                  <li>
                    NSE : It is a nifty index. It contains 50 big market cap
                    stocks, also called as NIFTY-50.
                  </li>
                  <li>
                    BSE : BSE is a Sensex. It contain 30 big market cap stocks.
                  </li>
                  <li>
                    There are some more indexes in the indian stock market:-
                    <ul>
                      <li>Banknifty</li>
                      <li>FinNifty</li>
                      <li>MidcapNifty</li>
                      <li>Bankex</li>
                    </ul>
                  </li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Blogs;
