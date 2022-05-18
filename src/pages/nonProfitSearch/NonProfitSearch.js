import React, { useState } from "react";
import Menu from "../../components/navbar/Menu.js";

/* CSS */
import "./nonProfitSearch.css";
/* MUI */
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { NavbarSearch } from "../../components/search/navbarSearch/NavbarSearch";
import FooterTest from "../../components/FooterTest/FooterTest";
import NavTabs from "../../components/non-profit-tabs/NpTabs.jsx";

export default function NonProfitSearch() {
  const img = "url(./img/non-profit/nonProfitHero.png)";

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
        <ButtonAppBar />
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
      <FooterTest />
    </div>
  );
}

function ButtonAppBar() {
  const [appbarTop, setAppbarTop] = useState(true);

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
          sx={{ mr: 2 }}
        />
        <NavbarSearch />

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <div className="nonprofit-firma-name">
            <h5>Meliora</h5>
            <h5>Impact</h5>
          </div>
          <img src="./img/MI-logo-white.png" alt="logo-pic-login" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
