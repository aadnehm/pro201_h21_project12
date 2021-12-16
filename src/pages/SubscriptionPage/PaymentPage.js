/* components */

import PaymentForm from "../../components/Subscription/PaymentForm";
import BackButton from "../../components/Subscription/backButton";
/* css */
import "./subscriptionPage.css";

const PaymentPage = () => {
  return (
    <div className="sub-page-container">
      <BackButton></BackButton>
      <div className="circle">
        <span className="circle-top-right"></span>
        <span className="circle-bottom-left"></span>
        <span className="circle-bottom-right"></span>
      </div>
      <div className="stepper">
        <div className="line-stepper">
          <div className="dot"></div>
          <div className="dot"></div>
          <span className="active-dot"></span>
        </div>
        <div className="text-stepper">
          <div>Choose subscription</div>
          <div>Create Account</div>
          <div>Payment</div>
        </div>
      </div>

      <PaymentForm />
    </div>
  );
};

export default PaymentPage;
