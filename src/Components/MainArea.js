import React, { useState, useEffect } from "react";
import "./Style/MainArea.css";

import Painted from "./Images/Painted.png";
import Original from "./Images/Original.png";
import ReactIcon from "./Images/Icons/ReactIcon.png";
import HtmlIcon from "./Images/Icons/HtmlIcon.png";
import CssIcon from "./Images/Icons/CssIcon.png";
import JSIcon from "./Images/Icons/JSIcon.png";
import CIcon from "./Images/Icons/C++Icon.png";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

function ImageArea() {
  const [mousePos, setMousePos] = useState({});
  const [opacityLeft, setopacityLeft] = useState(70);
  const [opacityRight, setopacityRight] = useState(70);
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    let original = document.querySelector(".imageBase:nth-child(2)");
    if (
      mousePos?.x < windowWidth / 2 - (windowWidth * 15) / 100 &&
      mousePos?.y > (windowHeight * 40) / 100 &&
      mousePos?.y < (windowHeight * 90) / 100
    ) {
      original.style.setProperty("--mask-grad", "50%");
      original.style.setProperty("--mask-size", "160%");
      setopacityLeft(100);
      setopacityRight(70);
    } else if (
      mousePos?.x > windowWidth / 2 - (windowWidth * 30) / 100 &&
      mousePos?.x < windowWidth / 2 + (windowWidth * 12) / 100 &&
      mousePos?.y > (windowHeight * 40) / 100 &&
      mousePos?.y < (windowHeight * 90) / 100
    ) {
      original.style.setProperty("--mask-grad", "50%");
      original.style.setProperty("--mask-size", "103%");
      setopacityLeft(70);
      setopacityRight(70);
    } else if (
      mousePos?.x > windowWidth / 2 + (windowWidth * 12) / 100 &&
      mousePos?.y > (windowHeight * 40) / 100 &&
      mousePos?.y < (windowHeight * 90) / 100
    ) {
      original.style.setProperty("--mask-grad", "50%");
      original.style.setProperty("--mask-size", "70%");
      setopacityLeft(70);
      setopacityRight(100);
    } else {
      original.style.setProperty("--mask-grad", "50%");
      original.style.setProperty("--mask-size", "103%");
      setopacityLeft(70);
      setopacityRight(70);
    }
    window.addEventListener("mousemove", handleMouseMove);
  });
  setTimeout(() => {
    let textLeft = document.getElementById("textLeft");
    textLeft.classList.add("aniLeft");
    let textRight = document.getElementById("textRight");
    textRight.classList.add("aniright");
  }, 700);

  return (
    <div className="mainContainer">
      <div style={{ display: "flex" }}>
        <div
          id="textLeft"
          className="textTag textLeft"
          style={{ opacity: `${opacityLeft}%`, transition: "0.7s ease" }}
        >
          <div>frontend developer</div>
          <div>
            <img src={HtmlIcon} className="icons"></img>
            <img src={CssIcon} className="icons"></img>
            <img src={JSIcon} className="icons"></img>
            <img src={ReactIcon} className="icons"></img>
          </div>
        </div>
        <div className="imageParent ">
          <img src={Painted} className="imageBase"></img>
          <img src={Original} className="imageBase"></img>
        </div>
        <div
          id="textRight"
          className="textTag textRight"
          style={{ opacity: `${opacityRight}%`, transition: "0.7s ease" }}
        >
          <div>&lt;programmer&gt;</div>
          <div>
            <img src={CIcon} className="icons"></img>
          </div>
        </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default ImageArea;
