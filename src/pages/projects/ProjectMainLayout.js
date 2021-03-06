import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import NonProfitsData from "../../components/non-profits-data/NonProfitsData";
import { withStyles } from "@material-ui/core";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import "./project-main-layout.css";
import { useLocation, useNavigate } from "react-router";

import TabPanel from "../../lib/TabPanel";
import { goToTopQuickly } from "../../lib/toTop";
import InsideStories from "../../components/inside-stories/InsideStories";
import { OurProjectDonators } from "../../components/Projects-OurDonators/OurDonators";
import AboutProjects from "../../components/about-us-projects/AboutProjects";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function Projects() {
  const navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {}, [location]);
  let selectedNonProfit = {};
  const nonProfitQuery = window.location.pathname
    .split("/")
    .slice(-2)[0]
    .toLowerCase();
  const data = NonProfitsData;
  for (let i = 0; i < data.length; i++) {
    const name = data[i].name.replace(/ /g, "").toLowerCase();
    if (name === nonProfitQuery) {
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
          background: "#FEFEFE",
          zIndex: "2",
        }}
      >
        This non profit does not exist
      </h1>
    );
  }

  let selectedProject = {};
  const projectQuery = window.location.pathname
    .split("/")
    .slice(-1)[0]
    .toLowerCase();

  for (let i = 0; i < selectedNonProfit.projects.length; i++) {
    const name = selectedNonProfit.projects[i].name
      .replace(/ /g, "")
      .toLowerCase();
    if (name === projectQuery) {
      selectedProject = selectedNonProfit.projects[i];
      break;
    }
  }

  if (selectedProject.name === undefined) {
    return (
      <h1
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "#FEFEFE",
          zIndex: "2",
        }}
      >
        This project does not exist
      </h1>
    );
  }

  const img = "url(" + process.env.PUBLIC_URL + selectedProject.img1;

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
          <h1>{selectedProject.name}</h1>
          <p style={{ width: "40vw" }}>{selectedProject.headerInfo}</p>
          <button
            className={"donate-button"}
            onClick={() => {
              navigate(
                "/nonprofit/" +
                  nonProfitQuery +
                  "/" +
                  projectQuery +
                  "/subscribe"
              );
            }}
          >
            Donate
          </button>
        </div>
      </header>
      <NavTabs data={selectedProject} nonProfit={selectedNonProfit} />
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
  const navigate = useNavigate();

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
        transition: "transform .2s",
      }}
      //style={{ display: "flex" }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="tabs"
        textColor="secondary"
        indicatorColor="secondary"
      >
        <CustomTab iconPosition="start" label="About" {...a11yProps(0)} />
        <CustomTab
          iconPosition="start"
          label="Inside stories"
          {...a11yProps(1)}
        />
        <CustomTab
          iconPosition="start"
          label="Our donators"
          {...a11yProps(2)}
        />

        <button
          style={{
            marginRight: 0,
            marginLeft: "auto",
            border: "none",
            background: "transparent",
            fontWeight: "600",
            color: "rgba(0, 0, 0, 0.6)",
          }}
          onClick={() => {
            navigate(
              "/nonprofit/" +
                props.nonProfit.name.replace(/ /g, "").toLowerCase()
            );
            goToTopQuickly();
          }}
        >
          {"Back to " + props.nonProfit.name}
        </button>
      </Tabs>
      <TabPanel value={value} index={0}>
        <AboutProjects project={props.data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InsideStories selectedNonProfit={props.data} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OurProjectDonators project_name={props.data.name} />
      </TabPanel>
    </Box>
  );
}
