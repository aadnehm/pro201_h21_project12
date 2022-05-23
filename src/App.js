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
//Firebase
import { FrontPage } from "./pages/front-page/FrontPage";
import {
  ButtonAppBar,
  NonProfitAll,
} from "./pages/non-profit-all/NonProfitAll";
import { Projects } from "./pages/projects/ProjectMainLayout";
import Login from "./pages/login/Login";
import AboutUs from "./components/about-us/AboutUs";
import NavTabs from "./components/non-profit-tabs/NpTabs";
import Footer from "./components/footer/Footer";

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
