import React from "react";
import { useNavigate } from "react-router";

/* CSS */
import "./nonProfit.css";
/* MUI */
import { Card, CardContent, Button } from "@mui/material/";
import { Tabs, Tab } from "@mui/material";

export default function NonProfit() {
  /* Tabs */
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /* Navigation */
  const navigate = useNavigate();
  function Navigate() {
    navigate("/non-project");
  }
  return (
    <div
      className="non-profit-container"
      style={{ backgroundImage: "url(./img/non-profit/lines.png)" }}
    >
      <div className="non-profit-hero">
        <div className="header-div">
          <h1>REDD</h1>
          <h1>BARNA</h1>
        </div>
        <div className="header-text">
          <p>
            Redd Barna kjemper for{" "}
            <span style={{ fontWeight: "bold" }}>barns rettigheter</span>, og
            for at alle barn skal leve et
            <span style={{ fontWeight: "bold" }}> verdig liv</span> – uansett
            hvem de er og hvor de bor. Redd Barna jobber i{" "}
            <span style={{ fontWeight: "bold" }}>122</span> land over hele
            verden, også i Norge!
          </p>
        </div>
      </div>

      <div className="our-projects-div">
        <Tabs
          className="tabs-div"
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          centered
        >
          <Tab label="About" />
          <Tab label="Our projects" />
          <Tab label="The people" />
        </Tabs>

        <div className="cards-div">
          <img
            className="arrow-logo"
            src="./img/non-profit/arrow1.png"
            alt="arrow"
          />
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
          <img
            className="arrow-logo"
            src="./img/non-profit/arrow.png"
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
}


