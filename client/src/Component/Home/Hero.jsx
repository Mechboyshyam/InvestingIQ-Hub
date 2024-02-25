import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero__main">
      {/* left */}
      <div className="p-3 heroContent">
        <h1>INNOVATIVE</h1>
        <h1>SOLUTIONS FOR BUSINESSMEN</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          expedita.
        </p>
        <button type="button" className="btn bgTeal makeRound">
          OUR COMPANY
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