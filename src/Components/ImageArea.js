import React, { useState, useEffect } from "react";
import "./Style/ImageArea.css";
import Painted from "./Images/PaintedBg.png";
import Original from "./Images/OriginalBg.png";

function ImageArea() {
  const [mousePos, setMousePos] = useState({});
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
    } else if (
      mousePos?.x > windowWidth / 2 - (windowWidth * 30) / 100 &&
      mousePos?.x < windowWidth / 2 + (windowWidth * 15) / 100 &&
      mousePos?.y > (windowHeight * 40) / 100 &&
      mousePos?.y < (windowHeight * 90) / 100
    ) {
      original.style.setProperty("--mask-grad", "50%");
      original.style.setProperty("--mask-size", "103%");
    } else if (
      mousePos?.x > windowWidth / 2 + (windowWidth * 15) / 100 &&
      mousePos?.y > (windowHeight * 40) / 100 &&
      mousePos?.y < (windowHeight * 90) / 100
    ) {
      original.style.setProperty("--mask-grad", "50%");
      original.style.setProperty("--mask-size", "70%");
    }else{
      original.style.setProperty("--mask-grad", "50%");
      original.style.setProperty("--mask-size", "103%");
    }
    window.addEventListener("mousemove", handleMouseMove);
  });

  return (
    <>
      <div className="mainContainer">
        <div className="textTag">FRONTEND DEVELOPER</div>
        <div className="imageParent ">
          <img src={Painted} className="imageBase"></img>
          <img src={Original} className="imageBase"></img>
        </div>
        <div className="textTag textRight">PROGRAMMER</div>
      </div>
    </>
  );
}

export default ImageArea;
