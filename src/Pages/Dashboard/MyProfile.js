import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [filled, setFilled] = useState(false);
    if (loading) {
        return <Loading></Loading>
    }

    const postInfoOfUser = event => {
        event.preventDefault();

        const name = user?.displayName;
        const email = user?.email;
        const education = event.target.education.value;
        const location = event.target.location.value;
        const number = event.target.number.value;
        const linkedin = event.target.linkedin.value;
        const hobby = event.target.hobby.value;

        const information = { name, email, education, location, number, linkedin, hobby };
        // console.log(information)

        fetch('http://localhost:5000/information', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(information)
        })
            .then(res => res.json())
            .then(posted => {
                // console.log(posted);
                if (posted.acknowledged) {
                    toast.success('Added successfully');
                    setFilled(true);
                    event.target.reset();
                }
            })
    }

    return (
        <div class="hero my-h-screen bg-base-100 container mx-auto">
            <div class="hero-content flex-col lg:flex-col">
                <div class="text-center lg:text-left">
                    <h1 class="text-3xl text-primary text-center font-bold">Your Name: {user?.displayName}</h1>
                    <p class="py-6 text-center">Your Email: {user?.email}</p>

                </div>
                <div class="card flex-shrink-0  w-80 lg:w-96 max-w-sm  shadow-2xl bg-base-100">
                    <div class="card-body">
                        <p className='text-xl text-center font-semibold'>Add your information</p>
                        <form onSubmit={postInfoOfUser}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Education</span>
                                </label>
                                <input type="text" name='education' placeholder="education" class="input input-bordered" required />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Location</span>
                                </label>
                                <input type="text" name='location' placeholder="city/district" class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone Number</span>
                                </label>
                                <input type="number" name='number' placeholder="phone number with country code" class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">LinkedIn Profile</span>
                                </label>
                                <input type="link" name='linkedin' placeholder="linkedin profile link" class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Hobby</span>
                                </label>
                                <input type="text" name='hobby' placeholder="your hobby" class="input input-bordered" required />
                            </div>
                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;