import React from 'react';
import { toast } from 'react-toastify';

const ModalofProductDelete = ({ setDeleteProduct, deleteProduct, refetch }) => {

    const { _id } = deleteProduct;

    const deleteProductSub = id => {

        fetch(`http://localhost:5000/parts/${id}`, {
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
            <input type="checkbox" id="deleteProductModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure to delete {deleteProduct?.name}?</h3>
                    <p class="py-4">{deleteProduct?.availableQuantity} are available in stock. If you sure to delete then please click Yes.</p>
                    <div class="modal-action">
                        <label for="deleteProductModal" onClick={() => deleteProductSub(_id)} class="btn btn-primary">Yes!</label>
                        <label for="deleteProductModal" onClick={() => setDeleteProduct(null)} class="btn btn-error text-error-content">No!</label>
                    </div>
                </div>
            </div></>
    );
};

export default ModalofProductDelete;