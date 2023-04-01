import React from "react";
import "./Style/NavBar.css";

console.log("Hello");
function NavBar() {
  // window.onscroll = function () {
  //   myFunction();
  // };
  // var navbar = document.getElementById("NavBar");
  // var sticky = navbar.offsetTop;
  // function myFunction() {
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add("sticky");
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // }
  return <div className="NavContainer sticky" id="NavBar"></div>;
}

export default NavBar;
