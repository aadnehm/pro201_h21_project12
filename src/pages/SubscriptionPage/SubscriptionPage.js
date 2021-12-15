/* components */
import SubscriptionCard from "../../components/Subscription/SubscriptionCard";

/* css */
import "./subscriptionPage.css";

const SubscriptionPage = () => {
  return (
    <div className="sub-page-container">
      <div className="circle">
        <span className="circle-top-right"></span>
        <span className="circle-bottom-left"></span>
        <span className="circle-bottom-right"></span>
      </div>
      <div className="new-blue-line"></div>
      <div className="dummy-stepper">
        <div>Choose subscription</div>
        <div>Create Account</div>
        <div>Payment</div>
      </div>

      <SubscriptionCard />
    </div>
  );
};

export default SubscriptionPage;
