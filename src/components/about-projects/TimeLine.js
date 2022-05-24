import React from "react"
import "./time-line.css"

export default function TimeLine() {
    return (
        <div className={"time-component-container"}>
            <div className="timeline-container">

                <div className="box-1">
                    <div className="content">
                        <div className="dot-1"></div>
                        <div className="dot-2"></div>
                    </div>
                </div>
                <div className="box-2">
                    <div className="content">
                        <div className="dot-3"></div>
                        <div className="dot-4"></div>
                    </div>
                </div>
                <div className="box-3">
                    <div className="content">
                        <div className="dot-5"></div>
                        <div className="dot-6"></div>
                    </div>
                </div>

            </div>

        </div>
        )


}