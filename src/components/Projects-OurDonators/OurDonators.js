import React from "react";
import "../our-donators/our-donators.css";
import { images } from "../non-profits-data/NonProfitsData";

export function OurProjectDonators({ project_name }) {
  return (
    <div className="donator-wrapper">
      <div className="grey-line" />
      <h1 id="top">Our Donators to {project_name}</h1>
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
      <div className="donators-image-wrapper">
        <div className="donators-image-text">
          Around the world, too many children start life at a disadvantage
          simply because of who they are and where they come from. Millions of
          children are dying from preventable causes, face poverty, violence,
          disease and hunger. They are caught up in war zones and disasters they
          did nothing to create. And they are denied an education and other
          basic rights owed to them. All children deserve better. We champion
          the rights and interests of children worldwide, putting the most
          vulnerable children first.
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
        <div className="donators-donations">{donations}</div>
      </div>
    </>
  );
}
