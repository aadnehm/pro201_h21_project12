import "./ProjectCard.css";
import React from "react";
import { useNavigate } from "react-router";

export function ProjectCardGrid({ data }) {
  const reddBarnaProjects = data[0].projects;
  return (
    <div className="project-page-container">
      <div className="top-line"></div>
      <h1>Our Projects</h1>
      {reddBarnaProjects.map((project, index) => (
        <Pcard key={index} project={project} />
      ))}
    </div>
  );
}

function Pcard({ project }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(project.link);
  };

  return (
    <div className="project-cards-container">
      <div className="project-img-gallery">
        <img className="big-img" src={project.img} alt="non profit image" />
        <img className="small-img" src={project.img} alt="non profit image" />
        <img src={project.img} alt="non profit image" />
      </div>

      <div className="project-text-content">
        <h3>{project.name}</h3>
        <p className="project-start-p">PROJECT START {project.established}</p>
        <div>
          <p>{project.info1}</p>
          <p>{project.info2}</p>
        </div>
        <button onClick={handleClick}>Go to project</button>
      </div>
      <span className="split-line"></span>
    </div>
  );
}
