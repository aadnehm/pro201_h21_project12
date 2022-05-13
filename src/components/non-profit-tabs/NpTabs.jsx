import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NpCardGrid } from "../NonProfit-cardgrid/NpCardGrid";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

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
          <Typography>{children}</Typography>
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

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <h3 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        Categories of Non-profits
      </h3>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="tabs"
        centered
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab
          icon={<ThumbUpOffAltOutlinedIcon />}
          iconPosition="start"
          label="Our recommendations"
          {...a11yProps(0)}
        />
        <Tab
          icon={<VolunteerActivismOutlinedIcon />}
          iconPosition="start"
          label="Humanitarian"
          {...a11yProps(1)}
        />
        <Tab
          icon={<SchoolOutlinedIcon />}
          iconPosition="start"
          label="Education"
          {...a11yProps(2)}
        />
        <Tab
          icon={<LanguageOutlinedIcon />}
          iconPosition="start"
          label="Enviromental"
          {...a11yProps(3)}
        />
        <Tab
          icon={<FavoriteBorderOutlinedIcon />}
          iconPosition="start"
          label="Equality"
          {...a11yProps(4)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <NpCardGrid />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Humanitarian
        <NpCardGrid />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Education
      </TabPanel>
      <TabPanel value={value} index={3}>
        Enviromental
      </TabPanel>
      <TabPanel value={value} index={4}>
        Equality
      </TabPanel>
    </Box>
  );
}
