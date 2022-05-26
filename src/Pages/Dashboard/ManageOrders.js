import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import CancelingModal from './CancelingModal';
import ManageOrderPro from './ManageOrderPro';

const ManageOrders = () => {
    const { isLoading, error, data: orders, refetch } = useQuery('allOrder', () =>
        fetch('http://localhost:5000/booking', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    const [cancelModal, setCancelModal] = useState();
    if (isLoading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error.message


    return (
        <div className="overflow-x-auto mt-5 mb-40">
            <table className="table table-compact w-full">

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
                        orders.map((order, index) => <ManageOrderPro key={order._id} order={order} index={index} refetch={refetch} setCancelModal={setCancelModal}></ManageOrderPro>)
                    }

                </tbody>
            </table>
            {cancelModal && <CancelingModal cancelModal={cancelModal} setCancelModal={setCancelModal} refetch={refetch}></CancelingModal>}
        </div>
    );
};

export default ManageOrders;