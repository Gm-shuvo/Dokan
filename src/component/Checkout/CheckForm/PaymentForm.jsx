import React from 'react'
import Review from './Review'
const PaymentForm = ({cartToken}) => {
    return (
        <>
            <Review cartToken={cartToken}/>
        </>
    )
}

export default PaymentForm
