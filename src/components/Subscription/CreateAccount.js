import React from "react";
import { Link } from "react-router-dom";
/* css */
import "./CreateAccount.css";
/* MUI */
import { Grid, Button, TextField } from "@mui/material";
/* components */
import PasswordInputWhite from "./PasswordInputWhite";

export default function CreateAccount() {
  /* state */
  const [orgNumber, setOrgNumber] = React.useState("");
  const handleOrgNumber = (event) => {
    setOrgNumber(event.target.value);
  };
  const [companyName, setCompanyName] = React.useState("");
  const handleCompaneName = (event) => {
    setCompanyName(event.target.value);
  };

  const [adresse, setAdresse] = React.useState("");
  const handleAdresse = (event) => {
    setAdresse(event.target.value);
  };
  const [postBox, setPostBox] = React.useState("");
  const handlePostBox = (event) => {
    setPostBox(event.target.value);
  };
  const [firstName, setFirstName] = React.useState("");
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const [lastName, setLastName] = React.useState("");
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const [email, setEmail] = React.useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const [role, setRole] = React.useState("");
  const handleRole = (event) => {
    setRole(event.target.value);
  };
  const [phone, setPhone] = React.useState("");
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const [password, setPassword] = React.useState();
  const [passwordConfirmed, setPasswordConfirmed] = React.useState();

  /*********  Kode for å sende state til password, og confirmed password ***********/
  function childToParentPassword(e) {
    const newData = e.target.value;
    setPassword(newData);
  }
  function childToParentConfirmedPassword(e) {
    const newData = e.target.value;
    setPasswordConfirmed(newData);
  }

  let shouldDisplayForm = false;
  const handleEnterButtonClick = () => {
    shouldDisplayForm = true;
  };
  /* state variabler for debugging */
  const data = [
    orgNumber,
    companyName,
    adresse,
    postBox,
    firstName,
    lastName,
    email,
    role,
    phone,
    password,
    passwordConfirmed,
  ];

  /* JSX */
  return (
    <div className="account-container">
      <form autoComplete="off">
        <div className="form-grid-container">
          <Grid container justifyContent="space-between">
            {/* org number */}
            <Grid item xs={8}>
              <TextField
                style={{
                  margin: ".6em 0",
                  width: "100%",
                  backgroundColor: "#fff",
                }}
                required
                value={orgNumber}
                onChange={handleOrgNumber}
                id="outlined-basic"
                label="Organization number"
                variant="outlined"
                size="small"
              />
            </Grid>
            {/* enter button */}
            <Grid item xs={3}>
              <Button
                variant="outlined"
                size="medium"
                className="org-button"
                style={{
                  margin: ".6em auto",
                  width: "100%",
                  backgroundColor: "#f4f4f4",
                }}
              >
                Enter
              </Button>
            </Grid>

            {/* company name */}
            <Grid item xs={12}>
              <TextField
                style={{
                  margin: ".6em 0",
                  width: "100%",
                  backgroundColor: "#fff",
                }}
                required
                value={companyName}
                onChange={handleCompaneName}
                id="outlined-basic"
                label="Company Name"
                variant="outlined"
                size="small"
              />
            </Grid>
            {/* Adresse */}
            <Grid item xs={8}>
              <TextField
                style={{
                  margin: ".6em 0",
                  width: "100%",
                  backgroundColor: "#fff",
                }}
                required
                value={adresse}
                onChange={handleAdresse}
                id="outlined-basic"
                label="Adresse"
                variant="outlined"
                size="small"
              />
            </Grid>
            {/* post box */}
            <Grid item xs={3}>
              <TextField
                style={{
                  margin: ".6em 0",
                  width: "100%",
                  backgroundColor: "#fff",
                }}
                required
                value={postBox}
                onChange={handlePostBox}
                id="outlined-basic"
                label="Post-box"
                variant="outlined"
                size="small"
              />
            </Grid>
            {/* firstname */}
            <Grid item xs={5}>
              <TextField
                style={{
                  margin: ".6em 0",
                  width: "100%",
                  backgroundColor: "#fff",
                }}
                required
                value={firstName}
                onChange={handleFirstName}
                id="outlined-basic"
                label="First name"
                variant="outlined"
                size="small"
              />
            </Grid>
            {/* Last-name */}
            <Grid item xs={6}>
              <TextField
                className="text-field"
                style={{
                  margin: ".6em 0",
                  width: "100%",
                  backgroundColor: "#fff",
                }}
                required
                value={lastName}
                onChange={handleLastName}
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                size="small"
              />
            </Grid>
            {/* email */}
            <Grid item xs={12}>
              <TextField
                style={{
                  margin: ".6em 0",
                  width: "100%",
                  backgroundColor: "#fff",
                }}
                required
                value={email}
                onChange={handleEmail}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
              />
            </Grid>
            {/* Role*/}
            <Grid item xs={5}>
              <TextField
                style={{
                  margin: ".6em 0",
                  width: "100%",
                  backgroundColor: "#fff",
                }}
                required
                value={role}
                onChange={handleRole}
                id="outlined-basic"
                label="Role"
                variant="outlined"
                size="small"
              />
            </Grid>
            {/* Phone-number */}
            <Grid item xs={6}>
              <TextField
                style={{
                  margin: ".6em 0",
                  width: "100%",
                  backgroundColor: "#fff",
                }}
                required
                value={phone}
                onChange={handlePhone}
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                size="small"
              />
            </Grid>
            {/* password */}
            <Grid item xs={12}>
              <PasswordInputWhite
                childToParent={childToParentPassword}
                label="Password"
              ></PasswordInputWhite>
            </Grid>
            {/* confirm password */}
            <Grid item xs={12}>
              <PasswordInputWhite
                childToParent={childToParentConfirmedPassword}
                label="Confirm password"
              ></PasswordInputWhite>
            </Grid>

            {/* Confirm button */}
            <Grid item xs={12}>
              <Button
                className="create-button"
                variant="contained"
                size="large"
                fullWidth
                component={Link}
                to="/payment"
              >
                <div>Create Account</div>
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
}
