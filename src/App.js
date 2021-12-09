import "./App.css";
import SearchNonProfits from "./components/search/SearchNonProfits";
import SubscriptionPage from "./pages/SubscriptionPage/SubscriptionPage";

function App() {
  return (
    <div className="App">
      <h1>React App </h1>
      <p>Meliora Impact</p>
      <SearchNonProfits />
      <SubscriptionPage />
    </div>
  );
}

export default App;
