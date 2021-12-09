import SubscriptionCard from "../../components/Subscription/SubscriptionCard";
import { Container } from "@mui/material";
import "./subscriptionPage.css";

const SubscriptionPage = () => {
  return (
    <div className="container">
      <section className="line">
        <div className="blue-line">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
      <SubscriptionCard />
    </div>
  );
};

export default SubscriptionPage;
