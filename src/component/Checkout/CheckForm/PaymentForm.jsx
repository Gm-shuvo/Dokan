import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { Button, Divider, Typography } from '@material-ui/core'
import React from 'react'
import Review from './Review'

const stripePromise = loadStripe('...')
const PaymentForm = ({cartToken, Back}) => {
    return (
        <>
           
            <Review cartToken={cartToken}/>

            <Divider/>
            <Typography variant='h6' gutterBottom style={{margin:'20px 0'}}> Payment Method</Typography>

            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({elements,stripe})=>(
                        <form>
                            <CardElement/>
                            <br/> <br/>
                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <Button variant='outlined' onClick={Back}> Back</Button>
                                <Button variant='contained' type='submit' disabled={stripe} color='primary'> 
                                    Pay {cartToken.live.subtotal.formatted_with_symbol}
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>

        </>
    )
}

export default PaymentForm
