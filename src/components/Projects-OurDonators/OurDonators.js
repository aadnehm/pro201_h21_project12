import React from "react";
import "../our-donators/ourDonators.css";

export function OurProjectDonators() {
  const logoVy = "/img/non-profit/vy.png";
  const logoShell = "/img/non-profit/shell.png";
  const logoIss = "/img/non-profit/iss.png";
  return (
    <div className="donator-wrapper">
      <div className="grey-line" />
      <h1>Our Donators</h1>
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
        ></DonatorCard>
        <DonatorCard
          img={logoIss}
          company={"ISS"}
          project={"Project1"}
          donations={"1000"}
        ></DonatorCard>
      </div>
      <div className="donators-logo-wrapper">
        <DonatorCard
          img={logoVy}
          company={"VY"}
          project={"Project1"}
          donations={"1000"}
        ></DonatorCard>
        <DonatorCard
          img={logoShell}
          company={"Shell"}
          project={"Project1"}
          donations={"1000"}
        ></DonatorCard>
        <DonatorCard
          img={logoIss}
          company={"ISS"}
          project={"Project1"}
          donations={"1000"}
        ></DonatorCard>
      </div>
    </div>
  );
}

function DonatorCard({ img, company, project, donations }) {
  return (
    <>
      <div>
        <div className="donators-logo-img">
          <img src={img} alt="logo-donators" />
        </div>
        <div className="donators-company-name">{company}</div>
        <div className="donators-project-title">{project}</div>
        <div className="donators-donations">{donations}</div>
      </div>
    </>
  );
}
