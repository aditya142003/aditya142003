import React from "react";
import "./Style/NavBar.css";
import NavLogo from "./Images/NavLogo.png";
import Instagram from "./Images/Icons/Instagram.png";
import LinkedIn from "./Images/Icons/LinkedIn.png";
import Gmail from "./Images/Icons/Gmail.png";

console.log("Hello");
function NavBar() {
  function scrollingHome() {
    window.scrollTo(0, 0);
  }
  function scrollingAbout() {
    window.scrollTo(0, 630);
  }
  function scrollingProject() {
    window.scrollTo(0, 1230);
  }
  return (
    <div className="sticky NavMainContainer">
      <div className="NavContainer ">
        <span>
          <img className="NavIcon" src={NavLogo} onClick={scrollingHome}></img>
        </span>
        <span onClick={scrollingHome}>Home</span>
        <span onClick={scrollingAbout}>About</span>
        <span onClick={scrollingProject}>Projects</span>
        <span>Contact</span>
        <div className="Social">
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
          <span>
            <a
             href="mailto:adityabhatnagar142003@gmail.com"
              target="_blank"
            >
              <img className="SocialLogo" src={Gmail}></img>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
