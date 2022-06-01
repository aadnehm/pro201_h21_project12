//Components
import NonProfit from "./pages/non-profit-single/NonProfitSingle";

import InsideStories from "./components/inside-stories/InsideStories";

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
import {Subscribe} from "./pages/subscribe/Subscribe"
import { Projects } from "./pages/projects/ProjectMainLayout";
import Login from "./pages/login/Login";
import NavTabs from "./components/non-profit-tabs/NpTabs";
import Footer from "./components/footer/Footer";
import { useLocation } from "react-router";
import PaymentPage from "./pages/subscription-page/PaymentPage";

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
    fontFamily: `"Raleway", "Helvetica", "Arial", sans-serif`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
  },
});

function NavbarFooter(props) {
  const transition = { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] };

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
            path="/subscribe"
            element={<NavbarFooter page={<Subscribe />} />}
          />
          {/* test route sigmund utvikling */}
             <Route
            path="/payment"
            element={<NavbarFooter page={<PaymentPage />} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<h1>Not found 404</h1>} />
          <Route path="/tabsTest" element={<NavTabs />} />
          <Route path="/insidestoriestest" element={<InsideStories />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
