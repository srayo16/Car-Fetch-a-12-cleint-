import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    const [errorMessage, setErrorMessage] = useState('');
    const quantities = useRef('');
    const { isLoading, error, data: singleParts } = useQuery('partsBySingle', () =>
        fetch(`https://fathomless-atoll-13213.herokuapp.com/parts/${id}`).then(res =>
            res.json()
        )
    )


    if (isLoading || loading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error?.message;


    const quabtityChange = (e) => {
        let quantity = e.target.value;
        // console.log(quantity);

        if (quantity < 1000) {
            setErrorMessage('Please order at least 1000ps+');
        }
        if (quantity > singleParts.availableQuantity) {
            setErrorMessage('Unavailable parts stock!');
        }

        if (quantity > 1000 && quantity < singleParts.availableQuantity) {
            setErrorMessage('');
        }
    }

    const purchaseParts = event => {
        event.preventDefault();

        // const name = event.target.name.value;
        // const email = event.target.email.value;
        const name = user?.displayName;
        const email = user.email;
        const partsName = singleParts?.name;
        const partsId = singleParts?._id;
        const number = event.target.number.value;
        const address = event.target.address.value;
        let orderQuantity = event.target.quantity.value;
        const price = event.target.price.value;

        if (orderQuantity > 1000 && orderQuantity < singleParts.availableQuantity) {
            const booked = { name, email, partsName, partsId, orderQuantity, price, number, address };

            fetch('https://fathomless-atoll-13213.herokuapp.com/booking', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(booked)
            })
                .then(res => res.json())
                .then(posted => {
                    // console.log(posted);
                    if (posted.acknowledged) {
                        toast.success('Booked successfully');
                        event.target.reset();
                    }
                })

        }


    }

    let pricePerInit = singleParts.price;
    let totalOrder = quantities?.current?.value;
    let priceTotal = totalOrder * pricePerInit;


    return (
        <div className='mx-5'>
            <div className="hero my-h-screen mt-3 bg-base-100 overflow-hidden">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={singleParts?.img} className="max-w-sm w-full h-auto rounded-lg lg:mt-20 border-4" alt='partsImage' />
                    <div>
                        <h1 className="text-3xl lg:text-5xl ml-14 lg:ml-20 text-primary font-bold">{singleParts?.name}</h1>
                        <p className="mt-6 text-xl"><span className='font-bold'>Description:</span> {singleParts?.description}</p>
                        <p className="text-xl my-2"><span className='font-bold'>Price:</span> ${singleParts?.price}</p>
                        <p className="text-xl"><span className='font-bold'>ID:</span> {singleParts?._id}</p>
                        <p className="text-xl my-2"><span className='font-bold'>MinOrder:</span> {singleParts?.minimumOrderQuantity}</p>
                        <p className="text-xl"><span className='font-bold'>In stock:</span> {singleParts?.availableQuantity}</p>
                    </div>
                </div>
            </div> <hr className='mt-20' />
            <div className="hero my-h-screen  bg-base-100">
                <div className="hero-content flex-col lg:flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl lg:text-5xl font-bold text-primary text-center">Complete the purchase!</h1>
                        <p className="mt-6 text-center text-xl">Please fill up this form for complete your purchase</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
                        <div className="card-body">

                            {/* form start  */}

                            <form onSubmit={purchaseParts}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' value={user?.displayName} readOnly className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' value={user?.email} readOnly className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" name='address' required placeholder="address" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="number" name='number' required placeholder="your number" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Order Quantity</span>
                                    </label>
                                    <input type="number" onChange={quabtityChange} ref={quantities} name='quantity' required placeholder="put your quantity" className="input input-bordered" />
                                    {
                                        errorMessage && <p className='text-red-500 mt-2'><small>{errorMessage}</small></p>
                                    }
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Total Price $</span>
                                    </label>
                                    <input type="number" value={priceTotal} readOnly required name='price' className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <button disabled={errorMessage} type='submit' className="btn btn-primary">Purchase Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Purchase;