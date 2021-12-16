import React from "react";
/* CSS */
import "./nonProfit.css";
/* Components */
import HeaderNonProfit from "../../components/non-profit-pages/HeaderNonProfit";
/* MUI */
import { Tabs, Tab } from "@mui/material";

export default function NonprofitProject() {
  const selectedOrg = JSON.parse(localStorage.getItem("org"));

  const [value, setValue] = React.useState(0);
  const img = "url(./img/" + selectedOrg.img + ")";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{ backgroundImage: img }}
      className="non-profit-container non-profit-project-container"
    >
      <HeaderNonProfit
        text={selectedOrg.impact}
        org={selectedOrg}
      ></HeaderNonProfit>

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
