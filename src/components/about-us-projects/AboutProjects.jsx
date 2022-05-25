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
            <p>{project.imgText}</p>
          </div>
        </div>
        <div className="what-we-do">
          <h2>What we do</h2>
          <p>{project.whatWeDo1}</p>
          <p>{project.whatWeDo2}</p>
        </div>
        <h2>Our progress</h2>
        <div className="timeline-wrapper">
          <TimeLine />
        </div>
      </div>
    </>
  );
}
