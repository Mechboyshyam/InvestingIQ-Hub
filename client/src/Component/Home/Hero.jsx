import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero__main">
      {/* left */}
      <div className=" heroContent">
        <h2 className="bold">Smart Investing Insights :</h2>
        <h2 className="bold">Your Gateway to Financial IQ</h2>
        <p className="text-align">
          Unlock the secrets of financial success with InvestingIQ-Hub, where we
          provide smart investing insights to impower you with the knowledge and
          skill needed to nevigate the complex word of finance. Elevate your
          financial IQ and make informed decisions for a prosperous future.
        </p>
        <Link to="blogs" className="text-light text-decoration-none">
          <span type="button" className="btn bgTeal makeRound">
            Start Learning -
          </span>
        </Link>
      </div>

      {/* right */}
      <div className="parentImgContainer">
        <img
          id="heroBanner"
          src="/Hero/blue color.png"
          alt="hero banner home"
          className="myImg"
        />
      </div>
    </section>
  );
};

export default Hero;
