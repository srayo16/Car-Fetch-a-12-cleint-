import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading';
import ModalPro from './ModalPro';
import MyOrdersPro from './MyOrdersPro';
const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [canceling, setCanceling] = useState([]);
    const { isLoading, error, data: orders, refetch } = useQuery('orderData', () =>
        fetch(`http://localhost:5000/booking?email=${user.email}`).then(res =>
            res.json()
        )
    )

    if (isLoading || loading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error.message;
    // console.log(orders)
    return (
        <div class="overflow-x-auto mt-5">
            <table class="table table-compact w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Parts Name</th>
                        <th>Quantity</th>
                        <th>Payment</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((order, index) => <MyOrdersPro key={order._id} setCanceling={setCanceling} index={index} order={order}></MyOrdersPro>)
                    }
                </tbody>
            </table>
            {canceling && <ModalPro canceling={canceling} setCanceling={setCanceling} refetch={refetch}></ModalPro>}
        </div>
    );
};

export default MyOrders;