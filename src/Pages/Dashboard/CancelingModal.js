import React from 'react';
import { toast } from 'react-toastify';

const CancelingModal = ({ cancelModal, setCancelModal, refetch }) => {
    // console.log(cancelModal);
    const { _id, name, partsName } = cancelModal;

    const canceling = id => {

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
                setCancelModal(null);
                toast.success('Cancelled!');


            })
    }
    return (
        <>

            <input type="checkbox" id="cancelingModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure to delete {partsName} order?</h3>
                    <p class="py-4">Ordered by {name}. If you are sure then click Yes ,else click No.</p>
                    <div class="modal-action">
                        <label for="cancelingModal" onClick={() => canceling(_id)} class="btn">Yes!</label>
                        <label for="cancelingModal" onClick={() => setCancelModal(null)} class="btn">No!</label>
                    </div>
                </div>
            </div></>
    );
};

export default CancelingModal;