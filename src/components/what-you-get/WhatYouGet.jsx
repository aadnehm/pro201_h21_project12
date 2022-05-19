//Import React and CSS
import React, { useState } from "react";
import "./WhatYouGet.css";
//Import MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
//Import Collapse
import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from "mdb-react-ui-kit";

function WhatYouGet() {
  const [showMoreInstagram, setShowMoreInstagram] = useState(false);
  const [showMoreLinkedIn, setShowMoreLinkedIn] = useState(false);
  const [showMoreSnapchat, setShowMoreSnapchat] = useState(false);
  const [showInstagramElement, setShowInstagramElement] = useState(false);
  const [showLinkedInElement, setShowLinkedInElement] = useState(false);
  const [showSnapchatElement, setShowSnapchatElement] = useState(false);

  const toggleShowMoreInstagram = () =>
    setShowMoreInstagram(!showMoreInstagram);
  const toggleShowMoreLinkedIn = () => setShowMoreLinkedIn(!showMoreLinkedIn);
  const toggleShowMoreSnapchat = () => setShowMoreSnapchat(!showMoreSnapchat);
  const toggleInstagramElement = () =>
    setShowInstagramElement(!showInstagramElement);
  const toggleLinkedInElement = () =>
    setShowLinkedInElement(!showLinkedInElement);
  const toggleSnapchatElement = () =>
    setShowSnapchatElement(!showSnapchatElement);

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
              src="./img/WYGInstaStory1.png"
              alt="instagram story"
              style={{ width: "90%" }}
            ></img>
          </Grid>
          <Grid item xs={12} lg={3}>
            <img
              src="./img/WYGInstaStory2.png"
              alt="instagram story"
              style={{ width: "90%" }}
            ></img>
          </Grid>
          <Grid item xs={12} lg={3}>
            <img
              src="./img/WYGInstaStory3.png"
              alt="instagram story"
              style={{ width: "90%" }}
            ></img>
          </Grid>
          <MDBCollapse show={showInstagramElement}>
            <div className="wyg-collapse-content">
              <Grid container spacing={12} style={{ marginTop: "0.1%" }}>
                <Grid item lg={2}></Grid>
                <Grid item xs={12} lg={3}>
                  <img
                    src="./img/WYGInstaStory4.png"
                    alt="instagram story"
                    style={{ width: "90%" }}
                  ></img>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <img
                    src="./img/WYGInstaStory5.png"
                    alt="instagram story"
                    style={{ width: "90%" }}
                  ></img>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <img
                    src="./img/WYGInstaStory6.png"
                    alt="instagram story"
                    style={{ width: "90%" }}
                  ></img>
                </Grid>
              </Grid>
            </div>
          </MDBCollapse>
        </Grid>
        <button
          className="wyg-btn"
          onClick={() => {
            toggleInstagramElement();
            toggleShowMoreInstagram();
          }}
        >
          {showMoreInstagram ? "Show less Instagram" : "Show all Instagram"}
        </button>
      </div>
      <div className="wyg-box">
        <h2>LinkedIn</h2>
        <p>
          Our LinkedIn community connects nonprofits, donors, and companies in
          all over the world.
        </p>
        <p style={{ marginBottom: "2%" }}>
          It’s also about helping nonprofits access information and ideas that
          will help them listen, learn, and grow.
        </p>
        <Grid container spacing={12}>
          <Grid item xs={12} lg={4}>
            <img
              src="./img/WYGLinkedIn1.png"
              alt="LinkedIn story"
              style={{ width: "100%" }}
            ></img>
          </Grid>
          <Grid item xs={12} lg={4}>
            <img
              src="./img/WYGLinkedIn2.png"
              alt="LinkedIn story"
              style={{ width: "100%" }}
            ></img>
          </Grid>
        </Grid>
        <MDBCollapse show={showLinkedInElement}>
          <Grid container spacing={12}>
            <Grid item xs={12} lg={4}>
              <img
                src="./img/WYGLinkedIn3.png"
                alt="LinkedIn story"
                style={{ width: "100%" }}
              ></img>
            </Grid>
            <Grid item xs={12} lg={4}>
              <img
                src="./img/WYGLinkedIn4.png"
                alt="LinkedIn story"
                style={{ width: "100%" }}
              ></img>
            </Grid>
          </Grid>
        </MDBCollapse>
        <button
          className="wyg-btn"
          onClick={() => {
            toggleLinkedInElement();
            toggleShowMoreLinkedIn();
          }}
        >
          {showMoreLinkedIn ? "Show less LinkedIn" : "Show all LinkedIn"}
        </button>
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
          <MDBCollapse show={showSnapchatElement}>
            <div className="wyg-collapse-content">
              <Grid container spacing={12} style={{ marginTop: "0.1%" }}>
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
            </div>
          </MDBCollapse>
        </Grid>
        <button
          className="wyg-btn"
          onClick={() => {
            toggleSnapchatElement();
            toggleShowMoreSnapchat();
          }}
        >
          {showMoreSnapchat ? "Show less Snapchat" : "Show all Snapchat"}
        </button>
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
                    Connects nonprofits, donors, and companies in nearly every
                    country in the world.
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
