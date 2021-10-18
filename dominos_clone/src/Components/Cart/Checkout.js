import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { PayButton } from './CartElements'
import paymentService from '../../services/payment'
const Checkout = ({cartElements,finalCartValue}) => {
   console.log(process.env.REACT_APP_KEY_VALUE)
    const makePayments=async (token)=>{
        const data={
            token,
            products:cartElements,
            finalCartValue:finalCartValue
        }
     try{
        const response= await paymentService.makePayment(`bearer ${JSON.parse(window.localStorage.userDetails)?.token}`,data)
        console.log("Response",response)
     }
     catch(error){
         console.error("Error",error);
     }


    }
    return <StripeCheckout 
                stripeKey="pk_test_51JiZBCSAaWSVfoWMYxrMfOtmPKD3aSut7LB2JSbLnUHqh6af3kvhZIaQnOVI0wyAmiDbpcMSjs9zkyDNdHct7Jfj00l5CGFvlb"
                token={makePayments}
                name='byReact'
                amount={finalCartValue*100}
                shippingAddress
                billingAddress >
        <PayButton>Pay</PayButton>
    </StripeCheckout>
            
        
}

export default Checkout
