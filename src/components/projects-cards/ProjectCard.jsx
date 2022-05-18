import "./ProjectCard.css";
import React from "react";

export function ProjectCardGrid({ data }) {
  return (
    <div>
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
        <h2>{project.name}</h2>
        <p className="project-start">PROJECT START {project.established}</p>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            doloremque enim, possimus laboriosam ea, nemo non aperiam, maiores
            officiis beatae doloribus explicabo obcaecati. Praesentium, eum
            reiciendis? Reiciendis in dignissimos praesentium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            doloremque enim, possimus laboriosam ea, nemo non aperiam, maiores
            officiis beatae doloribus explicabo obcaecati. Praesentium, eum
            reiciendis? Reiciendis in dignissimos praesentium?
          </p>
        </div>

        <button>Go to project</button>
      </div>
    </div>
  );
}
