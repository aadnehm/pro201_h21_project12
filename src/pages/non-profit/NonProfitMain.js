import React, { useEffect, useState } from "react";
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
import { useLocation } from "react-router";
import AboutUs from "../../components/AboutUs/AboutUs";

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
  let location = useLocation();
  useEffect(() => {}, [location]);
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

  const img = "url(" + process.env.PUBLIC_URL + selectedNonProfit.img;

  return (
    <div className={"nonprofit-content"}>
      <header
        style={{
          backgroundImage:
            "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))," + img,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="nonProfit-search-hero"
      >
        <div className="nonProfit-search-hero-text">
          <h1>{selectedNonProfit.name}</h1>
          <p>{selectedNonProfit.aboutText}</p>
          <button className={"donate-button"}>Donate</button>
        </div>
      </header>
      <NavTabs data={selectedNonProfit} />
      <div className={"grey-line"} />
    </div>
  );
}

function NavTabs(props) {
  const [value, setValue] = useState(0);

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
        width: "80vw",
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
        <CustomTab iconPosition="start" label="About" {...a11yProps(0)} />
        <CustomTab iconPosition="start" label="Projects" {...a11yProps(1)} />
        <CustomTab
          iconPosition="start"
          label="Inside stories"
          {...a11yProps(2)}
        />
        <CustomTab
          iconPosition="start"
          label="What you get"
          {...a11yProps(3)}
        />
        <CustomTab
          iconPosition="start"
          label="Our donators"
          {...a11yProps(4)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AboutUs />
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}>
        <InsideStories selectedNonProfit={props.data} />
      </TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
      <TabPanel value={value} index={4}></TabPanel>
    </Box>
  );
}
