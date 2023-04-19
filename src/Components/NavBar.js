import React from "react";
import "./Style/NavBar.css";
import NavLogo from "./Images/NavLogo.png";
import Instagram from "./Images/Icons/Instagram.png";
import LinkedIn from "./Images/Icons/LinkedIn.png";
import Github from "./Images/Icons/Github1.png";

console.log("Hello");
function NavBar() {
  function scrollingHome() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="sticky NavMainContainer">
      <div className="NavContainer ">
        <span>
          <img className="NavIcon" src={NavLogo} onClick={scrollingHome}></img>
        </span>
        <a onClick={scrollingHome}>Home</a>
        <a href="#about-href">About</a>
        <a href="#project-href">Projects</a>
        <a href="#contact-href">Contact</a>
        <div className="Social">
          <span>
            <a href="https://github.com/aditya142003/" target="_blank">
              <img className="SocialLogo" src={Github}></img>
            </a>
          </span>
          <span>
            <a
              href="https://www.instagram.com/aditya.bhatnagar__/"
              target="_blank"
            >
              <img className="SocialLogo" src={Instagram}></img>
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/aditya-bhatnagar-949a05263/"
              target="_blank"
            >
              <img className="SocialLogo" src={LinkedIn}></img>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
