import React, { useEffect, useState } from "react";
import Menu from "../../components/navbar/Menu.js";

/* CSS */
import "./non-profit-all.css";
/* MUI */
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { NavbarSearch } from "../../components/navbar/NavbarSearch";
import NavTabs from "../../components/non-profit-tabs/NpTabs";
import { useNavigate } from "react-router";

export function NonProfitAll() {
  const img = "url(img/non-profit/nonProfitHero.png)";
  return (
    <div className="nonProfit-search-container">
      <div
        style={{
          backgroundImage: img,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="nonProfit-search-hero"
      >
        <div className="nonProfit-search-hero-text">
          <h1>Carefully curated</h1>
          <h1>Non-profits</h1>
          <h4>We have selected a number of non-profits</h4>
          <h4>that suits your business strategy.</h4>
        </div>
      </div>
      <div className="nonProfit-search-categories">
        <h3>Categories of Non-profits</h3>
        <NavTabs />
      </div>
    </div>
  );
}

export function ButtonAppBar() {
  const [appbarTop, setAppbarTop] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname.endsWith("/subscribe")) {
      setAppbarTop(false);
    }
  }, [navigate]);
  const changeBackground = () => {
    if (window.scrollY >= 100 || location.pathname.endsWith("/subscribe")) {
      setAppbarTop(false);
    } else {
      setAppbarTop(true);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <AppBar
      className={appbarTop ? "appbar on-top" : ""}
      color="secondary"
      style={{
        transition: "0.5s ease-in",
        opacity: "1",
        fontFamily: "'DM sans', sans-serif",
      }}
    >
      <Toolbar className="nonProfit-search-navbar">
        <Menu />
        <NavbarSearch />
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="nonprofit-firma-name">
            <h5>Meliora</h5>
            <h5>Impact</h5>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/img/icons/MI-logo-white.png"}
            alt="logo-pic-login"
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
