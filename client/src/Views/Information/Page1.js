import React, { PureComponent } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import "./Page1.css";

export class Page1 extends PureComponent {
  render() {
    return (
      <div>
        <Navbar /> <hr />
        {/* this is the main container */}
        <div className="container">
          {/* heading file */}
          <h1 className="text-center title">
            What is share market? How many types of market are there? Indian
            stock market NSE and BSE.
          </h1>
          {/* here we are flexed the display for content writting */}
          <div className="d-flex">
            {/* content display */}
            <div className="col-3 bg-dark text-white">Content list</div>
            {/* second block for the content elaboration */}
            <div className="col-9 bg-danger text-white">
              <p>
                Hey everyone, welcome back to our awesome blog! It's great to
                have you here again. 😊 In our last blog, we explored some
                crucial facts that can help you choose the right business, and
                we touched on a bit of Share Market info too. But guess what?
                Today, we're diving deeper! Get ready to explore the basics and
                the different segments of this exciting market. Who's excited to
                learn?
              </p>
              <hr />
              {/* from here we are starting the basic information  */}
              <span>
                <b>What is 'Share Market'?</b> <br />
                As we have seen in the last blog that Share Market is a business
                of buying and selling of company shares(pieces of ownership). In
                simple I'll explain in my words company needs money for business
                so they sell an share in the term of ownership. This is just for
                your understanding ok.
              </span>{" "}
              <hr />
              {/* types and little elaborated */}
              <span>
                <ol>
                  <b>Types of markets</b>
                  <li>NSE (National Stock Exchange)</li>
                  <li>BSE (Bombay Stock Exchange)</li>
                </ol>
                <p>
                  <b>1.NSE :</b> It is the indian largest finanacial market and
                  6th largest market in the world. <br />
                  <b>2.BSE :</b> This is one of the type of stock exchange. This
                  market allow investor to trade in stocks, equities, mutual
                  funds, commodities, derivatives, etc.
                </p>
              </span>
              {/* we are talking about the segments in stock market */}
              <span>
                <h3>Segments in Indian stock market</h3>
                <ul className="segment-flex">
                  <li className="#">Equity</li>
                  <li className="margin-segment">Commodities</li>
                  <li className="margin-segment">Derivatives</li>
                  <li className="margin-segment">Currencies</li>
                </ul>
              </span>
              <span>
                Before knowing the segments one by one let's know about market
                timings. So, market opens five day's a week. Market opens at
                9.15AM in the morning and closes at 3.30PM in the afternoon.
                Market are only close on Saturday, Sunday and main public
                holiday eg. Republic day, Independance day, Diwali. In this blog
                lets discuss these segments shortly ---
              </span> <br />
              <p>
                <b>1. Equity segment :</b> Some people defines equity as long
                term investment, reason behind that is you can buy any stock or
                share and sell whenever you want I mean you can hold the
                position for 1 day, 1 month, 1 year or for life time. There is
                no time limit of holding the position.
              </p>
              <p>
                <b>2.Commodities : </b> In this market investor can trade in
                primary products or raw materials. Such as crude oil, metals,
                natural gases.
              </p>
              <p>
                <b>3.Derivatives : </b>It is risky market said by most of the
                people by their experience. You don't have to worry about that
                because these are those people who don't have proper knowledge
                but what experiences say before entering in the derivative
                market know the basics and do the study of charts, do analysis,
                learn the price action and many more we will discuss later. It
                contains Future contracts and Option contracts these are mostly
                known by the people but again two are there they are Forward
                contract and Swap contracts.
              </p>
              <p>
                <b>4. Currencies : </b> In this segment traders trade in currency
                of various countries which are listed for trade.
              </p>{" "}
              <hr />
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We have seen some of
                the basic details of segments, time and there are lot of things
                we have to learn. Stay connected with us, see you guys in next
                blog...😇
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page1;
