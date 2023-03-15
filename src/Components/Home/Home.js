import React from "react";
import "../../scss/index.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="intro">
        <div className="leftIntro">
          <h5 className="barlow-reg">So, you want to travel to</h5>{" "}
          <h1 className="belfair-3xl ">Space</h1>
          <p className="barlow-sm">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="rightIntro">
          <Link to="destination">
            <button className="belfair-reg">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
