import React from "react";
import "../our-donators/ourDonators.css";

export function OurProjectDonators({ project_name }) {
  const logoVy = "/img/non-profit/vy.png";
  const logoShell = "/img/non-profit/shell.png";
  const logoIss = "/img/non-profit/iss.png";
  return (
    <div className="donator-wrapper">
      <div className="grey-line" />
      <h1 id="top">Our Donators to {project_name}</h1>
      <div className="donators-logo-wrapper">
        <DonatorCard
          img={logoVy}
          company={"VY"}
          project={"Project1"}
          donations={"1000"}
        />
        <DonatorCard
          img={logoShell}
          company={"Shell"}
          project={"Project1"}
          donations={"1000"}
        />
        <DonatorCard
          img={logoIss}
          company={"ISS"}
          project={"Project1"}
          donations={"1000"}
        />
        <DonatorCard
          img={logoIss}
          company={"ISS"}
          project={"Project1"}
          donations={"1000"}
        />
      </div>
      <div className="donators-logo-wrapper">
        <DonatorCard
          img={logoVy}
          company={"VY"}
          project={"Project1"}
          donations={"1000"}
        />
        <DonatorCard
          img={logoShell}
          company={"Shell"}
          project={"Project1"}
          donations={"1000"}
        />
        <DonatorCard
          img={logoIss}
          company={"ISS"}
          project={"Project1"}
          donations={"1000"}
        />
        <DonatorCard
          img={logoIss}
          company={"ISS"}
          project={"Project1"}
          donations={"1000"}
        />
      </div>
      <div className="donators-image-wrapper">
        <div className="donators-image-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          consectetur deleniti doloremque laudantium, praesentium quia quos rem
          suscipit? Cum delectus ducimus earum hic molestias natus obcaecati rem
          rerum sapiente tempora
        </div>
      </div>
    </div>
  );
}

function DonatorCard({ img, company, donations }) {
  return (
    <>
      <div>
        <div className="donators-logo-img">
          <img src={img} alt="logo-donators" />
        </div>
        <div className="donators-company-name">{company}</div>
        <div className="donators-donations">
          Total contributions: {donations} ,-
        </div>
      </div>
    </>
  );
}
