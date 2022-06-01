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
