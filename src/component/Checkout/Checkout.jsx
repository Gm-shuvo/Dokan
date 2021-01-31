import { Paper, StepLabel, Stepper, Typography,Step } from '@material-ui/core';
// eslint-disable-next-line
import React,{useState} from 'react'
import useStyle from "./CheckoutStyle";
import AddressForm from './CheckForm/AddressForm'
import PaymentForm from './CheckForm/PaymentForm'
import ConfirmPage from './Confirmpage/ConfirmPage'

const steps = ['Shipping Address' , 'Payment details'] 




const Checkout = () => {
    const classes = useStyle()
    const [activeStep, setactiveStep] = useState(0)

    const Form =()=> (
        activeStep === 0 ? <AddressForm/> : <PaymentForm/>
    )


    return (
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.Paper}>
                    <Typography variant='h4' align='center' >
                        Checkout
                    </Typography>
                    <Stepper activeStep={1} className={classes.Stepper}>
                        {
                            steps.map((step)=>(
                                <Step key={step}>
                                    <StepLabel>{step }</StepLabel>
                                </Step>
                            ))
                        }
                    </Stepper>
                    {
                        activeStep === steps.length ? <ConfirmPage/> : <Form/>
                    }
                </Paper>
            </main>
        </>
    )
}

export default Checkout
