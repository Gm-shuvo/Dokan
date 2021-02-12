import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Divider, Typography } from "@material-ui/core";
import React from "react";
import Review from "./Review";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

const PaymentForm = ({ cartToken, BackStep, shippingData, OnCatureOrder, NextStep}) => {
  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log({ message: "Error ocured on Strip" });
    } else {
      const orderData = {
        line_item: cartToken.live.line_items,
        customer: {
          firstname: shippingData.firstname,
          lastname: shippingData.lastname,
          email: shippingData.email,
        },
        shipping: {
          name: "Primary",
          street: shippingData.address,
          town_city: shippingData.city,
          country_state: shippingData.shippingSubdivision,
          country: shippingData.shippingCountry,
          postal_zip_code: shippingData.zip,
        },
        fulfillment:{shipping_method: shippingData.shippingOption},

        payment:{
            gateway: 'stripe',
            stripe:{
                payment_method_id: paymentMethod.id
            }
        }
      }
      OnCatureOrder(cartToken.id, orderData)
      NextStep()
    }
}
  
  return (
    <>
      <Review cartToken={cartToken} />

      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment Method
      </Typography>

      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br /> <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={BackStep}>
                  {" "}
                  Back
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={stripe}
                  color="primary"
                >
                  Pay {cartToken.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
