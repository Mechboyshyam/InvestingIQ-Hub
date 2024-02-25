import React, { PureComponent } from "react";
import './About.css';

export class About extends PureComponent {
  render() {
    return (
      <div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-6">
              <h2>
                <b>Discovering the Share Market: Your Guide to Financial Freedom </b>
              </h2>
              <p>
                Welcome to our Share Market Learning Blog! Here, we delve into
                the fascinating world of stock markets, equipping you with
                essential knowledge and strategies to navigate the complexities
                of investing. Whether you're a beginner or seasoned investor,
                our goal is to empower you with insights and tips to make
                informed decisions and embark on your journey towards financial
                independence. Let's learn and grow together as we unlock the
                secrets of the share market!
              </p>
            </div>
            <div class="col-md-6">
              <img
                src="https://static.toiimg.com/thumb/msid-105755204,width-400,resizemode-4/105755204.jpg"
                alt="Jpg"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
