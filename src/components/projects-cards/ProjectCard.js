import "./project-card.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { goToTopQuickly } from "../../lib/toTop";

export function ProjectCardGrid({ data }) {
  const reddBarnaProjects = data.projects;
  const [showAll, setShowAll] = useState(false);
  const goToTop = () => {
    window.scrollTo({
      top: 670,
      behavior: "smooth",
    });
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="project-page-container">
      <div className="grey-line" />
      <h1>Our Projects</h1>
      {!showAll && (
        <>
          <Pcard project={reddBarnaProjects[0]} />
          <Pcard project={reddBarnaProjects[1]} />
        </>
      )}

      {showAll &&
        reddBarnaProjects.map((project, index) => (
          <Pcard key={index} project={project} />
        ))}
      <button className="showAllBtn" onClick={() => handleShowAll()}>
        {showAll ? "Show less projects" : "Show all projects"}
      </button>
    </div>
  );
}

function Pcard({ project }) {
  const navigate = useNavigate();
  let project1 = {};
  if (project !== undefined) {
    project1 = project;
  }

  useEffect(() => {}, [project]);
  const handleClick = () => {
    const path =
      window.location.pathname +
      "/" +
      project.name.replace(/ /g, "").toLowerCase();
    navigate(path);
    goToTopQuickly();
  };
  const [heartFilterStyle, setHeartFilterStyle] = useState({});

  function changeHeartFilterStyle() {
    if (heartFilterStyle.filter === undefined) {
      setHeartFilterStyle({
        filter: "invert(30%) sepia() saturate(2000%) hue-rotate(0deg)",
      });
    } else {
      setHeartFilterStyle({});
    }
  }

  return (
    <div className="project-cards-container">
      <div className="project-img-gallery">
        <img
          className="big-img"
          src={process.env.PUBLIC_URL + project1.img1}
          alt="non profit image"
        />
        <img
          className="small-img"
          src={process.env.PUBLIC_URL + project1.img2}
          alt="non profit image"
        />
        <img
          className="small-img"
          src={process.env.PUBLIC_URL + project1.img3}
          alt="non profit image"
        />
      </div>

      <div className="project-text-content">
        <div className="top-flex-content">
          <h3>{project1.name}</h3>
          <div className="add-favorites">
            <span onClick={changeHeartFilterStyle}>
              <img
                className="heart-png"
                src={process.env.PUBLIC_URL + "/img/projects/heart.png"}
                alt="heart img"
                style={heartFilterStyle}
              />
              Add to favorites
            </span>
          </div>
        </div>

        <p className="project-start-p">PROJECT START {project1.established}</p>
        <div>
          <p>{project1.info1}</p>
        </div>
        <div className={"button-container"}>
          <button onClick={handleClick}>Go to project</button>
          <button
            onClick={() => {
              const path =
                window.location.pathname +
                "/" +
                project.name.replace(/ /g, "").toLowerCase() +
                "/subscribe";
              navigate(path);
            }}
          >
            Donate
          </button>
        </div>
      </div>
      <span className="split-line" />
    </div>
  );
}
