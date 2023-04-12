import React from "react";
import NavBar from "./Components/NavBar";
import MainArea from "./Components/MainArea";
import CreateProject from "./Components/CreateProject";
import AuthPage from "./Components/AuthPage";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar /> <MainArea />
            </div>
          }
        ></Route>
        <Route path="/AuthPage" element={<AuthPage />}></Route>
        <Route path="/CreateProject" element={<CreateProject />}></Route>
      </Routes>
      <div className="outContainer"></div>
    </div>
  );
}

export default App;
