//Componentes
import SigninEmployee from "./pages/signin-employee/SigninEmployee";
import SubscriptionPage from "./pages/SubscriptionPage/SubscriptionPage";
import CreateAccountPage from "./pages/SubscriptionPage/CreateAccountPage";
import PaymentPage from "./pages/SubscriptionPage/PaymentPage";
import NonProfit from "./pages/non-profit/NonProfitMain";
import NonProfitProject from "./pages/non-profit/NonprofitProject";
import SearchNonProfits from "./components/search/SearchNonProfits";
import Login from "./pages/login/Login";
import { NpCardGrid } from "./components/card-grid-np/NpCardGrid";

//Global CSS
import "./App.css";
//MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
//React
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
//Firebase
import db from "./lib/firebase";

/* Changing default value for secondary color */
const mainColor = createTheme({
  palette: {
    secondary: {
      main: "#5C7B89",
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

function App() {
  //Pulling non-profits from cloud database and storing it in state that gets passed
  //to SearchNonProfits-page
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

  return (
    <ThemeProvider theme={mainColor}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/nonprofits"
            element={
              <SearchNonProfits orgs={orgs} setSelectedOrg={setSelectedOrg} />
            }
          />
          <Route path="/signin-employee" element={<SigninEmployee />} />
          <Route path="/choose-subscription" element={<SubscriptionPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route
            path="/non-profit"
            element={<NonProfit selectedOrg={selectedOrg} />}
          />
          <Route
            path="/non-project"
            element={<NonProfitProject selectedOrg={selectedOrg} />}
          />
          <Route path="/grid" element={<NpCardGrid />} />
          {/* <Route
            path="/nonprofithome"
            element={<NonProfitHome selectedOrg={selectedOrg} />}
          /> */}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
