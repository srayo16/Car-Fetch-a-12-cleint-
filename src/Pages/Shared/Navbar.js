import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from './Loading';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }

    const logout = () => {
        signOut(auth);
        toast.success('Logged Out')
    };
    const pages = <>

        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/myportfolio'>MyPortfolio</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {
            !user && <li><Link to='/login'>Login</Link></li>
        }

    </>


    return (
        <div className='bg-primary'>
            <div className="navbar bg-primary text-primary-content container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-primary-content rounded-box w-52">
                            {pages}
                            {
                                user && <li tabIndex="0">
                                    <a>
                                        {user?.displayName}
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul className="p-2 bg-primary">
                                        <li><Link to='/dashboard '>Dashboard</Link></li>
                                        {
                                            user && <li className='btn btn-ghost w-fit lg:mx-auto lg:items-center lg:w-auto w-25  font-normal' onClick={() => logout()}>Logout</li>
                                        }
                                    </ul>
                                </li>
                            }

                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Car-Fetch</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-1">
                        {pages}
                        <div className='dropdown'>
                            {
                                user && <li tabIndex="0">
                                    <a>
                                        {user?.displayName}
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul className="p-2 bg-primary mt-14  dropdown-content">
                                        <li><Link to='/dashboard'>Dashboard</Link></li>
                                        {
                                            user && <li className='btn btn-ghost w-fit lg:mx-auto lg:items-center lg:w-auto w-25  font-normal' onClick={() => logout()}>Logout</li>
                                        }
                                    </ul>
                                </li>
                            }
                        </div>

                    </ul>
                </div>
                <div className='navbar-end lg:hidden'>
                    <label htmlFor="my-drawer-2" className="btn btn-primary lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;