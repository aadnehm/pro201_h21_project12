import React from "react";
import "./about-project.css";
import TimeLine from "./TimeLine";

export default function AboutProjects({ project }) {
  return (
    <>
      <div className="about-info-container">
        <h2>About {project.name}</h2>
        <div
          className="img-container"
          style={{
            background: `url(${
              process.env.PUBLIC_URL + project.img
            }) no-repeat center center/cover`,
          }}
        >
          <div className="img-text">
            <p>
              - The "e-lab" is the best I know! It's fun to learn here. I have
              become better at reading and learning Somali letters
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
