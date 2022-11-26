import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_pk);
const Payment = () => {
    const bookedProduct = useLoaderData()
    return (
        <div>
            <div className='md:w-4/5 mx-auto bg-gray-100 shadow-xl p-5 my-5 rounded-sm'>
                <h3 className='font-bold text-xl'>Please payment for {bookedProduct.productsName}</h3>
                <p className='text-red-500 font-bold text-sm'>Price: ${bookedProduct.price}</p>
                <p className='text-red-500 font-bold text-sm'>Booking Date: {bookedProduct.date}</p>
                <div className='w-96 my-4'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm bookedProduct = {bookedProduct}></CheckOutForm>
                </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;