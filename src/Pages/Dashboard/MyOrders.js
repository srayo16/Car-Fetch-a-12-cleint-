import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading';
import MyOrdersPro from './MyOrdersPro';
const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const { isLoading, error, data: orders } = useQuery('orderData', () =>
        fetch(`http://localhost:5000/booking?email=${user.email}`).then(res =>
            res.json()
        )
    )

    if (isLoading || loading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error.message;
    console.log(orders)
    return (
        <div class="overflow-x-auto">
            <table class="table table-compact w-full">
                {/* <!-- head --> */}
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
                    {/* <!-- row 1 --> */}
                    {
                        orders.map((order, index) => <MyOrdersPro key={order._id} index={index} order={order}></MyOrdersPro>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;