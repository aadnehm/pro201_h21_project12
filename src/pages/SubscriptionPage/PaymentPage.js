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
      <div className="blue-line"></div>
      <div className="dummy-stepper">
        <div>Choose subscription</div>
        <div>Create Account</div>
        <div>Payment</div>
      </div>

      <PaymentForm />
    </div>
  );
};

export default PaymentPage;
