import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
//CSS
import "./signinEmployee.css";
//Components
import PasswordInput from "../../components/Login-Signup/input-fields/PasswordInput";
import BlankInput from "../../components/Login-Signup/input-fields/BlankInput";
//MUI
import { Button, Checkbox, FormControlLabel } from "@mui/material/";

export default function SigninEmployee() {
  //Navigation
  const navigate = useNavigate();

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
    } else {
      setPasswordError(false);
    }
  }

  /* HandleLogin function */
  function handleLogin() {
    if (dataEpost === "smidig@smidig.com" && dataPassword === "1234") {
      //alert("Veljkomen");
      navigate("/nonprofits");
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
            <h1>Sign up to Meliora Impact</h1>
            <p className="header-p-inline">Already got account?</p>
            <Link to="/"> Log in</Link>
          </div>

          <div className="right-content-login">
            <BlankInput
              childToParent={childToParentEpost}
              label="Navn"
              error={epostError}
            ></BlankInput>
            <BlankInput
              childToParent={childToParentEpost}
              label="E-mail"
              error={epostError}
            ></BlankInput>
            <PasswordInput
              label="Create password"
              childToParent={childToParentPassword}
              error={passwordError}
            ></PasswordInput>
            <PasswordInput
              label="Confirm password"
              childToParent={childToParentPassword}
              error={passwordError}
            ></PasswordInput>
          </div>
          <div className="right-content-button">
            <Button
              size="large"
              color="secondary"
              variant="contained"
              onClick={handleLogin}
            >
              Create account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
