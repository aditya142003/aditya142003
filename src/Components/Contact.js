import React, { useState, useEffect } from "react";
import "./Style/Contact.css";
import { ref, set } from "firebase/database";
import { db } from "./Firebase/Config";
import { uid } from "uid";

function Contact() {
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Message, setMessage] = useState();

  const submit = (e) => {
    e.preventDefault();
    const id = `contact${uid()}`;
    set(ref(db, `/${id}`), {
      name: `${Name}`,
      email: `${Email}`,
      message: `${Message}`,
    });
  };

  return (
    <div style={{
      marginTop: "100px",
      paddingBottom: "100px"
    }}>
     <div id="contact-href" className="section-href"></div>
      <p
        style={{
          fontSize: "65px",
          width: "230px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "30px",
          marginTop: "50px"
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
