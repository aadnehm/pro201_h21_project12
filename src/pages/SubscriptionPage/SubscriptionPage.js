/* components */
import SubscriptionCard from "../../components/Subscription/SubscriptionCard";
/* css */
import "./subscriptionPage.css";

const SubscriptionPage = () => {
  return (
    <div className="sub-page-container">
      <div className="circle">
        <span className="circle-top-right"></span>
      </div>
      <div className="blue-line"></div>

      <SubscriptionCard />
    </div>
  );
};

export default SubscriptionPage;
