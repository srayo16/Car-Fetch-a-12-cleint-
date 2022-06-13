import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase.init';
import Loading from '../Pages/Shared/Loading';

function RequireAuth({ children }) {
    // let auth = useAuth();
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error3] = useSendEmailVerification(auth);
    let location = useLocation();

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5 h-screen'>
            <h3 className='text-red-500 font-bold text-4xl'>Your Email is not verified!!</h3>
            <h5 className='text-primary text-2xl mb-3 mt-3'> Please Verify your email address</h5>
            <button
                className='btn btn-primary mt-2'
                onClick={async () => {
                    await sendEmailVerification();
                    toast.success('Sent email');
                }}
            >
                Send Verification Email Again
            </button>
        </div>
    }

    return children;
}

export default RequireAuth;