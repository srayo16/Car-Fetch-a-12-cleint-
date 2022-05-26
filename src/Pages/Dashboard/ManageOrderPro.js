import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderPro = ({ order, index }) => {

    const { name, email, partsName, orderQuantity, paid, _id, refetch } = order;

    const changeStatus = (id) => {

        const statusUpdate = 'shipped';
        const sendtoDb = { statusUpdate };

        fetch(`http://localhost:5000/booking/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendtoDb)

        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    refetch();
                    // console.log(data);

                }
            })

    }

    const canceling = id => {

        const confirm = window.confirm('Are you sure to cancel this order?');

        if (confirm) {
            fetch(`http://localhost:5000/booking?id=${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json)
                .then(deleteSuccess => {
                    // console.log(deleteSuccess);
                    refetch();
                    toast.success('Cancelled!')

                })
        }


    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{partsName}</td>
            <td>{orderQuantity}</td>
            <td>{!paid && <p className='text-red-500'>unpaid</p>}
                {paid && <>
                    <p className='text-green-500'>{order?.status}</p>
                    <button class="btn btn-xs btn-primary" onClick={() => changeStatus(_id)}>Change status</button>
                    <button class="btn btn-xs btn-error" onClick={() => canceling(_id)}>Cancel</button>
                </>}
            </td>
        </tr>
    );
};

export default ManageOrderPro;