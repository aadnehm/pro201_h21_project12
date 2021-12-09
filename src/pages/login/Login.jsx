import { useState } from "react";
//CSS
import "./login.css";
//MUI
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from "@mui/material/";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
            <TextField
              color="secondary"
              fullWidth
              required
              label="Password"
              variant="outlined"


              
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              className="checkbox-remember-me"
              control={<Checkbox color="secondary"></Checkbox>}
              label="Remember me"
            ></FormControlLabel>
          </div>
          <div className="right-content-button">
            <a href="">Forgot your password?</a>
            <Button color="secondary" variant="contained">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
