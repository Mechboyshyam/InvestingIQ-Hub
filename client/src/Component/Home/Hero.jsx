import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero__main d-flex">
      {/* left */}
      <div className="p-3">
        <h1>INNOVATIVE</h1>
        <h1>SOLUTIONS FOR BUSINESSMEN</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          expedita.
        </p>
        <button type="button" className="btn bgGreen makeRound">
          OUR COMPANY
        </button>
      </div>

      {/* right */}
      <div className="">
        <img
          id="heroBanner"
          src="/Hero/HeroBanner.jpeg"
          alt="hero banner home"
          className="img-thumbnail"
        />
      </div>
    </section>
  );
};

export default Hero;