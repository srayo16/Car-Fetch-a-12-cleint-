import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersPro = ({ order, index, setCanceling }) => {

    const { _id, partsName, orderQuantity } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{partsName}</td>
            <td>{orderQuantity}</td>
            <td>

                {(order?.price && !order?.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn  btn-xs sm:btn-sm md:btn-md lg:btn-sm btn-outline btn-primary">Pay</button></Link>}

                {(order?.price && order?.paid) && <div>
                    <p><span className='text-green-500'>Paid</span></p>
                    <p>Transaction id: <span className='text-orange-500'>{order?.transactionId}</span></p>
                </div>}</td>
            <td>

                {
                    order?.paid ? <p className='text-green-500'>Confirmed</p> : <label for="my-modal-cancel" onClick={() => setCanceling(order)} class="btn  btn-xs sm:btn-sm md:btn-md lg:btn-sm btn-outline btn-error modal-button">Cancel</label>
                }

            </td>

        </tr>
    );
};

export default MyOrdersPro;