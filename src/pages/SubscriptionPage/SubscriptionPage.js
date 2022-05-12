/* components */
import SubscriptionCard from "../../components/Subscription/SubscriptionCard";
import BackButton from "../../components/Subscription/backButton";
/* css */
import "./subscriptionPage.css";
import Menu from "../../components/navbar/Menu.js";

const SubscriptionPage = () => {
  return (
    <div className="sub-page-container">
      <Menu />
      <div className="circle">
        <span className="circle-top-right"></span>
        <span className="circle-bottom-left"></span>
        <span className="circle-bottom-right"></span>
      </div>
      <div className="back-button-container">
        <BackButton classNAme="back-button" />
      </div>

      <div className="stepper">
        <div className="line-stepper">
          <div className="active-dot"></div>
          <div className="dot"></div>
          <span className="dot"></span>
        </div>
        <div className="text-stepper">
          <div>Choose subscription</div>
          <div>Create Account</div>
          <div>Payment</div>
        </div>
      </div>

      <SubscriptionCard />
    </div>
  );
};

export default SubscriptionPage;
