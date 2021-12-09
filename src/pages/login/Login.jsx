import React, { useState } from "react";
//CSS
import "./login.css";
//Components
import PasswordInput from "../../components/input-fields/PasswordInput";
import BlankInput from "../../components/input-fields/BlankInput";
//MUI
import { Button, Checkbox, FormControlLabel } from "@mui/material/";

export default function Login() {
  const [dataUsername, setDataUsername] = useState();
  const [dataPassword, setDataPassword] = useState();

  function childToParentUsername(e) {
    const newData = e.target.value;
    setDataUsername(newData);
  }

  function childToParentPassword(e) {
    const newData = e.target.value;
    setDataPassword(newData);
  }

  function handleLogin() {
    if (dataUsername === "123" && dataPassword === "123") {
      alert("welcome");
    } else {
      alert("wrong log in. Right log in is: username:123, Pass: 123");
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
              childToParent={childToParentUsername}
              label="E-mail"
            ></BlankInput>
            <PasswordInput
              childToParent={childToParentPassword}
            ></PasswordInput>
            <FormControlLabel
              control={<Checkbox color="secondary"></Checkbox>}
              label="Remember me"
            ></FormControlLabel>
          </div>
          <div className="right-content-button">
            <a href="">Forgot your password?</a>
            <Button
              onClick={handleLogin}
              size="large"
              color="secondary"
              variant="contained"
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
