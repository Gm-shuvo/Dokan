import { Paper, StepLabel, Stepper, Typography,Step } from '@material-ui/core';
// eslint-disable-next-line
import React,{useState,useEffect} from 'react'
import useStyle from "./CheckoutStyle";
import AddressForm from './CheckForm/AddressForm'
import PaymentForm from './CheckForm/PaymentForm'
import ConfirmPage from './Confirmpage/ConfirmPage'
import { commerce } from "../../lib/commerce";



const steps = ['Shipping Address' , 'Payment details'] 




const Checkout = ({cartItems}) => {
    const classes = useStyle()
    // eslint-disable-next-line
    const [activeStep, setactiveStep] = useState(0)

    // eslint-disable-next-line
    const [token, settoken] = useState(null)
	
	useEffect(() => {
        const generateToken = async()=>{
			try {
                const cartToken = await commerce.checkout.generateTokenFrom('cart',cartItems.id)
                     settoken(cartToken)
                   
            } catch (error) {
                console.log({message: 'Generating token error'});
            }          
        }
        generateToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
    
    const Form =()=> (
        activeStep === 0 ? <AddressForm token={token}/> : <PaymentForm/>
    )
    return (
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.Paper}>
                    <Typography variant='h4' align='center' >
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.Stepper}>
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
