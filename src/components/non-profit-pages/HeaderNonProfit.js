import React from "react";

export default function HeaderNonProfit(props) {
  return (
    <div>
      <div className="header-div">
        <h1>Redd Barna</h1>
      </div>
      <div className="header-text">
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
}
