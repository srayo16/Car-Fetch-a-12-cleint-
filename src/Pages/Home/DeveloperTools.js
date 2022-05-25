import React from 'react';
import { toast } from 'react-toastify';

const DeveloperTools = () => {

    const sendMail = event => {
        event.preventDefault();
        const mail = event.target.email.value;
        if (mail) {
            toast.success('Congratulations! Your request has been send');
            event.target.reset();
        }
        else {
            toast.error('Email input field is blank!');
        }
    }
    return (
        <div className='container mx-auto text-center my-40 bg-base-200  py-20'>
            <h1 class="text-4xl font-semibold text-primary mb-10">Contact to Developer for Feedback</h1>
            <div class="form-control w-80 lg:w-96  mx-auto">
                <label class="label">
                    <span class="label-text">Enter your email address</span>
                </label>
                <div class="relative">
                    <form onSubmit={sendMail}>
                        <input type="email" name='email' placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                        <button type='submit' class="btn btn-primary absolute top-0 right-0 rounded-l-none">Reach</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DeveloperTools;