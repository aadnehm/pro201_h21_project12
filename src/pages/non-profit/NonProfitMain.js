import React, { useState } from "react";
import { ButtonAppBar } from "../nonProfitSearch/NonProfitSearch";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import NonProfitsData from "../../components/search/NonProfitsData";
import { Button, withStyles } from "@material-ui/core";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import FooterTest from "../../components/FooterTest/FooterTest";
import "./nonProfitMain.css";
import InsideStories from "../../components/non-profit-pages/InsideStories";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ width: "100%" }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function NonProfits() {
  let selectedNonProfit = {};
  const query = window.location.pathname.split("/").slice(-1)[0].toLowerCase();
  const data = NonProfitsData;
  for (let i = 0; i < data.length; i++) {
    const name = data[i].name.replace(/ /g, "").toLowerCase();
    if (name === query) {
      selectedNonProfit = data[i];
      break;
    }
  }

  console.log(selectedNonProfit);

  const img = "url(" + process.env.PUBLIC_URL + selectedNonProfit.img;

  return (
    <div className={"nonprofit-content"}>
      <header
        style={{
          backgroundImage: img,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="nonProfit-search-hero"
      >
        <ButtonAppBar />
        <div className="nonProfit-search-hero-text">
          <h1>{selectedNonProfit.name}</h1>
          <p>{selectedNonProfit.aboutText}</p>
          <button className={"donate-button"}>Donate</button>
        </div>
      </header>
      <NavTabs data={selectedNonProfit} />
      <div className={"grey-line"} />

      <FooterTest />
    </div>
  );
}

function NavTabs(props) {
  const [chosenNonProfit, setChosenNonProfit] = useState("recommended");
  const [value, setValue] = useState(0);

  const handleCatBtn = (e) => {
    setChosenNonProfit(e);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const CustomTab = withStyles({
    root: {
      textTransform: "none",
    },
  })(Tab);

  return (
    <Box
      sx={{
        width: "70vw",
        marginTop: "100px",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="tabs"
        textColor="secondary"
        indicatorColor="secondary"
      >
        <CustomTab
          iconPosition="start"
          label="About"
          onClick={() => handleCatBtn("recommended")}
          {...a11yProps(0)}
        />
        <CustomTab
          iconPosition="start"
          label="Projects"
          onClick={() => handleCatBtn("humanitarian")}
          {...a11yProps(1)}
        />
        <CustomTab
          iconPosition="start"
          label="Inside stories"
          onClick={() => handleCatBtn("education")}
          {...a11yProps(2)}
        />
        <CustomTab
          iconPosition="start"
          label="What you get"
          onClick={() => handleCatBtn("environment")}
          {...a11yProps(3)}
        />
        <CustomTab
          iconPosition="start"
          label="Our donators"
          onClick={() => handleCatBtn("equality")}
          {...a11yProps(4)}
        />
      </Tabs>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}>
        <InsideStories />
      </TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
      <TabPanel value={value} index={4}></TabPanel>
    </Box>
  );
}
