import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { toast, ToastContainer } from "react-toastify";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HneI1CfLew8EvtVHmL3iBb3O10zJPDvxLIMSfWrlw0bRd4eiDVxvplSRqiPzT2l3NtGzoPEEKKbFv9RkUuXdrwQ00lJPofAMl";
  const onToken = (token) => {
    console.log(token);
    toast.success("Payment Successful");
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />

      <ToastContainer />
    </div>
  );
};

export default StripeButton;
