import { React, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { NpCardGrid } from "../non-profit-cardgrid/NpCardGrid";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NonProfitsData from "../non-profits-data/NonProfitsData";
import { withStyles } from "@material-ui/core";

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

function ThumbUp() {
  return (
    <img
      src={process.env.PUBLIC_URL + "/img/icons/thumbup.png"}
      style={{
        height: "1.3em",
        width: "1.3em",
        marginRight: "0.5em",
        opacity: 0.7,
      }}
      alt={"icon"}
    />
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

export default function NavTabs() {
  const data = NonProfitsData;
  const [chosenCat, setChosenCat] = useState("recommended");
  const [value, setValue] = useState(0);

  const handleCatBtn = (e) => {
    setChosenCat(e);
    document
      .getElementsByClassName("nonProfit-search-categories")[0]
      .scrollIntoView();
  };
  const filteredData = data.filter((post) => {
    return post.categories.includes(chosenCat);
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const CustomTab = withStyles({
    root: {
      textTransform: "none",
    },
  })(Tab);

  return (
    <Box sx={{ width: "100%", marginTop: "5vh", fontSize: 22 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="tabs"
        textColor="secondary"
        indicatorColor="secondary"
      >
        <CustomTab
          icon={<ThumbUp />}
          iconPosition="start"
          label="Our recommendations"
          onClick={() => handleCatBtn("recommended")}
          {...a11yProps(0)}
        />
        <CustomTab
          icon={<VolunteerActivismOutlinedIcon />}
          iconPosition="start"
          label="Humanitarian"
          onClick={() => handleCatBtn("humanitarian")}
          {...a11yProps(1)}
        />
        <CustomTab
          icon={<SchoolOutlinedIcon />}
          iconPosition="start"
          label="Knowledge"
          onClick={() => handleCatBtn("knowledge")}
          {...a11yProps(2)}
        />
        <CustomTab
          icon={<LanguageOutlinedIcon />}
          iconPosition="start"
          label="Enviromental"
          onClick={() => handleCatBtn("environment")}
          {...a11yProps(3)}
        />
        <CustomTab
          icon={<FavoriteBorderOutlinedIcon />}
          iconPosition="start"
          label="Water"
          onClick={() => handleCatBtn("water")}
          {...a11yProps(4)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <NpCardGrid data={filteredData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NpCardGrid data={filteredData} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NpCardGrid data={filteredData} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NpCardGrid data={filteredData} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <NpCardGrid data={filteredData} />
      </TabPanel>
    </Box>
  );
}
