import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const Signup = () => {
    let location = useLocation();
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [sendEmailVerification, sending1, error3] = useSendEmailVerification(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    // const [token] = UseToken(user || user1);

    let from = location.state?.from?.pathname || "/";
    if (loading || loading1 || updating || sending1) {
        return <Loading></Loading>
    }

    let errorMessage;
    if (error || error1 || error2 || error3) {
        errorMessage = <p className='text-red-500'><small>{error?.message || error1?.message || error2?.message || error3?.message}</small></p>
    }

    // if (token) {
    //     navigate(from, { replace: true });
    //     toast('Welcome to Doctor Portal')
    // }
    if (user || user1) {
        navigate(from, { replace: true });
        toast.success('Welcome to Car-Fetch');
    }

    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        await sendEmailVerification();
        toast.success('Email sent');
    }
    return (
        <div class="hero h-screen bg-base-100 container mx-auto">
            <div class="hero-content flex-col lg:flex-col">
                <div class="text-center  lg:text-left">
                    <h1 class="text-5xl mb-5 text-primary font-bold">Sign Up!</h1>
                </div>
                <div class="card flex-shrink-0 w-80 lg:w-96 max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" class="input input-bordered"  {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })} />

                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                                </label>
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" class="input input-bordered" {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })} />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" class="input input-bordered" {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })} />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'MinLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                </label>
                                {errorMessage}

                            </div>

                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Sign Up</button>
                            </div>

                        </form>

                        <p class="label-text-alt text-center cursor-pointer">Already have an account? <Link to='/login'><span className='font-bold text-primary  link link-hover'>Please login</span></Link></p>

                        <div class="flex flex-col w-full border-opacity-50">

                            <div class="divider">OR</div>
                            <div>
                                <button onClick={() => signInWithGoogle()} class="btn btn-outline w-80 btn-primary uppercase">Continue With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;