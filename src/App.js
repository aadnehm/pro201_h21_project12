//Componentes
import SearchNonProfits from "./components/search/SearchNonProfits";
import Login from "./pages/login/Login";
import NonProfitHome from "./pages/nonProfitHome/NonProfitHome";
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
          <Route
            path="/nonprofithome"
            element={<NonProfitHome selectedOrg={selectedOrg} />}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
