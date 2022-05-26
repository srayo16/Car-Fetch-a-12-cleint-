import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const CheckoutForm = ({ booking }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [cardSuccess, setCardSuccess] = useState("");
    const [clientTransId, setClientTransId] = useState("");
    const [processing, setProcessing] = useState(false);

    const { price, name, partsName, _id, email } = booking;

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ price })

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                    // toast('okay!');

                }
            });
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const card = elements.getElement(CardElement);
        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setCardSuccess('');
        setProcessing(true);
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            // console.log(paymentIntent);
            setClientTransId(paymentIntent.id);
            setCardSuccess('Congrats! Your payment is completed.');
            setProcessing(false);

            const payment = {
                appointmentId: _id,
                transactionId: paymentIntent.id,
                status: 'pending'

            }

            fetch(`http://localhost:5000/booking/${_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => {

                    if (data.modifiedCount > 0) {
                        setProcessing(false);
                        // console.log(data);

                    }
                })

        }

    };

    if (processing) {
        return <Loading></Loading>
    }

    return (
        <>
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
                    }} />

                <button className="btn btn-success btn-xs sm:btn-sm md:btn-md lg:btn-md my-5" type="submit" disabled={!stripe || !elements || !clientSecret || cardSuccess}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                cardSuccess && <div>
                    <p className='text-green-500'>{cardSuccess}</p>
                    <p className='text-orange-500'>Your transaction Id: {clientTransId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;