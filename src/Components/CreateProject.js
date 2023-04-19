import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "./Firebase/Config";
import { uid } from "uid";

function CreateProject() {
  const [Title, setTitle] = useState();
  const [Description, setDescription] = useState();
  const [Link, setLink] = useState();
  const [ImageLink, setImageLink] = useState();
  const [RepoLink, setRepoLink] = useState();
  const [TechStack, setTechStack] = useState();

  const createPost = (e) => {
    e.preventDefault();
    const id = `project${uid()}`;
    set(ref(db, `/${id}`), {
      title: `${Title}`,
      description: `${Description}`,
      link: `${Link}`,
      imageLink: `${ImageLink}`,
      repoLink: `${RepoLink}`,
      techStack: `${TechStack}`,
      type:"Project"
    });
  };

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
