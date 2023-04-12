import React, { useState } from "react";
import axios from "axios";

function CreateProject() {
  const [Title, setTitle] = useState();
  const [Description, setDescription] = useState();
  const [Link, setLink] = useState();

  function createPost() {
    axios({
      method: "post",
      url: "http://localhost:3000/CreateProject",
      headers: {},
      data: {
        title: `${Title}`,
        description: `${Description}`,
        link: `${Link}`,
      },
    }).then((response) => {
      console.log(response);
    });
  }
  return (
    <div>
      <form>
        <h1>Title</h1>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <h1>Description</h1>
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <h1>Link</h1>
        <input
          type="text"
          onChange={(e) => {
            setLink(e.target.value);
          }}
        ></input>
        <button onClick={createPost}>Submit</button>
      </form>
    </div>
  );
}

export default CreateProject;
