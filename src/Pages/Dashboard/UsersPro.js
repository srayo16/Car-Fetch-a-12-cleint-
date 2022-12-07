import React from 'react';
import { toast } from 'react-toastify';

const UsersPro = ({ user, refetch, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://car-fetch-a-12-server.onrender.com/user/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs btn-primary text-primary-content">Make Admin</button>}
                {role === 'admin' && <p className='font-semibold text-green-500 ml-5 cursor-pointer'>Admin</p>}
            </td>

        </tr>
    );
};

export default UsersPro;