import React from "react";
/* MUI */
import { Button } from "@mui/material";

export default function HeaderNonProfit(props) {
  return (
    <div className="non-profit-hero">
      <div className="header-div">
        <h1>Redd Barna</h1>
      </div>
      <div className="header-text">
        <p>{props.text}</p>
      </div>
      <Button size="large" className="header-text-button" variant="contained">
        Donate
      </Button>
    </div>
  );
}
