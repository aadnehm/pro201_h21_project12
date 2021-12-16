import React from "react";
import { useNavigate } from "react-router";
/* CSS */
import "./nonProfit.css";
/* Components */
import HeaderNonProfit from "../../components/non-profit-pages/HeaderNonProfit";
/* MUI */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function NonProfit({ selectedOrg }) {
  const headerText = selectedOrg.description;
  const navigate = useNavigate();
  const img = "url(./img/" + selectedOrg.img + ")";
  function Navigate() {
    navigate("/non-project");
  }
  return (
    <div style={{ backgroundImage: img }} className="non-profit-container">
      <HeaderNonProfit text={headerText} org={selectedOrg}></HeaderNonProfit>
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
