import React from "react";
import "./time-line.css";

export default function TimeLine() {
  return (
    <div className={"time-component-container"}>
      <div className="timeline-container">
        <div className="box-1">
          <div className="dot-1-text">
            <h3>hei</h3>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="dot dot-1"></div>
          <div className="dot-2-text">
            <h3>hei</h3>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="dot dot-2"></div>
        </div>
        <div className="box-2">
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
        </div>

        <div className="box-3">
          <div className="dot dot-5"></div>
          <div className="dot dot-6"></div>
        </div>
      </div>
    </div>
  );
}
