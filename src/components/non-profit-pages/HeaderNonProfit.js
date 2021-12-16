import React from "react";
import { Link } from "react-router-dom";
/* MUI */
import { Button } from "@mui/material";

export default function HeaderNonProfit(props) {
  const color = props.org.primaryColor;

  let redBrightness = parseInt(color.substring(1, 3), 16);
  let greenBrightness = parseInt(color.substring(3, 5), 16);
  let blueBrightness = parseInt(color.substring(5, 7), 16);
  let textColor = "white";

  if (greenBrightness > 240 || redBrightness > 240 || blueBrightness > 240) {
    textColor = "black";
  }

  console.log(redBrightness);
  console.log(greenBrightness);
  console.log(blueBrightness);

  return (
    <div className="non-profit-hero">
      <div className="header-div" style={{ backgroundColor: color }}>
        <h1 style={{ color: textColor }}>{props.org.name}</h1>
      </div>
      <div className="header-text">
        <p>{props.text}</p>
      </div>
      <Button
        size="large"
        className="header-text-button"
        variant="contained"
        style={{ backgroundColor: color, color: textColor }}
        component={Link}
        to="/choose-subscription"
      >
        Donate
      </Button>
    </div>
  );
}
