import React from "react";

function Footer() {
  let t = new Date();
  let hrs = t.getHours();
  let m = "";
  if (hrs > 18) {
    m = "nightMode";
  } else if (hrs < 18) {
    m = "dayMode";
  }
  return <footer className={`${m}`}></footer>;
}

export default Footer;