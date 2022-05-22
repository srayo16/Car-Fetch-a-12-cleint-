import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div class="hero h-screen bg-base-100 container mx-auto">
            <div class="hero-content flex-col lg:flex-col">
                <div class="text-center  lg:text-left">
                    <h1 class="text-5xl mb-5 text-primary font-bold">Sign Up!</h1>
                </div>
                <div class="card flex-shrink-0 w-80 lg:w-96 max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" class="input input-bordered" required />
                            <label class="label">
                                <p class="label-text-alt link link-hover">Forgot password?</p>
                            </label>

                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Sign Up</button>
                        </div>

                        <p class="label-text-alt text-center cursor-pointer">Already have an account? <Link to='/login'><span className='font-bold text-primary  link link-hover'>Please login</span></Link></p>

                        <div class="flex flex-col w-full border-opacity-50">

                            <div class="divider">OR</div>
                            <div>
                                <button class="btn btn-outline w-80 btn-primary uppercase">Continue With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;