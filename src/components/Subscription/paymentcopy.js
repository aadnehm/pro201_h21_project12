import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./PaymentForm.css";
import { Container, Grid, Typography } from "@mui/material";

const INITIAL_FORM_STATE = {};
const FORM_VALIDATION = Yup.object().shape({});

export default function PaymentFormCopy() {
  return (
    <Grid container className="payment-container">
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className="form-wrapper">
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Adress</Typography>
                  </Grid>
                  <Grid item xs={12}></Grid>
                  <Grid item xs={12}>
                    <Typography>Adress</Typography>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}
