import React, { useState } from "react";
//Components
import PasswordInput from "../components/input-fields/PasswordInput";
import BlankInput from "../components/input-fields/BlankInput";
//CSS
import "./login/login.css";
//MUI
import { Button, Checkbox, FormControlLabel } from "@mui/material/";
//Firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  return (
    <>
      <div>
        <input label="E-mail" value={email} onChange={handleEmail}></input>
        <input
          label="Passowrd"
          value={password}
          onChange={handlePassword}
        ></input>
      </div>
      <div>
        <Button
          size="large"
          color="secondary"
          variant="contained"
          onClick={createUserWithEmailAndPassword}
        >
          Sign up
        </Button>
      </div>
    </>
  );
};

export default Signup;
