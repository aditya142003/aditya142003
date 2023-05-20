import React, { useState } from "react";
import "./Style/About.css";
import Typed from "typed.js";
import Udaipur from "./Images/Udaipur.jpg";
import Jaipur from "./Images/Jaipur.jpg";
function About() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "React.js ^800",
        "JavaScript ^800",
        "C++ ^800",
        "DSA ^800",
        "HTML ^800",
        "CSS ^800",
        "Git ^800",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  let aboutImageU = document.getElementById("aboutImageU");
  let aboutImageJ = document.getElementById("aboutImageJ");
  let techStack = document.getElementById("techStack");
  function handleUdaipur() {
    aboutImageU.style.setProperty("left", "0");
    techStack.style.setProperty("left", "320px");
  }
  function handleLeaveU() {
    aboutImageU.style.setProperty("left", "320px");
    techStack.style.setProperty("left", "0");
  }
  function handleJaipur() {
    aboutImageJ.style.setProperty("left", "0");
    techStack.style.setProperty("left", "320px");
  }
  function handleLeaveJ() {
    aboutImageJ.style.setProperty("left", "320px");
    techStack.style.setProperty("left", "0");
  }
  return (
    <div style={{ height: "70vh" }}>
      <div id="about-href" className="section-href"></div>
      <p
        style={{
          fontSize: "65px",
          width: "200px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "60px",
          marginBottom: "30px",
        }}
        className="headingHighlighter"
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
              <p>born in <span onMouseEnter={handleUdaipur} onMouseLeave={handleLeaveU} className="city textHighlighter" ><a href="https://www.tourism.rajasthan.gov.in/udaipur.html" target="_blank">Udaipur</a></span>, based in <span onMouseEnter={handleJaipur} onMouseLeave={handleLeaveJ} className="city textHighlighter"><a href="https://www.tourism.rajasthan.gov.in/jaipur.html" target="_blank">Jaipur</a></span>, India </p>
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
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="techStack" id="techStack">
            <span ref={el} />
          </div>
          <div style={{ height: "25vh" }}>
            <img src={Udaipur} id="aboutImageU" className="aboutImage"></img>
            <img src={Jaipur} id="aboutImageJ" className="aboutImage"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
