import React, { useState } from "react";
//Components
//CSS
import "./login/login.css";
//MUI
import { Button, Checkbox, FormControlLabel } from "@mui/material/";
//Firebase
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const SignupLogic = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  const auth = getAuth();

  const handleSignup = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });
  };

  return (
    <>
      <div>
        {error && <p>{error}</p>}
        <input value={email} onChange={handleEmail}></input>
        <input value={password} onChange={handlePassword}></input>
      </div>
      <div>
        <Button
          size="large"
          color="secondary"
          variant="contained"
          onClick={handleSignup}
        >
          Sign up
        </Button>
      </div>
    </>
  );
};

export default SignupLogic;
