import React, { useEffect, useState } from "react";
import "./Style/Project.css";
import Github from "./Images/Icons/Github.png";
import Live from "./Images/Icons/Live.png";
import { onValue, ref } from "firebase/database";
import { db } from "./Firebase/Config";

function Project() {
  const [ProjectFetched, setProjectFetched] = useState([]);

  // useEffect(() => {
  //   onValue(ref(db), (snapshot) => {
  //     if (snapshot.val()) {
  //       const values = Object.values(snapshot.val());
  //       values.forEach((data, index) => {
  //         if (data.type == "Project") {
  //           setProjectFetched((oldArray) => [...oldArray, data]);
  //         }
  //       });
  //     }
  //   });
  // }, []);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    onValue(ref(db), (snapshot) => {
      if (snapshot.val()) {
        const values = Object.values(snapshot.val());
        // console.log(values);
        let projects = [];
        values.map((data) => {
          if (data.type == "Project") projects.push(data);
        });
        setProjectFetched(projects);
      }
    });
  };
  console.log(ProjectFetched);

  return (
    <div>
      <div id="project-href" className="section-href"></div>
      <p
        style={{
          fontSize: "65px",
          width: "250px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "60px",
          marginBottom: "30px",
        }}
        className="headingHighlighter"
      >
        .projects
      </p>
      {ProjectFetched.map((user) => (
        <div className="projectContainer">
          <img
            src={`https://drive.google.com/uc?export=view&id=${user.imageLink}`}
            alt="drive image"
            className="projectImage"
          />
          <div style={{ margin: "15px" }}>
            <h3>{user.title}</h3>
            {user.description.slice(0, 295) + "..."}
            <div>
              {user.techStack.split(",").map((tech) => {
                return <button className="projectTech">{tech}</button>;
              })}
            </div>
            <div>
              <span className="projectButton">
                <a href={user.repoLink} target="_blank">
                  Code <img src={Github} style={{ width: "25px" }} />
                </a>
              </span>
              <span className="projectButton">
                <a href={user.link} target="_blank">
                  Live Demo <img src={Live} style={{ width: "25px" }} />
                </a>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
