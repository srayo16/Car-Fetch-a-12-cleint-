import React from 'react';

const ManageProductsPro = ({ product, index, setDeleteProduct }) => {
    // console.log(product);
    const { name, availableQuantity } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{availableQuantity}</td>
            <td>
                <label htmlFor="deleteProductModal" onClick={() => setDeleteProduct(product)} className="btn btn-sm btn-outline btn-error modal-button">Delete</label></td>
        </tr>
    );
};

export default ManageProductsPro;