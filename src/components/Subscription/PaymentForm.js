import React from "react";
import "./PaymentForm.css";
import { Container, Select, TextField, Button, MenuItem } from "@mui/material";

export default function PaymentForm() {
  return (
    <Container className="payment-container">
      <form className="form">
        <Select
          style={{
            margin: "5px 0",
            width: "100%",
            backgroundColor: "#fff",
          }}
          id="model-plan"
          value="Medium Business"
          placeholder="Agefjksdlfdjks"
        >
          <MenuItem value="Small Business">Small Business</MenuItem>
          <MenuItem value="Medium Business+">Medium Business+</MenuItem>
          <MenuItem value="large business">large business</MenuItem>
        </Select>
        <TextField
          style={{
            margin: "5px 0",
            width: "100%",
            backgroundColor: "#fff",
          }}
          required
          id="outlined-basic"
          label="Kortholders navn"
          variant="outlined"
          size="small"
        />

        <Button variant="contained">Checkout</Button>
      </form>
    </Container>
  );
}
