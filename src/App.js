//Components
import NonProfit from "./pages/non-profit-single/NonProfitSingle";

//Global CSS
import "./App.css";
//MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
//React
import { Route, Routes } from "react-router-dom";
import React from "react";
import { FrontPage } from "./pages/front-page/FrontPage";
import {
  ButtonAppBar,
  NonProfitAll,
} from "./pages/non-profit-all/NonProfitAll";
import { Subscribe } from "./pages/subscribe/Subscribe";
import { Projects } from "./pages/projects/ProjectMainLayout";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import { useLocation } from "react-router";

/* Changing default value for secondary color */
const mainColor = createTheme({
  palette: {
    secondary: {
      main: "#333",
    },
    primary: {
      main: "#BB334D",
    },
  },

  typography: {
    fontFamily: "DM Sans, sans-serif",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
  },
});

function NavbarFooter(props) {
  return (
    <>
      <ButtonAppBar />
      <div>{props.page}</div>
      <Footer />
    </>
  );
}

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={mainColor}>
      <div className="App">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<NavbarFooter page={<FrontPage />} />} />
          <Route
            path="/nonprofits"
            element={<NavbarFooter page={<NonProfitAll />} />}
          />
          <Route
            path="/nonprofit/:nonprofit"
            element={<NavbarFooter page={<NonProfit />} />}
          />
          <Route
            path="/nonprofit/:nonprofit/:project"
            element={<NavbarFooter page={<Projects />} />}
          />
          <Route
            path="/nonprofit/:nonprofit/subscribe"
            element={<NavbarFooter page={<Subscribe />} />}
          />
          <Route
            path="/nonprofit/:nonprofit/:project/subscribe"
            element={<NavbarFooter page={<Subscribe />} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<h1>Not found 404</h1>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
