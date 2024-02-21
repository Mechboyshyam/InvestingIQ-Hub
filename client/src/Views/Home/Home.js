import React from "react";
import "./Home.css";
import Hero from "../../Component/Home/Hero";
function Home() {
  return (
    <div className="background">
      {/* hero section */}
      <div className="mt-5">
        <Hero />
      </div>
    </div>
  );
}

export default Home;