/* components */

import PaymentForm from "../../components/Subscription/PaymentForm";

/* css */
import "./subscriptionPage.css";

const PaymentPage = () => {
  return (
    <div className="sub-page-container">
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
