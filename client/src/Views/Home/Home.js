import React from "react";
import "./Home.css";
import Hero from "../../Component/Home/Hero";
import Wish from './../../Component/wish/Wish.js';
function Home() {
  return (
    <div className="background">
      <Wish/>
      {/* hero section */}
      <div className="hero-home">
        <Hero />
      </div>
    </div>
  );
}
export default Home;