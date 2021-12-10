import React, { useState } from "react";
//CSS
import "./login.css";
//Components
import PasswordInput from "../../components/input-fields/PasswordInput";
import BlankInput from "../../components/input-fields/BlankInput";
//MUI
import { Button, Checkbox, FormControlLabel } from "@mui/material/";

export default function Login() {
  /* Values Epost & Password */
  const [dataEpost, setDataEpost] = useState();
  const [dataPassword, setDataPassword] = useState();

  /* State for input validation */
  const [epostError, setEpostError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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
    if (typeof dataEpost === "undefined" || !dataEpost.includes("@" && ".")) {
      setEpostError(true);
    } else if (dataEpost.includes("@" && ".") && dataEpost.length >= 8) {
      setEpostError(false);
    }

    if (typeof dataPassword === "undefined" || dataPassword.length === 0) {
      setPasswordError(true);
    } else{
      setPasswordError(false);
    }
  }

  /* HandleLogin function */
  function handleLogin() {
 
    if (dataEpost === "smidig@smidig.com" && dataPassword === "1234") {
      alert("Veljkomen");
    } else {
      validateInputs();
      alert("Wrong login");
    }
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
            <a href=""> Sign up</a>
          </div>

          <div className="right-content-login">
            <BlankInput
              childToParent={childToParentEpost}
              label="E-mail"
              error={epostError}
            ></BlankInput>
            <PasswordInput
              childToParent={childToParentPassword}
              error={passwordError}
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
              onClick={handleLogin}
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
