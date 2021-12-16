import React from "react";
import { useNavigate } from "react-router";
/* CSS */
import "./nonProfit.css";
/* Components */
import HeaderNonProfit from "../../components/non-profit-pages/HeaderNonProfit";
/* MUI */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function NonProfit() {
  const selectedOrg = JSON.parse(localStorage.getItem("org"));
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
          <Card onClick={Navigate} className="card-non-profit">
            <CardContent
              style={{ backgroundImage: "url(./img/non-profit/card-img.png)" }}
              className="card-content"
            ></CardContent>
            <div className="project-div-non-profit">
              <h3>Uganda</h3>
              <div className="logo-firma-non-profit-img-wrap">
                <img
                  class="logo-firma-non-profit-img"
                  src="./img/non-profit/firma-logo1.png"
                  alt="logo-firma1"
                />
                <img
                  class="logo-firma-non-profit-img"
                  src="./img/non-profit/firma-logo2.png"
                  alt="logo-firma2"
                />
                <img
                  class="logo-firma-non-profit-img"
                  src="./img/non-profit/firma-logo3.png"
                  alt="logo-firma3"
                />
              </div>
            </div>
          </Card>
          <Card onClick={Navigate} className="card-non-profit">
            <CardContent
              className="card-content"
              style={{ backgroundImage: "url(./img/non-profit/card-img1.png)" }}
            ></CardContent>
            <div className="project-div-non-profit">
              <h3>Nepal</h3>
              <div className="logo-firma-non-profit-img-wrap">
                <img
                  class="logo-firma-non-profit-img"
                  src="./img/non-profit/firma-logo1.png"
                  alt="logo-firma1"
                />
                <img
                  class="logo-firma-non-profit-img"
                  src="./img/non-profit/firma-logo2.png"
                  alt="logo-firma2"
                />
                <img
                  class="logo-firma-non-profit-img"
                  src="./img/non-profit/firma-logo3.png"
                  alt="logo-firma3"
                />
              </div>
            </div>
          </Card>
          <Card onClick={Navigate} className="card-non-profit">
            <CardContent
              className="card-content"
              style={{ backgroundImage: "url(./img/non-profit/card-img2.png)" }}
            ></CardContent>
            <div className="project-div-non-profit">
              <h3>Syria</h3>
              <div className="logo-firma-non-profit-img-wrap">
                <img
                  class="logo-firma-non-profit-img"
                  src="./img/non-profit/firma-logo1.png"
                  alt="logo-firma1"
                />
                <img
                  class="logo-firma-non-profit-img"
                  src="./img/non-profit/firma-logo2.png"
                  alt="logo-firma2"
                />
                <img
                  class="logo-firma-non-profit-img"
                  src="./img/non-profit/firma-logo3.png"
                  alt="logo-firma3"
                />
              </div>
            </div>
          </Card>
          <Card onClick={Navigate} className="card-non-profit">
            <CardContent
              className="card-content"
              style={{
                backgroundImage: "url(./img/non-profit/card-img3.jpeg)",
              }}
            ></CardContent>
            <div className="project-div-non-profit">
              <h3>Trygt tilbake til skolen</h3>
              <div className="logo-firma-non-profit-img-wrap">
                <img
                  class="logo-firma-non-profit-img"
                  src="./img/non-profit/firma-logo1.png"
                  alt="logo-firma1"
                />
                <img
                  class="logo-firma-non-profit-img"
                  src="./img/non-profit/firma-logo2.png"
                  alt="logo-firma2"
                />
                <img
                  class="logo-firma-non-profit-img"
                  src="./img/non-profit/firma-logo3.png"
                  alt="logo-firma3"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
