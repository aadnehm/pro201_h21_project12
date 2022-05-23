import React, { useState } from "react";
import Menu from "../../components/navbar/Menu.js";

/* CSS */
import "./nonProfitSearch.css";
/* MUI */
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { NavbarSearch } from "../../components/search/navbarSearch/NavbarSearch";
import NavTabs from "../../components/non-profit-tabs/NpTabs.jsx";
import { useNavigate } from "react-router";

export function NonProfitSearch() {
  const img =
    "url(" + process.env.PUBLIC_URL + "/img/non-profit/nonProfitHero.png)";

  return (
    <div className="nonProfit-search-container">
      <header
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
          <p>We have selected a number of non-profits</p>
          <p>that suits your business strategy.</p>
        </div>
      </header>
      <main className="nonProfit-search-categories">
        <h3>Categories of Non-profits</h3>
        <NavTabs />
      </main>
    </div>
  );
}

export function ButtonAppBar() {
  const [appbarTop, setAppbarTop] = useState(true);
  const navigate = useNavigate();
  const changeBackground = () => {
    if (window.scrollY >= 100) {
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
      }}
    >
      <Menu />
      <Toolbar className="nonProfit-search-navbar">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
        />
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
            src={process.env.PUBLIC_URL + "/img/MI-logo-white.png"}
            alt="logo-pic-login"
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
