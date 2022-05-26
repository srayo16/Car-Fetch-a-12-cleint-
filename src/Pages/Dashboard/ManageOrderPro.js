import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderPro = ({ order, index, refetch, setCancelModal }) => {

    const { name, email, partsName, orderQuantity, paid, _id } = order;

    // console.log(order);

    const changeStatus = (id) => {

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
                        order.status ? <p className='font-semibold'>Shipped</p> : <button className="btn btn-xs btn-primary" onClick={() => changeStatus(_id)}>Change status</button>
                    }
                </> : <p className='text-yellow-500'>Pending</p>
            }
            </td>
            <td>
                {/* <button disabled={paid} className="btn btn-xs btn-error" onClick={() => canceling(_id)}>Cancel</button> */}
                <label for="cancelingModal" disabled={paid} className="btn btn-xs btn-error modal-button" onClick={() => setCancelModal(order)}>Cancel</label>
            </td>
        </tr>
    );
};

export default ManageOrderPro;