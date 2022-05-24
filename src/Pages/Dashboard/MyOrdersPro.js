import React from 'react';

const MyOrdersPro = ({ order, index }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.partsName}</td>
            <td>{order.orderQuantity}</td>
            <td><button class="btn  btn-xs sm:btn-sm md:btn-md lg:btn-sm btn-outline btn-primary">Pay</button></td>
            <td><button class="btn  btn-xs sm:btn-sm md:btn-md lg:btn-sm btn-outline btn-error">Cancel</button></td>

        </tr>
    );
};

export default MyOrdersPro;