import React from "react";
import { Formik, Form, FormikConsumer } from "formik";
import * as Yup from "yup";
import "./PaymentForm.css";
import {
  Grid,
  Button,
  TextField,
  FormControlLabel,
  Radio,
  MenuItem,
} from "@mui/material";
import visaImg from "./img/visa.png";
import masterCardImg from "./img/MasterCard.png";
import vippsImg from "./img/vipps.png";

const INITIAL_FORM_STATE = {};
const FORM_VALIDATION = Yup.object().shape({});

export default function PaymentForm() {
  return (
    <div className="payment-container">
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
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
                  Pay With{" "}
                  <img src={vippsImg} style={{ height: "2em" }} alt="" />
                </Button>
              </Grid>
              {/* line and text */}
              <Grid className="heading-with-lines" item xs={12}>
                <div className="lines">
                  <span className="line-text">Or pay with card </span>
                </div>
              </Grid>
              {/* select subscription */}
              <Grid item xs={12}>
                <TextField
                  select
                  variant="outlined"
                  size="small"
                  label="Medium+ Subscription"
                  style={{
                    margin: ".4em 0",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                >
                  <MenuItem key="1" value="small">
                    Small business
                  </MenuItem>
                  <MenuItem key="2" value="medium">
                    Medium business
                  </MenuItem>
                  <MenuItem key="3" value="medium+">
                    Medium+ business
                  </MenuItem>
                </TextField>
              </Grid>
              {/* email */}
              <Grid item xs={12}>
                <TextField
                  style={{
                    margin: ".4em 0",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
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
                <TextField
                  style={{
                    margin: ".4em 0",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                  id="outlined-basic"
                  label="1234 1234 1234 1234"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              {/* mm/yy */}
              <Grid item xs={6}>
                <TextField
                  style={{
                    margin: ".4em 0",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                  id="outlined-basic"
                  label="mm/yy"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              {/* cvc */}
              <Grid item xs={6}>
                <TextField
                  style={{
                    margin: ".4em 0",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                  id="outlined-basic"
                  label="cvc"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              {/* name on card */}
              <Grid item xs={12}>
                <TextField
                  style={{
                    margin: ".4em 0",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                  id="outlined-basic"
                  label="Name on card"
                  variant="outlined"
                  size="small"
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
                    value="save-card"
                    control={<Radio />}
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
                <TextField
                  select
                  variant="outlined"
                  size="small"
                  label="Norway"
                  style={{
                    margin: ".4em 0",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                >
                  <MenuItem key="1" value="small">
                    Small business
                  </MenuItem>
                  <MenuItem key="2" value="medium">
                    Medium business
                  </MenuItem>
                  <MenuItem key="3" value="medium+">
                    Medium+ business
                  </MenuItem>
                </TextField>
              </Grid>
              {/* Zip */}
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{ className: "textField" }}
                  id="outlined-basic"
                  label="ZIP"
                  variant="outlined"
                  size="small"
                  style={{
                    margin: ".4em 0",
                    width: "100%",
                    backgroundColor: "#fff",
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
                >
                  <div>Confirm Payment</div>
                </Button>
              </Grid>
            </Grid>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
