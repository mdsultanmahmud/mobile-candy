import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
const CheckOutForm = ({ bookedProduct }) => {
    const { buyerName, email, price } = bookedProduct
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [transaction, setTransaction] = useState('')
    const [loadingPayment, setLoadingPayment] = useState(false)
    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization_token: `Bearer ${localStorage.getItem('AccessToken')}`
            },
            body: JSON.stringify({ price: price }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
            });
    }, [bookedProduct.price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            toast.error(error.message)
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        setLoadingPayment(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
            toast.error(confirmError.message)
            return
        }

        console.log('payment success status: ', paymentIntent)
        if (paymentIntent.status) {
            toast.success('Payment successfull!')
            setTransaction(paymentIntent.id)
        }

        setLoadingPayment(false)

    }
    return (
        <div className='mt-10'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success mt-5 px-5 btn-sm' type="submit" disabled={!stripe || !clientSecret || loadingPayment}>
                    Pay
                </button>
            </form>
            {
                transaction &&
                <>
                    <p className='text-sm font-bold text-green-400'>Payment completed</p>
                    <span><strong>Transaction Id: </strong> {transaction}</span>
                </>
            }
        </div>
    );
};

export default CheckOutForm;