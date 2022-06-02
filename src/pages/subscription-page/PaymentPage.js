/* components */

import PaymentForm from "../../components/Subscription/PaymentForm";
/* css */
import "./payment-page.css";

const PaymentPage = () => {
  return (
    <div className="payment-page-container">
    <div className="payment-content-container">
      <h2>Payment</h2>
      <PaymentForm />
    </div>
    </div>
  );
};

export default PaymentPage;
