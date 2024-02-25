import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero__main">
      {/* left */}
      <div className="p-3 heroContent">
        <h2 className="bold">Smart Investing Insights :</h2>
        <h2 className="bold">Your Gateway to Financial IQ</h2>
        <p>
          Unlock the secrets of financial success with InvestingIQ-Hub, where we
          provide smart investing insights to impower you with the knowledge and
          skill needed to nevigate the complex word of finance. Elevate your
          financial IQ and make informed decisions for a prosperous future.
        </p>
        <button type="button" className="btn bgTeal makeRound">
         <a href="/blogs" className="text-light text-decoration-none"> Start Learning -</a>
        </button>
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
