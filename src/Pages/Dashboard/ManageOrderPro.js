import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderPro = ({ order, index, refetch }) => {

    const { name, email, partsName, orderQuantity, paid, _id } = order;
    console.log(order);

    const changeStatus = (id) => {
        // console.log(id);
        // const status = 'shipped';
        // const statusUpdate = { status };

        fetch(`http://localhost:5000/all-booking/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                // if (data.modifiedCount > 0) {



                // }
            })

    }
    // console.log(order.status?.status);

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
                    <p className='text-green-500'>Paid</p>


                </>}
            </td>
            <td> {
                paid ? <>
                    {
                        order.status ? <p className='font-semibold'>Shipped</p> : <button class="btn btn-xs btn-primary" onClick={() => changeStatus(_id)}>Change status</button>
                    }
                </> : <p className='text-yellow-500'>Pending</p>
            }
            </td>
            <td><button disabled={paid} class="btn btn-xs btn-error" onClick={() => canceling(_id)}>Cancel</button>
            </td>
        </tr>
    );
};

export default ManageOrderPro;