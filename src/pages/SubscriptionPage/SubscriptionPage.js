import SubscriptionCard from "../../components/Subscription/SubscriptionCard";
import { Container } from "@mui/material";
import "./subscriptionPage.css";

const SubscriptionPage = () => {
  return (
    <div className="container">
      <section className="line">
        <div className="blue-line"></div>
      </section>
      <SubscriptionCard />
    </div>
  );
};

export default SubscriptionPage;
