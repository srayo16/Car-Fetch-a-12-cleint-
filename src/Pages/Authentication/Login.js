import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    // const [token] = UseToken(user || user1);
    const email = useRef('');
    let from = location.state?.from?.pathname || "/";

    // useEffect(() => {
    //     if (token) {
    //         navigate(from, { replace: true });
    //         toast('Welcome to Doctor Portal');
    //     }

    if (user || user1) {
        navigate(from, { replace: true });
        toast.success('Welcome to Car-Fetch');

    }

    if (loading || loading1 || sending) {
        return <Loading></Loading>
    }

    let errorMessage;
    if (error || error1 || error2) {
        errorMessage = <p className='text-red-500'><small>{error?.message || error1?.message || error2?.message}</small></p>
    }



    const subLoginForm = async event => {
        event.preventDefault();
        const mail = event.target.email.value;
        const pass = event.target.password.value;

        await signInWithEmailAndPassword(mail, pass);


    }

    const forgotPass = async () => {

        const mail = email.current.value;;

        if (mail && !error2) {
            await sendPasswordResetEmail(mail);
            toast.success('Sent email');
        }
        else {
            toast.error('Email field empty!');
        }
    }


    return (
        <div class="hero h-screen bg-base-100  container mx-auto">
            <div class="hero-content flex-col lg:flex-col">
                <div class="text-center  lg:text-left">
                    <h1 class="text-5xl mb-5 text-primary font-bold">Login now!</h1>
                </div>
                <div class="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={subLoginForm}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" ref={email} name='email' placeholder="email" class="input input-bordered" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" class="input input-bordered" name='password' required />

                                {errorMessage}
                                <label class="label">
                                    <p onClick={() => forgotPass()} class="label-text-alt link link-hover">Forgot password?</p>
                                </label>
                            </div>

                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-primary">Login</button>
                            </div>

                        </form>

                        <p class="label-text-alt text-center cursor-pointer">New to car-fetch? <Link to='/signup'><span className='font-bold text-primary  link link-hover'>Signup now</span></Link></p>
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

export default Login;