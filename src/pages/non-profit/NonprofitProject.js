import React from "react";
import { Link } from "react-router-dom";
/* CSS */
import "./nonProfit.css";

/* MUI */
import { Card, CardContent, Button } from "@mui/material/";
import { Tabs, Tab } from "@mui/material";

export default function NonprofitProject() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className="non-profit-container"
      style={{ backgroundImage: "url(./img/non-profit/lines.png)" }}
    >
      <div className="non-profit-hero">
      <div className="right-header-flag">
        <h3>REDD BARNA</h3>
      </div>
        <div className="header-div">
          <h1>NEPAL</h1>
        </div>
        <div className="header-text">
          <p>
            Utdanning for jenter i Nepal. Prosjektet støtter jenter som tilhører
            marginaliserte samfunn. Mange jenter lever i en kritisk situasjon
            der de står i fare for fysisk, mental og seksuell utnyttelse.
          </p>
        </div>

        <Button
          className="header-text-button"
          variant="contained"
          component={Link}
          to="/choose-subscription"
        >
          Donate
        </Button>
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
          <Tab label="Partners" />
          <Tab label="About" />
          <Tab label="Inside stories" />
          <Tab label="The people" />
          <Tab label="Podcast" />
        </Tabs>

        <div className="cards-div">
          <img
            className="arrow-logo"
            src="./img/non-profit/arrow1.png"
            alt="arrow"
          />
          <Card className="card-non-profit">
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
          <Card className="card-non-profit">
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
          <Card className="card-non-profit">
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
          <Card className="card-non-profit">
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
