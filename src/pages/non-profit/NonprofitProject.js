import React, { useState } from "react";
/* CSS */
import "./nonProfit.css";
/* Components */
import HeaderNonProfit from "../../components/non-profit-pages/HeaderNonProfit";
/* MUI */
import {Tabs, Tab, Button} from "@mui/material";

export default function NonprofitProject() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const headerText =
    "Pandemien har skapt en av de største utdanningskrisene i historien. 750 millioner barn står i dag utenfor skolen. Sammen kan vi hjelpe barn verden over til å komme trygt tilbake til skolen etter pandemien.";
  return (
    <div
      style={{ backgroundImage: "url(./img/non-profit/red-barna.jpg)" }}
      className="non-profit-container non-profit-project-container"
    >
      <HeaderNonProfit text={headerText}></HeaderNonProfit>

      

      <Tabs
        className="tabs-div"
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
          <Tab className="tab" label="Inside storyes" />
          <Tab className="tab" label="About" />
          <Tab className="tab" label="Impact" />
      </Tabs>
    </div>
  );
}
