import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
/* data */
import { CountryData } from "./data/CountryData";
import { subscriptionModelData } from "./data/SubscriptionModelData";
/* css */
import "./PaymentForm.css";
/* MUI */
import {
  Button,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  TextField,
} from "@mui/material";
/* img */
import visaImg from "./img/visa.png";
import masterCardImg from "./img/MasterCard.png";
import vippsImg from "./img/vipps.png";

export default function PaymentForm(props) {
  //Finding data that has been send with navigate hook
  /* Navigate */
  const navigate = useNavigate();
  /* state */
  const [subscription, setSubscription] = React.useState("");
  const handleChangePlan = (event) => {
    setSubscription(event.target.value);
  };
  const [country, setCountry] = React.useState("");
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const [email, setEmail] = React.useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const [card, setCard] = React.useState("");
  const handleCardChange = (event) => {
    setCard(event.target.value);
  };
  const [mmyy, setMmyy] = React.useState("");
  const handleMmyy = (event) => {
    setMmyy(event.target.value);
  };
  const [cvc, setCvc] = React.useState("");
  const handleCvc = (event) => {
    setCvc(event.target.value);
  };
  const [cardName, setCardName] = React.useState("");
  const handleCardName = (event) => {
    setCardName(event.target.value);
  };
  const [saveCard, setSaveCard] = React.useState("");
  const handleSaveCard = (event) => {
    setSaveCard(event.target.value);
  };
  const [zip, setZip] = React.useState("");
  const handleZip = (event) => {
    setZip(event.target.value);
  };

  return (
    <form autoComplete="off">
      <div className="form-grid-container">
        <Grid container>
          {/* vipps button */}
          <Grid item xs={12}>
            <Button
              className="vipps-button"
              variant="contained"
              size="large"
              fullWidth
            >
              Pay With <img src={vippsImg} style={{ height: "2em" }} alt="" />
            </Button>
          </Grid>
          {/* line and text */}
          <Grid className="heading-with-lines" item xs={12}>
            <div className="lines">
              <span className="line-text">Or pay with card </span>
            </div>
          </Grid>
          {/* email */}
          <Grid item xs={12}>
            <TextField
              style={{
                margin: ".4em 0",
                width: "100%",
                backgroundColor: "#fefefe",
              }}
              color="secondary"
              required
              value={email}
              onChange={handleEmailChange}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
            />
          </Grid>
          {/* label for card information */}
          <div className="label">
            <label>Card information</label>

            <img
              className="pngIcon"
              src={visaImg}
              style={{ height: "1.2em" }}
              alt=""
            />
            <img
              className="pngIcon"
              src={masterCardImg}
              style={{ height: "1.2em" }}
              alt=""
            />
          </div>
          {/* card input fields */}

          <Grid item xs={12}>
            <div className={"display-none"}>
              <TextField
                style={{
                  margin: ".4em 0",
                  width: "100%",
                  backgroundColor: "#fefefe",
                }}
                color="secondary"
                required
                id="outlined-basic"
                placeholder="1234 1234 1234 1234"
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: false }}
                value={card}
                onChange={handleCardChange}
              />
            </div>
          </Grid>
          {/* mm/yy */}
          <Grid item xs={6}>
            <TextField
              style={{
                margin: ".4em 0",
                width: "100%",
                backgroundColor: "#fefefe",
              }}
              id="outlined-basic"
              label="mm/yy"
              variant="outlined"
              size="small"
              value={mmyy}
              onChange={handleMmyy}
              color="secondary"
              required
            />
          </Grid>
          {/* cvc */}
          <Grid item xs={6}>
            <TextField
              style={{
                margin: ".4em 0",
                width: "100%",
                backgroundColor: "#fefefe",
              }}
              id="outlined-basic"
              label="cvc"
              variant="outlined"
              size="small"
              value={cvc}
              onChange={handleCvc}
              color="secondary"
              required
            />
          </Grid>
          {/* name on card */}
          <Grid item xs={12}>
            <TextField
              style={{
                margin: ".4em 0",
                width: "100%",
                backgroundColor: "#fefefe",
              }}
              id="outlined-basic"
              label="Name on card"
              variant="outlined"
              size="small"
              value={cardName}
              onChange={handleCardName}
              color="secondary"
              required
            />
          </Grid>
          {/* radio save card information*/}
          <Grid item xs={12}>
            <div className="radio-button">
              <FormControlLabel
                style={{
                  margin: "0",
                  height: "0.2em",
                }}
                value="true"
                control={<Radio />}
                onChange={handleSaveCard}
                label="Save card information"
                name="save-card"
                size="small"
              />
            </div>
          </Grid>
          {/* label for card information */}
          <div className="label">
            <label>Country or region</label>
          </div>
          {/* select country or region */}
          <Grid item xs={12}>
            <div className={"display-none"}>
              <TextField
                select
                color="secondary"
                required
                size="small"
                value={country}
                onChange={handleChangeCountry}
                InputLabelProps={{ shrink: false }}
                style={{
                  margin: ".4em 0",
                  width: "100%",
                  backgroundColor: "#fefefe",
                }}
              >
                {CountryData.map((country) => (
                  <MenuItem key={country.name} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>
          {/* Zip */}
          <Grid item xs={12}>
            <TextField
              InputLabelProps={{ className: "textField" }}
              id="outlined-basic"
              label="ZIP"
              variant="outlined"
              size="small"
              value={zip}
              color="secondary"
              required
              onChange={handleZip}
              style={{
                margin: ".4em 0",
                width: "100%",
                backgroundColor: "#fefefe",
              }}
            />
          </Grid>

          {/* Confirm button */}
          <Grid item xs={12}>
            <Button
              className="confirm-button"
              variant="contained"
              size="large"
              fullWidth
              onClick={() => {
                props.setActiveStep(2);
              }}
            >
              <div>Confirm Payment</div>
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
}
