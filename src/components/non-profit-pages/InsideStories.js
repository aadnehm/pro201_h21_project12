import React from "react";
import ReactPlayer from "react-player";
import "./InsideStories.css";

export default function InsideStories() {
  return (
    <div className="inside-stories">
      <hr className="horizontal-lines" />
      <h2>Inside stories</h2>
      <div className="iframes-div">
        <div className="story-div">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/dQw4w9WgXcQ"
            width="270px"
            height="270px"
          />
          <h4>Rick Astley</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="story-div">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=U6lpBi39N78"
            width="270px"
            height="270px"
          />
          <h4>Torstein Horgmo</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="story-div">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/dQw4w9WgXcQ"
            width="270px"
            height="270px"
          />
          <h4>Michael Stevens</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
