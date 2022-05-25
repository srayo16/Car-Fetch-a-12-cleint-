import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from '../../Components/Hooks/UseAdmin';
import auth from '../../Firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = UseAdmin(user);
    return (
        <div class="drawer drawer-mobile  mt-5  container mx-auto">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">

                <h1 className='text-center font-bold text-primary text-4xl'>Welcome to your Dashboard</h1>
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>

            </div>

            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 lg:mt-10 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/review'>Add a review</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    {admin && <li><Link to='/dashboard/users'>Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;