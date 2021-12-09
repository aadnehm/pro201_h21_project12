import React from "react";
//CSS
import "./login.css";
//Components
import PasswordInput from "../../components/input-fields/PasswordInput";
//MUI
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material/";

export default function Login() {
  return (
    <div className="container-login">
      <div className="container-left">
        40 curated non-profits, to give you a competetive edge
      </div>
      <div className="container-right">
        <img
          className="logo-login"
          src="./img/MI-logo-black1.png"
          alt="logo-pic-login"
        />
        <div className="right-content">
          <div className="right-content-header">
            <h1>Log in to Meliora Impact</h1>
            <p className="header-p-inline">Dont have account?</p>{" "}
            <a href=""> Sign up</a>
          </div>
          <div className="right-content-login">
            <TextField
              color="secondary"
              fullWidth
              required
              label="E-post"
              variant="outlined"
            />
            <PasswordInput></PasswordInput>
            <FormControlLabel
              className="checkbox-remember-me"
              control={<Checkbox color="secondary"></Checkbox>}
              label="Remember me"
            ></FormControlLabel>
          </div>
          <div className="right-content-button">
            <a href="">Forgot your password?</a>
            <Button size="large" color="secondary" variant="contained">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
