import React from "react";
import { useNavigate } from "react-router";
import "./nonProfit.css";
import HeaderNonProfit from "../../components/non-profit-pages/HeaderNonProfit";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function NonProfit() {
  const headerText =
    "Redd Barna kjemper for barns rettigheter, og for at alle barn skal leve et verdig liv – uansett hvem de er og hvor de bor. Redd Barna jobber i 122 land over hele verden, også i Norge!";
  const navigate = useNavigate();

  function Navigate() {
    navigate("/non-project");
  }
  return (
    <div
      style={{ backgroundImage: "url(./img/non-profit/red-barna.jpg)" }}
      className="non-profit-container"
    >
      <HeaderNonProfit text={headerText}></HeaderNonProfit>
      <div className="our-projects-div">
        <h2>Our projects</h2>

        <div className="cards-div">
          <Card onClick={Navigate} className="card">
            <CardContent
              style={{ backgroundImage: "url(./img/non-profit/card-img.png)" }}
              className="card-content"
            ></CardContent>
            <div className="project-div">
              <h3>Uganda</h3>
            </div>
          </Card>
          <Card onClick={Navigate} className="card">
            <CardContent
              className="card-content"
              style={{ backgroundImage: "url(./img/non-profit/card-img1.png)" }}
            ></CardContent>
            <div className="project-div">
              <h3>Nepal</h3>
            </div>
          </Card>
          <Card onClick={Navigate} className="card">
            <CardContent
              className="card-content"
              style={{ backgroundImage: "url(./img/non-profit/card-img2.png)" }}
            ></CardContent>
            <div className="project-div">
              <h3>Syria</h3>
            </div>
          </Card>
          <Card onClick={Navigate} className="card">
            <CardContent
              className="card-content"
              style={{
                backgroundImage: "url(./img/non-profit/card-img3.jpeg)",
              }}
            ></CardContent>
            <div className="project-div">
              <h3>Trygt tilbake til skolen etter pandemien</h3>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
