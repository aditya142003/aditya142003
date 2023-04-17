import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style/Contact.css";

function Contact() {
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Message, setMessage] = useState();

  function submit() {
    axios({
      method: "post",
      url: "http://localhost:3000/Contact",
      headers: {},
      data: {
        name: `${Name}`,
        email: `${Email}`,
        message: `${Message}`,
      },
    }).then((response) => {
      console.log(response);
    });
  }

  return (
    <div>
      <p
        style={{
          fontSize: "65px",
          width: "230px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "30px",
          marginBottom: "30px",
        }}
        className="headingHighlighter"
      >
      .contact
      </p>
      <div className="contactHeading">
        <h1 className="contactFirst">Send me a message!</h1>
        <p className="contactSecond">
          Got a question or proposal, or just want
        </p>
        <p className="contactSecond">to say hello? Go ahead.</p>
        <div className="contactThird">
          <div className="inputArea">
            <p className="inputText">Your Name</p>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              style={{ paddingTop: "10px", textAlign: "center" }}
            ></input>
          </div>
          <div className="inputArea">
            <p className="inputText">Email Address</p>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{ paddingTop: "10px", textAlign: "center" }}
            ></input>
          </div>
        </div>
        <div className="inputArea">
          <p className="inputText">Your Message</p>
          <input
            type="text"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="messageInput"
          ></input>
        </div>
        <div style={{ width: "200px", margin: "auto" }}>
          <button onClick={submit} className="shoot">
            SHOOT &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
