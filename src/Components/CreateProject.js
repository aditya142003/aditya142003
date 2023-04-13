import React, { useState } from "react";
import axios from "axios";

function CreateProject() {
  const [Title, setTitle] = useState();
  const [Description, setDescription] = useState();
  const [Link, setLink] = useState();
  const [ImageLink, setImageLink] = useState();
  const [RepoLink, setRepoLink] = useState();
  const [TechStack, setTechStack] = useState();

  function createPost() {
    axios({
      method: "post",
      url: "http://localhost:3000/CreateProject",
      headers: {},
      data: {
        title: `${Title}`,
        description: `${Description}`,
        link: `${Link}`,
        imageLink: `${ImageLink}`,
        repoLink: `${RepoLink}`,
        techStack: `${TechStack}`,
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
        <h1>Tech Stack</h1>
        <input
          type="text"
          onChange={(e) => {
            setTechStack(e.target.value);
          }}
          placeholder="Seperated with comma"
        ></input>
        <h1>Project Link</h1>
        <input
          type="text"
          onChange={(e) => {
            setLink(e.target.value);
          }}
        ></input>
        <h1>Drive Image Link</h1>
        <input
          type="text"
          onChange={(e) => {
            setImageLink(e.target.value);
          }}
        ></input>
        <h1>Github Repository Link</h1>
        <input
          type="text"
          onChange={(e) => {
            setRepoLink(e.target.value);
          }}
        ></input>
        <button onClick={createPost}>Submit</button>
      </form>
    </div>
  );
}

export default CreateProject;
