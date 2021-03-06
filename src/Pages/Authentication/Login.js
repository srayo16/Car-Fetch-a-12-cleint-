import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseToken from '../../Components/Hooks/UseToken';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading';
import loginImg from '../../Images/login2.jpg';
import './Authentication.css';

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

    const [token] = UseToken(user || user1);
    const email = useRef('');
    let from = location.state?.from?.pathname || "/";

    if (token || user || user1) {
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
        <>
            <h1 className="text-5xl my-10 text-center text-primary font-bold">Login now!</h1>
            <section className='handleSection mb-28'>
                <div className='lg:mr-20'>
                    <img src={loginImg} alt="loginVector" className='max-w-sm w-96 rounded-lg' />
                </div>
                <div>
                    <div className="card flex-shrink-0 w-96 max-w-sm bg-base-100 lg:mr-20">

                        <div className="card-body">
                            <form onSubmit={subLoginForm}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" ref={email} name='email' placeholder="email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" name='password' required />

                                    {errorMessage}
                                    <label className="label">
                                        <p onClick={() => forgotPass()} className="label-text-alt link link-hover">Forgot password?</p>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>

                            </form>

                            <p className="label-text-alt text-center cursor-pointer">New to car-fetch? <Link to='/signup'><span className='font-bold text-primary  link link-hover'>Signup now</span></Link></p>
                            <div className="flex flex-col w-full border-opacity-50">

                                <div className="divider">OR</div>
                                <div>
                                    <button onClick={() => signInWithGoogle()} className="btn btn-outline w-80 btn-primary uppercase">Continue With Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
};

export default Login;