import React, { useState } from "react";
import { useLocation } from "react-router-dom";
/* MUI */
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
/* 
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"; */


/* CSS */
import "./subscribe.css";

export function Subscribe() {
  const [amount, setAamount] = useState();
  const [howLong, setHowLong] = useState();
  const [date, setDate] = useState();
  //Finding img that has been send with navigate hook
  const location = useLocation();
  const img = location.state.img;

  const handleChange = (event) => {
    setAamount(event.target.value);
  };

  return (
    <div className="subscribe-page-container">
      <SubscribeStepper></SubscribeStepper>
      <div className="subscribe-content">
        <h1>Choose your donation strategy</h1>
        <div className="subscribe-hero-images">
          <img className="subscribe-big-img" src={img} alt="subscribe-img" />
          <img className="subscribe-small-img" src={img} alt="subscribe-img" />
          <img className="subscribe-small-img" src={img} alt="subscribe-img" />
        </div>

        <div className="subscription-form">
          <FormControl size="small">
            <h3>Choose donation amount?</h3>
            <TextField
              value={amount}
              label="Select amount"
              onChange={handleChange}
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
{/* 
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="For desktop"
                value={date}
                minDate={new Date("2017-01-01")}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider> */}

            <h3>Choose for how long?</h3>
            <TextField
              value={howLong}
              label="Select time"
              onChange={handleChange}
              select
            >
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
        </div>
      </div>
    </div>
  );
}

function SubscribeStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>Choose payment plan</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>

      <Button color="inherit" disabled={activeStep === 0} onClick={handleBack}>
        Back
      </Button>
      <Button onClick={handleNext}>Next</Button>
    </Box>
  );
}
