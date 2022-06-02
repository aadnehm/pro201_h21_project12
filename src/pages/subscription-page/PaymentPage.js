/* components */

import PaymentForm from "../../components/Subscription/PaymentForm";
/* css */
import "./payment-page.css";

export function PaymentPage(props) {
  const setActiveStep = props.setActiveStep;
  return (
    <div className="payment-content-container">
      <h2>Payment</h2>
      <PaymentForm setActiveStep={setActiveStep} />
    </div>
  );
}

export default PaymentPage;
