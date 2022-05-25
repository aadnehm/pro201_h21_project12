import React from "react";
import "./about-project.css";
import TimeLine from "./TimeLine";

export default function AboutProjects({ project }) {
  return (
    <>
      <div className="about-component-container">
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
        <div className="testomonials">
          <h2>Testemonials</h2>
          <p className="p-margin">
            Our donators are companies that want to make a difference for
            vulnerable children. Together, we invest in children's rights, which
            ensure a sustainable future. Read about how they have contributed to
            a better world.
          </p>
        </div>
        <div className="companies-testemonials">
          <div>
            <h4>Foodora</h4>
            <p>
              The collaboration with Save the Children is well established among
              Foodora`s committed employees. A large proportion of the employees
              at Foodora Norway give a fixed amount to Save the Children every
              month through payroll. This money goes to Project Somalia. We have
              seen that our employees take greater pride in working for Foodora.
            </p>
          </div>
          <div>
            <h4>Avinor</h4>
            <p>
              The collaboration with Save the Children is well established among
              Avinor`s committed employees. A large proportion of the employees
              at Avinor give a fixed amount to Save the Children every month
              through payroll. This money goes to Project Somalia. We have seen
              that our employees take greater pride in working for Foodora.
            </p>
          </div>
          <div>
            <h4>Columbus</h4>
            <p>
              The collaboration with Save the Children is well established among
              Colombus committed employees. A large proportion of the employees
              at Columbus give a fixed amount to Save the Children every month
              through payroll. This money goes to Project Somalia. We have seen
              that our employees take greater pride in working for Foodora.
            </p>
          </div>
          <div>
            <h4>DNB Bank</h4>
            <p>
              The collaboration with Save the Children is well established among
              DNB Bank`s committed employees. A large proportion of the
              employees at DNB Bank give a fixed amount to Save the Children
              every month through payroll. This money goes to Project Somalia.
              We have seen that our employees take greater pride in working for
              Foodora.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
