import React from "react";
import "./time-line.css";

export default function TimeLine() {
  return (
    <div className={"time-component-container"}>
      <div className="timeline-container">
        <div className="top-swing"></div>
        <div className="box-1">
          <div className="dot dot-1">
            <div className="dot-text">
              <img
                className="img-left"
                src={
                  process.env.PUBLIC_URL + "/img/non-profits/eksempelbilde1.png"
                }
                alt="bilde"
              />
              <h3>Start</h3>
              <p>Lorem ipsum dolor sit amet</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="dot dot-2">
            <div className="dot-text">
              <img
                className="img-left"
                src={
                  process.env.PUBLIC_URL + "/img/non-profits/eksempelbilde2.png"
                }
                alt="bilde"
              />
              <h3>Lorem</h3>
              <p>Lorem ipsum dolor sit amet</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        <div className="box-2">
          <div className="dot dot-3">
            <div className="dot-text">
              <img
                className="img-left"
                src={
                  process.env.PUBLIC_URL + "/img/non-profits/eksempelbilde3.png"
                }
                alt="bilde"
              />
              <h3>Lorem</h3>
              <p>Lorem ipsum dolor sit amet</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="dot dot-4">
            <div className="dot-text">
              <img
                className="img-left"
                src={
                  process.env.PUBLIC_URL + "/img/non-profits/eksempelbilde4.png"
                }
                alt="bilde"
              />
              <h3>Lorem</h3>
              <p>Lorem ipsum dolor sit amet</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        <div className="box-3">
          <div className="dot dot-5">
            <div className="dot-text">
              <img
                className="img-left"
                src={
                  process.env.PUBLIC_URL + "/img/non-profits/eksempelbilde5.png"
                }
                alt="bilde"
              />
              <h3>Lorem</h3>
              <p>Lorem ipsum dolor sit amet</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="dot dot-6">
            <div className="dot-text">
              <img
                className="img-left"
                src={
                  process.env.PUBLIC_URL + "/img/non-profits/eksempelbilde6.png"
                }
                alt="bilde"
              />
              <h3>End</h3>
              <p>Lorem ipsum dolor sit amet</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="bottom-swing" />
        </div>
      </div>
    </div>
  );
}
