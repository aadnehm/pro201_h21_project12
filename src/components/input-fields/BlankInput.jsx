import React, { useState } from "react";
import { TextField } from "@mui/material/";

export default function BlankInput(props) {
  const [data, setData] = useState();

  return (
    <TextField
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
