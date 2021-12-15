import React from "react";
import "./nonProfit.css";
import HeaderNonProfit from "../../components/non-profit-pages/HeaderNonProfit";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function NonprofitProject() {
  const headerText =
    "Pandemien har skapt en av de største utdanningskrisene i historien. 750 millioner barn står i dag utenfor skolen. Sammen kan vi hjelpe barn verden over til å komme trygt tilbake til skolen etter pandemien.";
  return (
    <div
      style={{ backgroundImage: "url(./img/non-profit/red-barna.jpg)" }}
      className="non-profit-container"
    >
      <HeaderNonProfit text={headerText}></HeaderNonProfit>
      
    </div>
  );
}
