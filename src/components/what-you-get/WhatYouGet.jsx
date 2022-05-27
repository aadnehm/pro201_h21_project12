//Import React and CSS
import React, { useState } from "react";
import "./what-you-get.css";
//Import MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
//Import Collapse
import { MDBCollapse } from "mdb-react-ui-kit";

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
      <div className="grey-line" />
      <div className="wyg-top-banner">
        <h1 className="component-title">What you get</h1>
        <Card
          sx={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "black",
            borderRadius: "40px",
            marginTop: "5%",
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
                <CardContent>
                  <h1 className="wyg-card-text">
                    Get a glimpse of the social media you will recive, if you
                    become a partner.
                  </h1>
                </CardContent>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                sx={{ flex: "1 0 auto" }}
                style={{ height: "100%" }}
                component="img"
                image={process.env.PUBLIC_URL + "/img/WYGTopBanner.png"}
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
              src={process.env.PUBLIC_URL + "/img/WYGInstaStory1.png"}
              alt="instagram story"
              style={{ width: "90%" }}
            ></img>
          </Grid>
          <Grid item xs={12} lg={3}>
            <img
              src={process.env.PUBLIC_URL + "/img/WYGInstaStory2.png"}
              alt="instagram story"
              style={{ width: "90%" }}
            ></img>
          </Grid>
          <Grid item xs={12} lg={3}>
            <img
              src={process.env.PUBLIC_URL + "/img/WYGInstaStory3.png"}
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
                    src={process.env.PUBLIC_URL + "/img/WYGInstaStory4.png"}
                    alt="instagram story"
                    style={{ width: "90%" }}
                  ></img>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/WYGInstaStory5.png"}
                    alt="instagram story"
                    style={{ width: "90%" }}
                  ></img>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/WYGInstaStory6.png"}
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
        <h4>
          Our LinkedIn community connects nonprofits, donors, and companies in
          all over the world.
        </h4>
        <h4 style={{ marginBottom: "4%" }}>
          It’s also about helping nonprofits access information and ideas that
          will help them listen, learn, and grow.
        </h4>
        <Grid container spacing={12}>
          <Grid item xs={12} lg={4}>
            <img
              src={process.env.PUBLIC_URL + "/img/WYGLinkedIn1.png"}
              alt="LinkedIn story"
              style={{ width: "100%" }}
            ></img>
          </Grid>
          <Grid item xs={12} lg={4}>
            <img
              src={process.env.PUBLIC_URL + "/img/WYGLinkedIn2.png"}
              alt="LinkedIn story"
              style={{ width: "100%" }}
            ></img>
          </Grid>
          <Grid item xs={12} lg={4}>
            <img
              src={process.env.PUBLIC_URL + "/img/WYGLinkedIn4.png"}
              alt="LinkedIn story"
              style={{ width: "100%" }}
            ></img>
          </Grid>
        </Grid>
        <MDBCollapse show={showLinkedInElement} style={{ marginTop: "2%" }}>
          <Grid container spacing={12}>
            <Grid item xs={12} lg={4}>
              <img
                src={process.env.PUBLIC_URL + "/img/WYGLinkedIn3.png"}
                alt="LinkedIn story"
                style={{ width: "100%" }}
              ></img>
            </Grid>
            <Grid item xs={12} lg={4}>
              <img
                src={process.env.PUBLIC_URL + "/img/WYGLinkedIn4.png"}
                alt="LinkedIn story"
                style={{ width: "100%" }}
              ></img>
            </Grid>
            <Grid item xs={12} lg={4}>
              <img
                src={process.env.PUBLIC_URL + "/img/WYGLinkedIn1.png"}
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
              src={process.env.PUBLIC_URL + "/img/WYGSnapchat1.png"}
              alt="snapchat story"
              style={{ width: "90%" }}
            ></img>
          </Grid>
          <Grid item xs={12} lg={3}>
            <img
              src={process.env.PUBLIC_URL + "/img/WYGSnapchat2.png"}
              alt="snapchat story"
              style={{ width: "90%" }}
            ></img>
          </Grid>
          <Grid item xs={12} lg={3}>
            <img
              src={process.env.PUBLIC_URL + "/img/WYGSnapchat3.png"}
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
                    src={process.env.PUBLIC_URL + "/img/WYGSnapchat4.png"}
                    alt="snapchat story"
                    style={{ width: "90%" }}
                  ></img>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/WYGSnapchat5.png"}
                    alt="snapchat story"
                    style={{ width: "90%" }}
                  ></img>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/WYGSnapchat6.png"}
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
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "black",
            borderRadius: "40px",
            marginTop: "5rem",
            marginBottom: "10rem",
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent>
                  <h1 className="wyg-card-text">
                    Connects nonprofits, donors, and companies in nearly every
                    country in the world.
                  </h1>
                </CardContent>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                sx={{ flex: "1 0 auto" }}
                style={{ height: "100%" }}
                component="img"
                image={process.env.PUBLIC_URL + "/img/WYGBottomBanner.png"}
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
