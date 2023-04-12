import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const navigate = useNavigate();
  const [loginpassword, setloginpassword] = useState();
  if (loginpassword === "Aditya@rj2714as") {
    navigate("/CreateProject");
  }
  return (
    <div>
      <h4>Login Password</h4>
      <input
        type="password"
        onInputCapture={(e) => setloginpassword(e.target.value)}
      ></input>
    </div>
  );
}

export default AuthPage;
