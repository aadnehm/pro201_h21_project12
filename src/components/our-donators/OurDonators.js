import React from "react";
import "./our-donators.css";
import { images } from "../non-profits-data/NonProfitsData";

function OurDonators() {
  return (
    <div className="donator-wrapper">
      <div className="grey-line" />
      <h1>Our Donators</h1>
      <div className="donators-logo-wrapper">
        {images.map((item, key) => (
          <DonatorCard
            img={item.img}
            company={item.name}
            project={item.project}
            donations={item.donations}
            key={key}
          />
        ))}
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

export default OurDonators;
