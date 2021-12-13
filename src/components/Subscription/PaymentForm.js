import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./PaymentForm.css";
import {
  Grid,
  Button,
  TextField,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
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
              <Grid className="heading-with-lines" item xs={12}>
                <div className="lines">
                  <span className="line-text">Or pay with card </span>
                </div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  variant="outlined"
                  size="small"
                  label="Medium+ Subscription"
                  style={{
                    margin: ".5em 0",
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

              <Grid item xs={12}>
                <TextField
                  style={{
                    margin: ".5em 0",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                  id="outlined-basic"
                  label="1234 1234 1234 1234"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  style={{
                    margin: ".5em 0",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                  id="outlined-basic"
                  label="mm/yy"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  style={{
                    margin: ".5em 0",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                  id="outlined-basic"
                  label="cvc"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{
                    margin: ".5em 0",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                  id="outlined-basic"
                  label="Name on card"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="hente"
                  control={<Radio />}
                  label="Save card information"
                  name="save-card"
                />
              </Grid>
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
