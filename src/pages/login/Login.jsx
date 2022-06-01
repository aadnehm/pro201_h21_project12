import React, { useState } from "react";
import { Link } from "react-router-dom";
//CSS
import "./login.css";
//Components
import PasswordInput from "../../components/Login-Signup/input-fields/PasswordInput";
import BlankInput from "../../components/Login-Signup/input-fields/BlankInput";
//MUI
import { Button, Checkbox, FormControlLabel } from "@mui/material/";
//Firebase
export default function Login() {
  //Navigation

  //Error handling

  /* Values Epost & Password */
  const [dataEpost, setDataEpost] = useState();
  const [dataPassword, setDataPassword] = useState();

  /* State for input validation */
  const [epostError, setEpostError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  /* State for helperText */
  const [epostHelperText, setEpostHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");

  /* Henter data fra child components BlankInput & PasswordInput */
  function childToParentEpost(e) {
    const newData = e.target.value;
    setDataEpost(newData);
  }
  function childToParentPassword(e) {
    const newData = e.target.value;
    setDataPassword(newData);
  }

  /* Input validation function */
  function validateInputs() {
    let needMore = true;
    if (typeof dataEpost === "undefined" || !dataEpost.includes("@" && ".")) {
      setEpostError(true);
      setEpostHelperText("Please use valid e-mail");
      needMore = false;
    } else if (dataEpost.includes("@" && ".") && dataEpost.length >= 8) {
      setEpostError(false);
      setEpostHelperText("");
    }

    if (typeof dataPassword === "undefined" || dataPassword.length === 0) {
      setPasswordError(true);
      setPasswordHelperText("Wrong password");
      needMore = false;
    } else {
      setPasswordError(false);
      setPasswordHelperText("");
    }
    return needMore;
  }

  return (
    <div className="container-login">
      <div className="container-left">
        <h1 className="header-left">
          40 curated non-profits, to give you a competetive edge
        </h1>
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
            <p className="header-p-inline">Dont have account?</p>
            <Link to="/signin-employee"> Sign up</Link>
          </div>

          <div className="right-content-login">
            <BlankInput
              childToParent={childToParentEpost}
              label="E-mail"
              error={epostError}
              helperText={epostHelperText}
            ></BlankInput>
            <PasswordInput
              label="Password"
              childToParent={childToParentPassword}
              error={passwordError}
              helperText={passwordHelperText}
            ></PasswordInput>
            <FormControlLabel
              control={<Checkbox color="secondary"></Checkbox>}
              label="Remember me"
            ></FormControlLabel>
          </div>
          <div className="right-content-button">
            <a href="">Forgot your password?</a>
            <Button
              size="large"
              color="secondary"
              variant="contained"
              onClick={validateInputs}
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
