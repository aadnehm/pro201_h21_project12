import React from "react";
import { TextField } from "@mui/material/";

export default function BlankInput(props) {
  return (
    <TextField
      helperText={props.helperText}
      color="secondary"
      fullWidth
      required
      error={props.error}
      label={props.label}
      variant="outlined"
      onChange={(newValue) => props.childToParent(newValue)}
    />
  );
}
