//Import React and CSS
import React from "react";
import "./WhatYouGet.css";
//Import MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function WhatYouGet() {
  return (
    <div>
      <h3
        style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}
      >
        What you get
      </h3>
      <div className="wyg-top-banner">
        <Card
          sx={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "black",
            borderRadius: "40px",
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{ flex: "1 0 auto" }}
                  style={{ padding: "5rem", marginTop: "5rem" }}
                >
                  <Typography component="div" variant="h4" color="white">
                    Get a glimpse into our exclusive content bank. We make you
                    sustainable marketing easier
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                sx={{ flex: "1 0 auto" }}
                style={{ height: "100%" }}
                component="img"
                image="./img/WYGTopBanner.png"
                alt="what you get banner"
              />
            </Grid>
          </Grid>
        </Card>
      </div>
      <div className="wyg-box">
        <h2>Instagram</h2>
        <Grid container spacing={12}>
          <Grid item lg={2}></Grid>
          <Grid item xs={12} lg={3}>
            <img
              src="./img/WYGInstaStory.png"
              alt="instagram story"
              style={{ width: "90%" }}
            ></img>
          </Grid>
          <Grid item xs={12} lg={3}>
            <img
              src="./img/WYGInstaStory.png"
              alt="instagram story"
              style={{ width: "90%" }}
            ></img>
          </Grid>
          <Grid item xs={12} lg={3}>
            <img
              src="./img/WYGInstaStory.png"
              alt="instagram story"
              style={{ width: "90%" }}
            ></img>
          </Grid>
        </Grid>

        <button className="wyg-btn">Show all instagram</button>
      </div>
      <div className="wyg-box">
        <h2>LinkedIn</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nibh massa, elementum id hendrerit ut, condimentum id orci.
        </p>
        <p style={{ marginBottom: "2%" }}>
          Sed sodales tellus dolor. Donec laoreet nisl ac mi sodales vulputate
          quis ut ipsum.
        </p>
        <Grid container spacing={12}>
          <Grid item xs={12} lg={4}>
            <img
              src="./img/WYGLinkedIn.png"
              alt="LinkedIn story"
              style={{ width: "100%" }}
            ></img>
          </Grid>
          <Grid item xs={12} lg={4}>
            <img
              src="./img/WYGLinkedIn.png"
              alt="LinkedIn story"
              style={{ width: "100%" }}
            ></img>
          </Grid>
        </Grid>
        <button className="wyg-btn">Show all LinkedIn</button>
      </div>
      <div className="wyg-box">
        <h2>Snapchat</h2>
        <Grid container spacing={12}>
          <Grid item lg={2}></Grid>
          <Grid item xs={12} lg={3}>
            <img
              src="./img/WYGInstaStory.png"
              alt="snapchat story"
              style={{ width: "90%" }}
            ></img>
          </Grid>
          <Grid item xs={12} lg={3}>
            <img
              src="./img/WYGInstaStory.png"
              alt="snapchat story"
              style={{ width: "90%" }}
            ></img>
          </Grid>
          <Grid item xs={12} lg={3}>
            <img
              src="./img/WYGInstaStory.png"
              alt="snapchat story"
              style={{ width: "90%" }}
            ></img>
          </Grid>
        </Grid>
        <button className="wyg-btn">Show all snapchat</button>
      </div>
      <div className="wyg-bottom-banner">
        <Card
          sx={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "black",
            borderRadius: "40px",
            marginTop: "5rem",
            marginBottom: "5rem",
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent
                  sx={{ flex: "1 0 auto" }}
                  style={{ padding: "5rem", marginTop: "5rem" }}
                >
                  <Typography component="div" variant="h4" color="white">
                    Get a glimpse into our exclusive content bank. We make you
                    sustainable marketing easier
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                sx={{ flex: "1 0 auto" }}
                style={{ height: "100%" }}
                component="img"
                image="./img/WYGBottomBanner.png"
                alt="what you get banner"
              />
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
}

export default WhatYouGet;
