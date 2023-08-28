import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div id="Right">
        <h3>
          Tails are wagging
          <br /> and pets are bragging!
          <br />
        </h3>

        <button>Explore More</button>
      </div>

      <div id="Left">
        <img
          src="https://shutterflywpe.wpenginepowered.com/wp-content/uploads/2018/10/puppy-quotes-768x512.jpg"
          alt="Image showing happy animal"
        />
      </div>
    </div>
  );
}

export default Home;
