import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UsersPro from './UsersPro';

const Users = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://car-fetch-a-12-server.onrender.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center my-5">Total Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Emails</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UsersPro
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            ></UsersPro>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;