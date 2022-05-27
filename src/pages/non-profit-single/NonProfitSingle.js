import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import NonProfitsData from "../../components/non-profits-data/NonProfitsData";
import { withStyles } from "@material-ui/core";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import "./non-profit-single.css";
import InsideStories from "../../components/inside-stories/InsideStories";
import { useLocation } from "react-router";
import AboutUs from "../../components/about-us/AboutUs";
import WhatYouGet from "../../components/what-you-get/WhatYouGet";
import OurDonators from "../../components/our-donators/OurDonators";
import { ProjectCardGrid } from "../../components/projects-cards/ProjectCard";
import TabPanel from "../../lib/TabPanel";

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

  if (selectedNonProfit.name === undefined) {
    return (
      <h1
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "white",
          zIndex: "2",
        }}
      >
        This non profit does not exist
      </h1>
    );
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
        <div className="nonProfit-header-content">
          <h1>{selectedNonProfit.name}</h1>
          <p>{selectedNonProfit.aboutText}</p>
          <button id={"top"} className={"donate-button"}>
            Donate
          </button>
        </div>
      </header>
      <NavTabs data={selectedNonProfit} />
    </div>
  );
}

const goToTabs = () => {
  window.scrollTo({
    top: window.innerHeight * 0.6,
    behavior: "smooth",
  });
};

function NavTabs(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    goToTabs();
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
        <AboutUs data={props.data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProjectCardGrid data={props.data} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InsideStories selectedNonProfit={props.data} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <WhatYouGet />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <OurDonators />
      </TabPanel>
    </Box>
  );
}
