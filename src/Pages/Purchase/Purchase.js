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
    const [disabled, setDisabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const quantity = useRef('');
    const { isLoading, error, data: singleParts, refetch } = useQuery('partsBySingle', () =>
        fetch(`http://localhost:5000/parts/${id}`).then(res =>
            res.json()
        )
    )


    if (isLoading || loading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error?.message;


    const quabtityChange = (e) => {
        let quantity = e.target.value;
        console.log(quantity);

        if (quantity < 1000) {
            setErrorMessage('Errr dekho na?');
        }
        if (quantity > singleParts.availableQuantity) {
            setErrorMessage('besi dichco toh!')
        }

        if (quantity > 1000 && quantity < singleParts.availableQuantity) {
            setErrorMessage('');
        }
    }

    const purchaseParts = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        const address = event.target.address.value;
        const orderQuantity = event.target.quantity.value;

        // if (orderQuantity < 1000) {

        //     alert("Please order upto 1000ps!");
        //     setDisabled(true);
        // }
        // if (orderQuantity > singleParts?.availableQuantity) {
        //     alert("Products quantity aren't in stock right now");
        //     setDisabled(true);
        // }

    }

    return (
        <div className='mx-5'>
            <div class="hero my-h-screen mt-3 bg-base-100 overflow-hidden">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={singleParts?.img} class="max-w-sm w-full h-auto rounded-lg lg:mt-20 border-4" alt='partsImage' />
                    <div>
                        <h1 class="text-3xl lg:text-5xl ml-14 lg:ml-20 text-primary font-bold">{singleParts?.name}</h1>
                        <p class="mt-6 text-xl"><span className='font-bold'>Description:</span> {singleParts?.description}</p>
                        <p class="text-xl my-2"><span className='font-bold'>Price:</span> ${singleParts?.price}</p>
                        <p class="text-xl"><span className='font-bold'>ID:</span> {singleParts?._id}</p>
                        <p class="text-xl my-2"><span className='font-bold'>MinOrder:</span> {singleParts?.minimumOrderQuantity}</p>
                        <p class="text-xl"><span className='font-bold'>In stock:</span> {singleParts?.availableQuantity}</p>
                    </div>
                </div>
            </div> <hr className='mt-20' />
            <div class="hero my-h-screen  bg-base-100">
                <div class="hero-content flex-col lg:flex-col">
                    <div class="text-center lg:text-left">
                        <h1 class="text-3xl lg:text-5xl font-bold text-primary text-center">Complete the purchase!</h1>
                        <p class="mt-6 text-center text-xl">Please fill up this form for complete your purchase</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm  bg-base-100">
                        <div class="card-body">

                            {/* form start  */}

                            <form onSubmit={purchaseParts}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' value={user?.displayName} readOnly class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' value={user?.email} readOnly class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Address</span>
                                    </label>
                                    <input type="text" name='address' required placeholder="address" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Phone Number</span>
                                    </label>
                                    <input type="number" name='number' required placeholder="your number" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Order Quantity</span>
                                    </label>
                                    <input type="number" onChange={quabtityChange} name='quantity' required placeholder="put your quantity" class="input input-bordered" />
                                    {
                                        errorMessage && <p className='text-red-500'><small>{errorMessage}</small></p>
                                    }
                                </div>
                                <div class="form-control mt-6">
                                    <button disabled={disabled} type='submit' class="btn btn-primary">Purchase Now</button>
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