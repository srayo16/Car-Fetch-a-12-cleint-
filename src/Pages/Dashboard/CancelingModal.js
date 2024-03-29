import React from 'react';
import { toast } from 'react-toastify';

const CancelingModal = ({ cancelModal, setCancelModal, refetch }) => {
    // console.log(cancelModal);
    const { _id, name, partsName } = cancelModal;

    const canceling = id => {

        fetch(`https://car-fetch-a-12-server.onrender.com/booking?id=${id}`, {
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
                        <label htmlFor="cancelingModal" onClick={() => canceling(_id)} className="btn btn-primary">Yes!</label>
                        <label htmlFor="cancelingModal" onClick={() => setCancelModal(null)} className="btn btn-primary">No!</label>
                    </div>
                </div>
            </div></>
    );
};

export default CancelingModal;