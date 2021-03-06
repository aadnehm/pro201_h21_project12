import React from "react";
import "./about-project.css";
import TimeLine from "./TimeLine";

export default function AboutProjects({ project }) {
  return (
    <>
      <div className="about-component-container">
        <div className="grey-line" />
        <h1>About {project.name}</h1>
        <div
          className="img-container"
          style={{
            background: `url(${
              process.env.PUBLIC_URL + project.img2
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
        <div className="testomonials section-margin">
          <h2>Testemonials</h2>
          <p className="p-margin">
            Our donators are companies that want to make a difference for
            vulnerable children. Together, we invest in children's rights, which
            ensure a sustainable future. Read about how they have contributed to
            a better world.
          </p>
        </div>
        <div className="companies-testemonials-grid">
          {project.testemonials.map((testemonial, index) => (
            <TestemonialsCard key={index} testemonial={testemonial} />
          ))}
        </div>
      </div>
    </>
  );
}

function TestemonialsCard({ testemonial }) {
  return (
    <div className="testemonials-content">
      <div className="title-and-img">
        <img src={process.env.PUBLIC_URL + testemonial.img} alt="" />
      </div>
      <div className="testemonial-text">
        <h4>{testemonial.name}</h4>
        <p>{testemonial.text}</p>
      </div>
    </div>
  );
}
