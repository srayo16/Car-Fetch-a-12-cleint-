import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageOrderPro from './ManageOrderPro';

const ManageOrders = () => {
    const { isLoading, error, data: orders, refetch } = useQuery('allOrder', () =>
        fetch('http://localhost:5000/booking').then(res =>
            res.json()
        )
    )

    if (isLoading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error.message


    return (
        <div class="overflow-x-auto mt-5 mb-40">
            <table class="table table-compact w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Ordered</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Process</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((order, index) => <ManageOrderPro key={order._id} order={order} index={index} refetch={refetch}></ManageOrderPro>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;