import React, { useState, useEffect } from "react";
import "./Style/MainArea.css";
import Typed from "typed.js";
import Painted from "./Images/Painted.png";
import Original from "./Images/Original.png";
import Udaipur from "./Images/Udaipur.jpg";
import Jaipur from "./Images/Jaipur.jpg";
import ReactIcon from "./Images/Icons/ReactIcon.png";
import HtmlIcon from "./Images/Icons/HtmlIcon.png";
import CssIcon from "./Images/Icons/CssIcon.png";
import JSIcon from "./Images/Icons/JSIcon.png";
import CIcon from "./Images/Icons/C++Icon.png";

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

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["React.js ^1000", "JavaScript ^1000", "C++ ^1000", "DSA ^1000", "HTML ^1000", "CSS ^1000", "Git ^1000"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
      // Destroy Typed instance during cleanup to stop animation
    };
  }, []);

  return (
    <div style={{ width: "100vw", display: "flex", flexDirection: "row" }}>
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
        <p
          style={{
            fontSize: "65px",
            width: "200px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          .about
        </p>
        <div className="about">
          <div className="aboutText">
            <p className="firstLine">
              <pre>
                {/* prettier-ignore */}
                <p> Hi! I'm Aditya frontend web developer </p>
                {/* prettier-ignore */}
                <p>born in Udaipur, based in Jaipur, India </p>
              </pre>
            </p>
            <pre>
              <p className="secondLine">
                {/* prettier-ignore */}
                <p>  I create virtual homes for</p>
                {/* prettier-ignore */}
                <p> my clients on world wide web.</p>
              </p>
            </pre>

            <p className="thirdLine">
              <pre>
                <p>Currently I'm exploring smart contracts</p>
                {/* prettier-ignore */}
                <p> and its  intergation  with  frontend.</p>
              </pre>
            </p>
          </div>
          <div
            style={{
              width: "20vw",
              height: "50vh",
              display: "grid",
              placeContent: "center",
            }}
          >
            <span className="techStack"  ><span ref={el}/></span>
            {/* <img src={Udaipur} className="aboutImage"></img>
            <br />
            <img src={Jaipur} className="aboutImage"></img>
            <img></img>
            <img></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageArea;
