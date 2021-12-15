/* components */
import SubscriptionCard from "../../components/Subscription/SubscriptionCard";
import PaymentForm from "../../components/Subscription/PaymentForm";
import CreateAccount from "../../components/Subscription/CreateAccount";
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
      <div className="blue-line"></div>
      <div className="dummy-stepper">
        <div>Choose subscription</div>
        <div>Payment</div>
        <div>Create Account</div>
      </div>

      {/* <SubscriptionCard /> */}
      <CreateAccount />
      {/*     <PaymentForm /> */}
    </div>
  );
};

export default SubscriptionPage;
