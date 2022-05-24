import React from "react";
import "./time-line.css";

export default function TimeLine() {
    return (
        <div className={"time-component-container"}>
            <div className="timeline-container">
                <div className="box-1">
                    <div className="dot dot-1">
                        <div className="dot-text">
                            <img src={process.env.PUBLIC_URL + "/img/eksempelbilde1.png"} alt="bilde"/>
                            <h3>Lorem</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="dot dot-2">
                        <div className="dot-text">
                            <img src={process.env.PUBLIC_URL + "/img/eksempelbilde1.png"} alt="bilde"/>
                            <h3>Lorem</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>

                <div className="box-2">
                    <div className="dot dot-3">
                        <div className="dot-text">
                            <img src={process.env.PUBLIC_URL + "/img/eksempelbilde1.png"} alt="bilde"/>
                            <h3>Lorem</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="dot dot-4">
                        <div className="dot-text">
                            <img src={process.env.PUBLIC_URL + "/img/eksempelbilde1.png"} alt="bilde"/>
                            <h3>Lorem</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>

                <div className="box-3">
                    <div className="dot dot-5">
                        <div className="dot-text">
                            <img src={process.env.PUBLIC_URL + "/img/eksempelbilde1.png"} alt="bilde"/>
                            <h3>Lorem</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="dot dot-6">
                        <div className="dot-text">
                            <img src={process.env.PUBLIC_URL + "/img/eksempelbilde1.png"} alt="bilde"/>
                            <h3>Lorem</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
