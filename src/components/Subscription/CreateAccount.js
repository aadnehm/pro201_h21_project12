import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
/* css */
import "./CreateAccount.css";
/* MUI */
import { Button, Grid, TextField } from "@mui/material";
/* components */
import PasswordInputWhite from "./PasswordInputWhite";
//Firebase
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import db from "../../lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function CreateAccount() {
  //Navigation
  const navigate = useNavigate();

  //Firebase state
  const [error, setError] = useState("");
  const [companies, setCompanies] = useState([]);

  /* State for input validation */
  const [postalCodeError, setPostalCodeError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [epostError, setEpostError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordError1, setPasswordError1] = useState(false);
  const [orgNumberError, setOrgNumberError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [companyNameError, setCompanyNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [roleError, setRoleError] = useState(false);

  /* State for helperText */
  const [postalCodeHelperText, setPostalCodeHelperText] = useState(" ");
  const [firstNameHelperText, setFirstNameHelperText] = useState(" ");
  const [lastNameHelperText, setLastNameHelperText] = useState(" ");
  const [addressHelperText, setAddressHelperText] = useState(" ");
  const [orgNumberHelperText, setOrgNumberHelperText] = useState(" ");
  const [companyNameHelperText, setCompanyNameHelperText] = useState(" ");
  const [epostHelperText, setEpostHelperText] = useState(" ");
  const [passwordHelperText, setPasswordHelperText] = useState(" ");
  const [passwordHelperText1, setPasswordHelperText1] = useState(" ");
  const [phoneHelperText, setPhoneHelperText] = useState(" ");
  const [roleHelperText, setRoleHelperText] = useState(false);

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

  let validated = true;

  function validateInputs() {
    if (postBox) {
      setPostalCodeError(false);
      setPostalCodeHelperText(" ");
    } else {
      setPostalCodeError(true);
      setPostalCodeHelperText("Enter org postal code");
      validated = false;
    }
    if (firstName) {
      setFirstNameError(false);
      setFirstNameHelperText(" ");
    } else {
      setFirstNameError(true);
      setFirstNameHelperText("Please enter your first name");
      validated = false;
    }
    if (lastName) {
      setLastNameError(false);
      setLastNameHelperText(" ");
    } else {
      setLastNameError(true);
      setLastNameHelperText("Please enter your last name");
      validated = false;
    }
    if (orgNumber) {
      setOrgNumberError(false);
      setOrgNumberHelperText(" ");
    } else {
      setOrgNumberError(true);
      setOrgNumberHelperText("Please enter your org number");
      validated = false;
    }
    if (companyName) {
      setCompanyNameError(false);
      setCompanyNameHelperText(" ");
    } else {
      setCompanyNameError(true);
      setCompanyNameHelperText("Please enter your company name");
      validated = false;
    }
    if (role) {
      setRoleError(false);
      setRoleHelperText(" ");
    } else {
      setRoleError(true);
      setRoleHelperText("Please enter your role");
      validated = false;
    }
    if (adresse) {
      setAddressError(false);
      setAddressHelperText(" ");
    } else {
      setAddressError(true);
      setAddressHelperText("Please enter your address");
      validated = false;
    }
    if (phone) {
      setPhoneError(false);
      setPhoneHelperText(" ");
    } else {
      setPhoneError(true);
      setPhoneHelperText("Please enter your address");
      validated = false;
    }

    if (typeof email === "undefined" || !email.includes("@" && ".")) {
      setEpostError(true);
      setEpostHelperText("Please use valid e-mail");
      validated = false;
    } else if (email.includes("@" && ".") && email.length >= 8) {
      setEpostError(false);
      setEpostHelperText(" ");
    }

    if (typeof password === "undefined" || password.length < 6) {
      setPasswordError(true);
      setPasswordHelperText("6 characters or more");
      validated = false;
    } else {
      setPasswordError(false);
      setPasswordHelperText(" ");
    }

    if (
      typeof passwordConfirmed === "undefined" ||
      passwordConfirmed !== password
    ) {
      setPasswordError1(true);
      setPasswordHelperText1("Passwords dont match");
      validated = false;
    } else {
      setPasswordError1(false);
      setPasswordHelperText1(" ");
    }
    return validated;
  }

  //Fetching companies
  const fetchCompanies = async () => {
    const response = db.collection("companies");
    const data = await response.get();
    data.forEach((element) => {
      setCompanies((prevState) => [...prevState, element.data()]);
    });
  };

  //set org code
  let orgCode = "";
  const setOrgID = async (code) => {
    let i = 0;
    let tmp = 0;
    let newCode = "";
    while (newCode.length < 6) {
      if (i >= code.length) {
        i = tmp + 1;
        tmp++;
        newCode += code.charAt(i);
        i += 4;
      } else {
        newCode += code.charAt(i);

        i += 4;
      }
    }
    console.log(newCode);
    orgCode = newCode.toUpperCase();
  };

  const auth = getAuth();
  const handleLogin = async () => {
    if (validateInputs()) {
      const temp = companies.filter(
        (element) => element.organisasjonsnummer === orgNumber
      );
      if (temp.length === 0) {
        await createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;

            alert(user.email + " created");

            //First draft of company entry
            const createCompany = await addDoc(collection(db, "companies"), {
              organisasjonsnummer: `${orgNumber}`,
              navn: `${companyName}`,
              adresse: `${adresse}`,
              postboks: `${postBox}`,
              telefon: `${phone}`,
            });

            //Update with company code
            await setOrgID(createCompany.id);
            db.collection("companies")
              .doc(createCompany.id)
              .update({
                firmakode: `${orgCode}`,
              });

            //User entry (admin)
            const docRef = addDoc(collection(db, "users"), {
              navn: `${firstName + " " + lastName}`,
              epost: `${email}`,
              firmakode: `${orgCode}`,
              admin: `${true}`,
              aktiv: `${true}`,
              rolle: `${role}`,
            });
            setCompanies([]);
            navigate("/payment");
          })
          .catch((error) => {
            setError(error.message);
            alert(error);
          });
      } else {
        setError("Company already exists");
        alert("Company already exists");
      }
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

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
                  MuiFormControlRoot: {
                    backgroundColor: "red",
                    margin: 0,
                    paddingLeft: 10,
                  },
                }}
                required
                value={orgNumber}
                onChange={handleOrgNumber}
                id="outlined-basic"
                label="Organization number"
                variant="outlined"
                size="small"
                error={orgNumberError}
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
                error={companyNameError}
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
                label="Address"
                variant="outlined"
                size="small"
                error={addressError}
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
                error={postalCodeError}
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
                error={firstNameError}
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
                error={lastNameError}
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
                error={epostError}
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
                error={roleError}
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
                error={phoneError}
              />
            </Grid>
            {/* password */}
            <Grid item xs={12}>
              <PasswordInputWhite
                childToParent={childToParentPassword}
                label="Password"
                error={passwordError}
              ></PasswordInputWhite>
            </Grid>
            {/* confirm password */}
            <Grid item xs={12}>
              <PasswordInputWhite
                childToParent={childToParentConfirmedPassword}
                label="Confirm password"
                error={passwordError1}
              ></PasswordInputWhite>
            </Grid>

            {/* Confirm button */}
            <Grid item xs={12}>
              <Button
                className="create-button"
                variant="contained"
                size="large"
                fullWidth
                onClick={handleLogin}
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
