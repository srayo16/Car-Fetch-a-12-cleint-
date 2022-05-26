import React, { useRef, useState } from 'react';
import { DynamicStar } from 'react-dynamic-star';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading';

const AddaReview = () => {

    const [rated, setRated] = useState(0);
    const [user, loading] = useAuthState(auth);
    const [errorMessage, setErrorMessage] = useState('');
    // console.log(user.photoURL);
    const ratingPoint = e => {
        let rate = e.target.value;

        if (rate > 5) {
            setErrorMessage('Please give rate in any numbers of 1-5');
            setRated(0)
        }
        if (rate < 0) {
            setErrorMessage('Please give rate in any numbers of 1-5');
            setRated(0);
        }

        if (rate >= 0 || rate <= 5) {
            // console.log(rate)
            setErrorMessage('');
            setRated(rate);
        }
    }

    if (loading) {
        return <Loading></Loading>
    }

    const handleSubReview = event => {
        event.preventDefault();
        const rating = event.target.rated.value;
        const description = event.target.description.value;
        const name = user?.displayName;
        const email = user?.email;
        const image = user?.photoURL;
        const review = { name, email, image, rating, description };

        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(posted => {
                // console.log(posted);
                if (posted.acknowledged) {
                    toast.success('Thanks for your review');
                    event.target.reset();
                }
            })

    }

    return (
        <div className="hero my-h-screen bg-base-100 container mx-auto">
            <div className="hero-content flex-col lg:flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl text-primary text-center font-bold">Add a review now!</h1>
                    <p className="py-6 text-center">Feel free to feedback us</p>
                    <div className='ml-5    '>
                        <DynamicStar fullStarColor='#0692B4' emptyStarColor='#D4D9E3' width={50} rating={rated} />
                    </div>
                </div>
                <div className="card flex-shrink-0  w-80 lg:w-96 max-w-sm  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubReview}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating Number</span>
                                </label>
                                <input type="number" name='rated' onChange={ratingPoint} placeholder="give your rating (1-5)" className="input input-bordered" required />
                                {
                                    errorMessage && <p className='text-red-500 mt-2'><small>{errorMessage}</small></p>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea type="text" name='description' placeholder="description" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddaReview;