//Componentes
import SearchNonProfits from "./components/search/SearchNonProfits";
import Login from "./pages/login/Login";
//Global CSS
import "./App.css";
//MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";

/* Changing default value for secondary color */
const mainColor = createTheme({
  palette: {
    secondary: {
      main: "#5C7B89",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={mainColor}>
      <div className="App">
        <Login></Login>
      </div>
    </ThemeProvider>
  );
}

export default App;
