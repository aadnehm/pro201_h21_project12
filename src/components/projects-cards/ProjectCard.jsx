import "./ProjectCard.css";
import React from "react";

export function ProjectCardGrid({ data }) {
  return (
    <div className="project-page-container">
      <div className="top-line"></div>
      <h1>Our Projects</h1>
      {data.map((project, index) => (
        <Pcard key={index} project={project} />
      ))}
    </div>
  );
}

function Pcard({ project }) {
  return (
    <div className="project-cards-container">
      <div className="project-img-gallery">
        <img className="big-img" src={project.img} alt="non profit image" />
        <img className="small-img" src={project.img} alt="non profit image" />
        <img src={project.img} alt="non profit image" />
      </div>

      <div className="project-card-content">
        <h3>{project.name}</h3>
        <p className="project-start-p">PROJECT START {project.established}</p>
        <div>
          <p>{project.info1}</p>
          <p>{project.info2}</p>
        </div>
        <button>Go to project</button>
      </div>
      <div className="split-line"></div>
    </div>
  );
}
