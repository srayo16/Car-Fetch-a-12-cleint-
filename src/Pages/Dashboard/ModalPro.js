import React from 'react';
import { toast } from 'react-toastify';

const ModalPro = ({ canceling, setCanceling, refetch }) => {

    const { _id, partsName } = canceling;

    const cancelingOrder = id => {
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
                toast.success('Canceled the order')
                setCanceling([]);
            })
    }

    return (
        <>
            <input type="checkbox" id="my-modal-cancel" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure to cancel {partsName} part's order?</h3>
                    <p class="py-4">If you are sure to cancel then click yes or if you are not then click no!</p>
                    <div class="modal-action">
                        <label for="my-modal-cancel" onClick={() => cancelingOrder(_id)} class="btn  btn-xs sm:btn-sm md:btn-md lg:btn-sm btn-outline btn-primary">Yes!</label>
                        <label for="my-modal-cancel" onClick={() => setCanceling([])} class="btn  btn-xs sm:btn-sm md:btn-md lg:btn-sm btn-outline btn-error">No!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalPro;