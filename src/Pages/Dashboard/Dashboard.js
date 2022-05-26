import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from '../../Components/Hooks/UseAdmin';
import auth from '../../Firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = UseAdmin(user);
    return (
        <div className="drawer drawer-mobile  mt-5  container mx-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                <h1 className='text-center font-bold text-primary text-4xl'>Welcome to your Dashboard</h1>
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>

            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 lg:mt-10 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        !admin && <> <li><Link to='/dashboard'>My Orders</Link></li>
                            <li><Link to='/dashboard/review'>Add a review</Link></li></>
                    }

                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    {admin && <>

                        <li><Link to='/dashboard/users'>Users</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/manageorders'>Manage AllOrders</Link></li>
                        <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;