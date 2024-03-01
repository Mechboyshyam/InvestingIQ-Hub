import React, { PureComponent } from "react";
import "./About.css";

export class About extends PureComponent {
  render() {
    return (
      <div>
        <h1 className="text-center ">𝒜𝒷𝑜𝓊𝓉 𝓊𝓈</h1>
        <h4 className="text-center mt-4">
          "Welcome to our learning platform. We are here to learn Investing in
          Stock Market from basic to advanace."
        </h4>
        <div class="container about-main mt-2">
          <div className="text-center1">
            <p>
              In today's scenario many people started youtube channel, few
              posting on social media platform like- Instagram, Telegram,
              Facebook,etc. Few are real and few only posting for getting
              followers, subscribers and for getting money. Again few days ago I
              have heared that people from trading platform call you and they
              say follow their strategy and get big profit. Be aware of such
              fraudients. Before listening to such clients you must have to
              visit their office, website provided by that client, reviews and
              clear all your doubts.
            </p>
            <p>
              Here we are giving you only education about how to earn in stock
              market. Our site doesn't provide call or refer a stock to buy. I'm
              going to tell you about market as our main moto after that you
              will get knowledge of Psycology of Money later on you will study
              the trading includes- candle stick pattern, chart pattern,
              support, resistance and many more things. 
            </p>
            <h2 className="text-center ">Happy Investing..</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
