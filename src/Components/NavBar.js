import React, { useState } from "react";
import "./Style/NavBar.css";
import NavLogo from "./Images/NavLogo.png";
import Instagram from "./Images/Icons/Instagram.png";
import LinkedIn from "./Images/Icons/LinkedIn.png";
import Github from "./Images/Icons/Github1.png";
import Menu from "./Images/Menu.png";

function NavBar() {
  const [active, setactive] = useState(true);
  function scrollingHome() {
    window.scrollTo(0, 0);
  }
  function handleActive() {
    if (active && window.screen.width < 600) {
      setactive(false);
      document.getElementById("NavMainContainer").style.height = "100vh";
      document.getElementById("NavMainContainer").style.paddingTop = "50px";
      document.getElementById("NavContainer").style.display = "block";
    } else {
      setactive(true);
      document.getElementById("NavMainContainer").style.height = "10vh";
      document.getElementById("NavMainContainer").style.paddingTop = "0px";
      document.getElementById("NavContainer").style.display = "flex";
    }
  }
  return (
    <div className="sticky NavMainContainer" id="NavMainContainer">
      <div className="NavContainer" id="NavContainer">
        <img className="NavIcon" src={NavLogo} onClick={scrollingHome}></img>
        {active && window.screen.width < 600 ? (
          <>
            <img className="MenuIcon" src={Menu} onClick={handleActive}></img>
          </>
        ) : (
          <div>
            <a onClick={handleActive} href="#home-href">
              Home
            </a>
            <a onClick={handleActive} href="#about-href">
              About
            </a>
            <a onClick={handleActive} href="#project-href">
              Projects
            </a>
            <a onClick={handleActive} href="#contact-href">
              Contact
            </a>
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
        )}
      </div>
    </div>
  );
}

export default NavBar;
