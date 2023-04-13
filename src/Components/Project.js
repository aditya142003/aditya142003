import React, { useEffect, useState } from "react";
import "./Style/Project.css";
import axios from "axios";

function Project() {
  const [ProjectFetched, setProjectFetched] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/FetchProject").then((res) => {
      setProjectFetched(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <p
        style={{
          fontSize: "70px",
          width: "240px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        .projects
      </p>

      {ProjectFetched.map((user) => (
        <div>
          <img
            src={`https://drive.google.com/uc?export=view&id=${user.imageLink}`}
            alt="drive image"
            style={{ width: "500px" }}
          />
          <div>
            <h3>{user.title}</h3>
            {user.description.slice(0, 250) + "..."}
            <div>
              {user.techStack.split(",").map((tech) => {
                return <span style={{ padding: "10px" }}>{tech}</span>;
              })}
            </div>
            <div>
              <span>
                <a href={user.repoLink}>Code</a>
              </span>
              <span>
                <a href={user.link}>Live Demo</a>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
