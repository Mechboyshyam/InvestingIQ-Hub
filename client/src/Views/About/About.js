import React, { PureComponent } from "react";
import "./About.css";

export class About extends PureComponent {
  render() {
    return (
      <div>
        <h1 className="text-center ">𝒜𝒷𝑜𝓊𝓉 𝓊𝓈</h1>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <div class="alert back-color" role="alert">
                <p>
        <h4 className="text-center alert mt-4">
          "Welcome to our Stock Market Investing Platform! Let's learn together,
          from basics to advanced techniques. Join us on this exciting journey!"
        </h4>
                  Hey there! Ever noticed how many folks are diving into YouTube
                  or social media lately? Some are genuine creators, while
                  others are just chasing numbers and cash. Beware of those
                  promising quick riches, especially from trading platforms.
                  Always do your research, visit their sites, and read reviews
                  before trusting anyone.
                </p>
                <p>
                  Here, we're all about learning to thrive in the stock market!
                  📈 We're not here to sell you stocks or make quick bucks. Our
                  goal is to empower you with market knowledge first. Later,
                  we'll dive into fascinating topics like the Psychology of
                  Money and cool trading strategies.
                </p>
                <h2 class="text-center mt-4">Happy Investing!</h2>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="container about-main mt-2">
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
        </div> */}
      </div>
    );
  }
}

export default About;
