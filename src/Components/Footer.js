import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style/Footer.css";

function Footer() {
  const navigate = useNavigate();

  function navAuth(){
    navigate("/AuthPage")
  }
  return (
    <div>
      <div className="footerContainer">
        <div
          style={{
            padding: "10px",
            width: "80vw",
            alignItem: "center",
            justifyContent: "center",
            display: "flex",
            height: "40px",
          }}
        >
          <a
            href="mailto:adityabhatnagar142003@gmail.com"
            className="textHighlighter"
          >
            adityabhatnagar142003@gmail.com
          </a>
        </div>
        <div style={{ display: "flex" }} onDoubleClick={navAuth}>
          <span className="firstBlock"></span>
          <span className="secondBlock"></span>
          <span className="thirdBlock"></span>
          <span className="forthBlock"></span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
