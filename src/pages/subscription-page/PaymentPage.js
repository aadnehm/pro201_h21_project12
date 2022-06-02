/* components */

import PaymentForm from "../../components/Subscription/PaymentForm";
/* css */
import "./payment-page.css";

export function PaymentPage(props) {
  const { setActiveStep, selectedData } = props;
  return (
    <div className="payment-content-container">
      <h2>Payment</h2>
      <PaymentForm setActiveStep={setActiveStep} selectedData={selectedData} />
    </div>
  );
}

export default PaymentPage;
