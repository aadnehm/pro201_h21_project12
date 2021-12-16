import React, { useState } from "react";
//MUI
import { TextField, InputAdornment, IconButton } from "@mui/material/";
import { Visibility, VisibilityOff } from "@mui/icons-material/";

export default function PasswordInputWhite(props) {
  const [values, setValues] = useState({
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

  return (
    <TextField
      style={{
        margin: ".4em 0",
        width: "100%",
        backgroundColor: "#fff",
      }}
      helperText={props.helperText}
      fullWidth
      size="small"
      required
      label={props.label}
      variant="outlined"
      type={values.showPassword ? "text" : "password"}
      value={values.password}
      error={props.error}
      onChange={(newValue) => props.childToParent(newValue)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              color="secondary"
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
  );
}
