import React from "react";
import { TextField } from "@mui/material/";

export default function BlankInput(props) {
  return (
    <TextField
      color="secondary"
      fullWidth
      required
      label={props.label}
      variant="outlined"
    />
  );
}
