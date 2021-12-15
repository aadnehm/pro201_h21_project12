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
      <div className="stepper">
        <div className="new-blue-line">
          <span className="dot-1">CIRCLE </span>
          <span className="dot-2">CIRCLE </span>
          <span className="dot-3">CIRCLE </span>
        </div>
      </div>

      <div className="dummy-stepper">
        <div>Choose subscription</div>
        <div>Payment</div>
        <div>Create Account</div>
      </div>

      <SubscriptionCard />
    </div>
  );
};

export default SubscriptionPage;
