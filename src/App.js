//Componentes
import SigninEmployee from "./pages/signin-employee/SigninEmployee";
import SubscriptionPage from "./pages/SubscriptionPage/SubscriptionPage";
import CreateAccountPage from "./pages/SubscriptionPage/CreateAccountPage";
import PaymentPage from "./pages/SubscriptionPage/PaymentPage";
import NonProfit from "./pages/nonProfitMain/NonProfitMain";
import NonProfitProject from "./pages/non-profit/NonprofitProject";
import InsideStories from "./components/non-profit-pages/InsideStories";

//Global CSS
import "./App.css";
//MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
//React
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
//Firebase
import db from "./lib/firebase";
import Footer from "./components/Footer/Footer";
import NavTabs from "./components/non-profit-tabs/NpTabs";

import AboutUs from "./components/AboutUs/AboutUs";
import {
  ButtonAppBar,
  NonProfitSearch,
} from "./pages/nonProfitSearch/NonProfitSearch";
import { FrontPage } from "./pages/frontPage/frontPage";
import Login from "./pages/login/Login";
import { Projects } from "./pages/projects/projectMainLayout";

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
  return (
    <>
      <ButtonAppBar />
      <>{props.page}</>
      <Footer />
    </>
  );
}

function App() {
  //Pulling non-profits from cloud database and storing it in state that gets passed
  //to SearchNonProfits-page
  /*
  const fetchOrgs = async () => {
    const response = db.collection("nonprofits");
    const data = await response.get();
    data.forEach((element) => {
      setOrgs((prevValue) => [...prevValue, element.data()]);
    });
  };
  const [orgs, setOrgs] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState();



  useEffect(() => {
    fetchOrgs();
  }, []);

   */

  return (
    <ThemeProvider theme={mainColor}>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavbarFooter page={<FrontPage />} />} />
          <Route
            path="/nonprofits"
            element={<NavbarFooter page={<NonProfitSearch />} />}
          />

          <Route
            path="/nonprofit/:nonprofit"
            element={<NavbarFooter page={<NonProfit />} />}
          />

          <Route
            path="/nonprofit/:nonprofit/:project"
            element={<NavbarFooter page={<Projects />} />}
          />

          <Route path="/login" element={<Login />} />
          {/*
            <Route path="/choose-subscription" element={<SubscriptionPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
           <Route path="/signin-employee" element={<SigninEmployee />} />

          <Route
            path="/non-project"
            element={<NonProfitProject selectedOrg={selectedOrg} />}
          />
          <Route
            path="/nonprofithome"
            element={<NonProfitHome selectedOrg={selectedOrg} />}
          /> */}
          {/*Terje's test-route */}
          <Route path="/aboutTest" element={<AboutUs />} />
          <Route path="/tabsTest" element={<NavTabs />} />
          <Route path="/insidestoriestest" element={<InsideStories />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
