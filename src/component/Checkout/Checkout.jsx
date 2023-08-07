import { Paper, StepLabel, Stepper, Typography, Step } from "@material-ui/core";
// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import useStyle from "./CheckoutStyle";
import AddressForm from "./CheckForm/AddressForm";
import PaymentForm from "./CheckForm/PaymentForm";
import ConfirmPage from "./Confirmpage/ConfirmPage";
import { commerce } from "../../lib/commerce";
import { useHistory } from "react-router-dom";


const steps = ["Shipping Address", "Payment details"];

const Checkout = ({ cartItems, Order, OnCatureOrder, Error , refreshCart}) => {
  const classes = useStyle();
  // eslint-disable-next-line
  console.log(cartItems); 
  const history = useHistory();

  const [activeStep, setactiveStep] = useState(0);
  const [shippingData, setshippingData] = useState({});

  // const [token, setToken] = useState(null);

  // useEffect(() => {
  //   if (cartItems.id) {
  //     const generateToken = async () => {
  //       try {
  //         const token = await commerce.checkout.generateTokenFrom('cart', cartItems.id);

  //         setToken(token);
  //       } catch(err) {
  //         console.log(err)
  //       }
  //     };

  //     generateToken();
  //   }
  // }, [cartItems]);

  const BackStep = () => {
    setactiveStep((previousStep) => previousStep - 1);
  };

  const NextStep = (data) => {
    setactiveStep((previousStep) => previousStep + 1);
    setshippingData(data);
  };

  const Next = () =>{
    setactiveStep((previousStep) => previousStep + 1);
  }

  console.log(shippingData);

  // const Next= () => {
  //   setactiveStep((previousStep) => previousStep + 1);
  // }

  useEffect(() => {
    if(activeStep === steps.length) {
      history.push('/confirm');
    }
  
  }, [activeStep, history])


  function Form() {
    return activeStep === 0 ? (
      <AddressForm checkoutToken={""} Next={NextStep} Back={BackStep} />
    ) : (
      <PaymentForm
        cartToken={cartItems}
        BackStep={BackStep}
        shippingData={shippingData}
        NextStep={Next}
        OnCatureOrder={OnCatureOrder}
        refreshCart={refreshCart}
      />
      
    );
  }
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.Stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Form/>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
