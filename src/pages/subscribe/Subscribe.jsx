import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
/* MUI */
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import InstagramIcon from "@mui/icons-material/Instagram";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FeedIcon from "@mui/icons-material/Feed";

/* CSS */
import "./subscribe.css";
import ThankYou from "../../components/Subscription/ThankYou";
import PaymentPage from "../subscription-page/PaymentPage";
import { goToTopQuickly } from "../../lib/toTop";
import NonProfitsData from "../../components/non-profits-data/NonProfitsData";

export function Subscribe() {
  const [activeStep, setActiveStep] = React.useState(0);
  useEffect(() => {
    goToTopQuickly();
  }, [activeStep]);
  let selectedData;
  //Finding data that has been send with navigate hook
  const location = useLocation();

  useEffect(() => {}, [location]);
  let selectedNonProfit = {};
  const nonProfitQuery = window.location.pathname
    .split("/")
    .slice(2)[0]
    .toLowerCase();
  console.log(nonProfitQuery);
  const data = NonProfitsData;
  for (let i = 0; i < data.length; i++) {
    const name = data[i].name.replace(/ /g, "").toLowerCase();
    if (name === nonProfitQuery) {
      selectedNonProfit = data[i];
      break;
    }
  }
  selectedData = selectedNonProfit;

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
  console.log(location.pathname.split("/").length);
  if (location.pathname.split("/").length === 5) {
    const projectQuery = window.location.pathname
      .split("/")
      .slice(3)[0]
      .toLowerCase();

    for (let i = 0; i < selectedNonProfit.projects.length; i++) {
      const name = selectedNonProfit.projects[i].name
        .replace(/ /g, "")
        .toLowerCase();

      console.log(name);
      console.log(projectQuery);
      if (name === projectQuery) {
        selectedProject = selectedNonProfit.projects[i];
        break;
      }
    }
    console.log(selectedProject);
    selectedData = selectedProject;

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
  }

  return (
    <div className="subscribe-page-container">
      <SubscribeStepper activeStep={activeStep} setActiveStep={setActiveStep} />
      <div className="subscribe-content-border">
        <div className="subscribe-content">
          {activeStep === 0 && (
            <SubscribeContent
              setActiveStep={setActiveStep}
              selectedData={selectedData}
            />
          )}
          {activeStep === 1 && (
            <PaymentPage
              setActiveStep={setActiveStep}
              selectedData={selectedData}
            />
          )}
          {activeStep === 2 && <ThankYou selectedData={selectedData} />}
        </div>
      </div>
    </div>
  );
}

function SubscribeContent(props) {
  const [amount, setAmount] = useState();
  console.log(props);
  let img = props.selectedData.img;
  if (location.pathname.split("/").length === 5) {
    img = props.selectedData.img3;
  }
  const img1 = props.selectedData.img1;
  const img2 = props.selectedData.img2;
  const name = props.selectedData.name;
  const project = props.selectedData.project;

  return (
    <>
      <h1>Payment plan</h1>

      <div className="subscribe-hero-images">
        <div className="subscribe-big-img">
          <img src={img} alt="subscribe-img" />
          {project ? (
            <div>
              <h6 className="subscription-choosen-text">
                {name} - {project && project}
              </h6>
            </div>
          ) : (
            <h5 className="subscription-choosen-text">{name}</h5>
          )}
        </div>
        <div className="subscribe-small-img ">
          <img
            className="subscribe-first-small-img"
            src={img1}
            alt="subscribe-img"
          />
        </div>
        <div className="subscribe-small-img ">
          <img
            className="subscribe-second-small-img"
            src={img2}
            alt="subscribe-img"
          />
        </div>
      </div>

      <div className="subscription-form">
        <FormSubscribe setAamount={setAmount} amount={amount} />
        <WhatYouGetSubscribe amount={amount} />
      </div>
      <button
        className={"donate-button subscribe-btn"}
        onClick={() => {
          props.setActiveStep(1);
        }}
      >
        Go to payment
      </button>
    </>
  );
}

function SubscribeStepper(props) {
  const { activeStep, setActiveStep } = props;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          "& .MuiStepLabel-root .Mui-completed": {
            color: "secondary.dark", // circle color (COMPLETED)
          },
          "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": {
            color: "grey.500", // Just text label (COMPLETED)
          },
          "& .MuiStepLabel-root .Mui-active": {
            color: "secondary.main", // circle color (ACTIVE)
          },
          "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
            color: "black", // Just text label (ACTIVE)
          },
          "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
            fill: "white", // circle's number (ACTIVE)
          },
        }}
      >
        <Step>
          <StepLabel>Payment plan</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finish</StepLabel>
        </Step>
      </Stepper>
      {activeStep >= 1 && (
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
      )}
    </Box>
  );
}

function FormSubscribe({ setAamount, amount }) {
  const [date, setDate] = useState();
  const handleChange = (event) => {
    setAamount(event.target.value);
  };
  return (
    <>
      <FormControl size="small">
        <h3>Choose donation amount?</h3>
        <TextField
          value={amount}
          label="Select amount"
          onChange={handleChange}
          color="secondary"
          required
          select
        >
          <MenuItem key={1} value={500}>
            500 NOK
          </MenuItem>
          <MenuItem key={2} value={750}>
            750 NOK
          </MenuItem>
          <MenuItem key={3} value={1000}>
            1000 NOK
          </MenuItem>
          <MenuItem key={4} value={1250}>
            1250 NOK
          </MenuItem>
          <MenuItem key={5} value={1500}>
            1500 NOK
          </MenuItem>
          <MenuItem key={6} value={1750}>
            1750 NOK
          </MenuItem>
          <MenuItem key={7} value={2000}>
            2000 NOK
          </MenuItem>
        </TextField>

        <h3>Choose start date?</h3>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Choose a date"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            color="secondary"
            required
            renderInput={(params) => (
              <TextField
                color="secondary"
                fullWidth
                margin="dense"
                required
                {...params}
              />
            )}
          />
        </LocalizationProvider>

        <h3>Choose for how long?</h3>
        <TextField label="Select time" select color="secondary" required>
          <MenuItem key={1} value={1}>
            1 Month
          </MenuItem>
          <MenuItem key={2} value={3}>
            3 Month
          </MenuItem>
          <MenuItem key={3} value={6}>
            6 Month
          </MenuItem>
          <MenuItem key={4} value={9}>
            9 Month
          </MenuItem>
          <MenuItem key={5} value={12}>
            12 Month
          </MenuItem>
          <MenuItem key={6} value={2}>
            2 Years
          </MenuItem>
          <MenuItem key={7} value={3}>
            3 Years
          </MenuItem>
        </TextField>
      </FormControl>
    </>
  );
}

function WhatYouGetSubscribe({ amount }) {
  return (
    <div className="subscribe-what-you-get">
      {!amount ? (
        <h3>Choose donation to see the content you will get</h3>
      ) : (
        <h3>Content you will get</h3>
      )}
      {amount <= 1000 && (
        <div>
          <div className="subscribe-what-you-get-wrapper">
            <InstagramIcon />
            <p>
              1 Inside story you can share on social media to showcase your
              impact every month
            </p>
          </div>
          <div className="subscribe-what-you-get-wrapper">
            <FeedIcon />
            <p>
              1 article from the frontline with a exclusive interview with one
              of our volunteers.
            </p>
          </div>
        </div>
      )}
      {amount > 1000 && amount < 1750 && (
        <div>
          <div className="subscribe-what-you-get-wrapper">
            <InstagramIcon />
            <p>
              2 Inside story you can share on social media to showcase your
              impact every month
            </p>
          </div>
          <div className="subscribe-what-you-get-wrapper">
            <FeedIcon />
            <p>
              2 article from the frontline with a exclusive interview with one
              of our volunteers.
            </p>
          </div>
          <div className="subscribe-what-you-get-wrapper">
            <BarChartIcon />
            <p>Progress reports to use in your annual report</p>
          </div>
        </div>
      )}
      {amount >= 1750 && (
        <div>
          <div className="subscribe-what-you-get-wrapper">
            <InstagramIcon />
            <p>
              4 Inside story you can share on social media to showcase your
              impact every month
            </p>
          </div>
          <div className="subscribe-what-you-get-wrapper">
            <FeedIcon />
            <p>
              2 article from the frontline with a exclusive interview with one
              of our volunteers.
            </p>
          </div>
          <div className="subscribe-what-you-get-wrapper">
            <BarChartIcon />
            <p>Progress reports to use in your annual report</p>
          </div>
          <div className="subscribe-what-you-get-wrapper">
            <CalendarMonthIcon />
            <p>
              Invitation to come down and see for yourself the impact your
              business is making
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
