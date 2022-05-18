import React from "react";
import "./InsideStories.css";

export default function InsideStories() {
  return (
    <div className="inside-stories">
      <hr className="horizontal-lines" />
      <h2>Inside stories</h2>
      <div className="iframes-div">
        <div className="story-div">
          <iframe
            width="270"
            height="270"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h4>Rick Astley</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="story-div">
          <iframe
            width="270"
            height="270"
            src="https://www.youtube.com/embed/U6lpBi39N78"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h4>Torstein Horgmo</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="story-div">
          <iframe
            width="270"
            height="270"
            src="https://www.youtube.com/embed/fXW-QjBsruE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h4>Michael Stevens</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
