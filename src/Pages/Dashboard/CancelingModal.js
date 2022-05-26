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

            <input type="checkbox" id="cancelingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure to delete {partsName} order?</h3>
                    <p className="py-4">Ordered by {name}. If you are sure then click Yes ,else click No.</p>
                    <div className="modal-action">
                        <label for="cancelingModal" onClick={() => canceling(_id)} className="btn">Yes!</label>
                        <label for="cancelingModal" onClick={() => setCancelModal(null)} className="btn">No!</label>
                    </div>
                </div>
            </div></>
    );
};

export default CancelingModal;