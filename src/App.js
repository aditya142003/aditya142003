import React from "react";
import NavBar from "./Components/NavBar";
import MainArea from "./Components/MainArea";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="outContainer">
        <MainArea />
      </div>
    </>
  );
}

export default App;
