import React, { useState } from "react";
//MUI
import { TextField, InputAdornment, IconButton } from "@mui/material/";
import { Visibility, VisibilityOff } from "@mui/icons-material/";

export default function PasswordInput(props) {
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
      helperText={props.helperText}
      color="secondary"
      fullWidth
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
