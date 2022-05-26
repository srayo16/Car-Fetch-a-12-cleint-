import React from 'react';
import { toast } from 'react-toastify';

const ModalofProductDelete = ({ setDeleteProduct, deleteProduct, refetch }) => {

    const { _id } = deleteProduct;

    const deleteProductSub = id => {

        fetch(`https://fathomless-atoll-13213.herokuapp.com/parts/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(deleted => {
                if (deleted.acknowledged) {
                    console.log(deleted);
                    refetch();
                    toast.success('Delete successful');
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="deleteProductModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure to delete {deleteProduct?.name}?</h3>
                    <p className="py-4">{deleteProduct?.availableQuantity} are available in stock. If you sure to delete then please click Yes.</p>
                    <div className="modal-action">
                        <label htmlFor="deleteProductModal" onClick={() => deleteProductSub(_id)} className="btn btn-primary">Yes!</label>
                        <label htmlFor="deleteProductModal" onClick={() => setDeleteProduct(null)} className="btn btn-error text-error-content">No!</label>
                    </div>
                </div>
            </div></>
    );
};

export default ModalofProductDelete;