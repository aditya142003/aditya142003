import React from "react";
import NavBar from "./Components/NavBar";
import ImageArea from "./Components/ImageArea";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="outContainer">
        <ImageArea />
      </div>
    </>
  );
}

export default App;
