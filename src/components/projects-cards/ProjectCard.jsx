import "./project-card.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export function ProjectCardGrid({ data }) {
  const transition = { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] };
  const reddBarnaProjects = data.projects;
  const [showAll, setShowAll] = useState(false);

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
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={transition}
          >
            <Pcard key={index} project={project} />
          </motion.div>
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
          <p>{project1.info2}</p>
        </div>
        <div className={"button-container"}>
          <button onClick={handleClick}>Go to project</button>
          <button onClick={handleClick}>Donate</button>
        </div>
      </div>
      <span className="split-line"></span>
    </div>
  );
}
