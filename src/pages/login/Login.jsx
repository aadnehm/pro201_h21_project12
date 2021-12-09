import React from "react";
//CSS
import "./login.css";
//MUI
import { TextField, Button } from "@mui/material/";

export default function Login() {
  return (
    <div className="container-login">
      <div className="container-left">
        40 curated non-profits, to give you a competetive edge
      </div>
      <div className="container-right">
        <img src="./img/MI_logo_black.png" alt="" />
        <div className="right-content">
          <div className="right-content-header">
            <h1>Sign into Meliora Impact</h1>
            <p>Dont have account?</p> <a href="">Sign up</a>
          </div>
          <div className="right-content-login">
            <TextField fullWidth required label="Username" variant="outlined" />
            <TextField fullWidth required label="Password" variant="outlined" />
          </div>
          <div className="right-content-button">
            <a href="">Forgot your password</a>
            <Button>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
