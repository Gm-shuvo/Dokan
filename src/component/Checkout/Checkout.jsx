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
    const [shippingData, setshippingData] = useState({})
    
    const [token, settoken] = useState(null)
    
    

    

    useEffect(() => {
        const generateToken = async()=>{
            try {
                const cartToken = await commerce.checkout.generateTokenFrom('cart',cartItems.id)
                console.log(cartToken);
                settoken(cartToken)
                    
            } catch (error) {
                console.log({message: 'Generating token error'});
            }          
        }
        generateToken();
        
    }, [cartItems])

    const BackStep=()=>{
        setactiveStep((previousStep)=> previousStep - 1)
       
    }

    const NextStep=(data)=>{
        setactiveStep((previousStep)=> previousStep + 1 )
        setshippingData(data)
    }
    console.log(shippingData);
    function Form() {
        return (
            activeStep === 0 ? <AddressForm checkoutToken={token} Next={NextStep} Back={BackStep}/> : <PaymentForm shippingData={shippingData}/>
        );
    }
    return (
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
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
                        activeStep === steps.length ? <ConfirmPage/> : (token && <Form/>)
                    }
                </Paper>
            </main>
        </>
    )
}

export default Checkout
