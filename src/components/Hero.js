import React from "react";

function Hero() {
  let heroText = "Welcome to Football";
  let styles = {
    color: "white",
    textShadow: "1px 1px 5px #000000",
    fontSize: 30,
    maxWidth: 300
  };
  return (
    <div className="hero">
      <h3 style={styles}>{`${heroText}`}</h3>
    </div>
  );
}

export default Hero;
