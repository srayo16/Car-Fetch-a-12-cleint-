import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageProductsPro from './ManageProductsPro';
import ModalofProductDelete from './ModalofProductDelete';

const ManageProducts = () => {

    const { isLoading, error, data: products, refetch } = useQuery('productData', () =>
        fetch('https://car-fetch-a-12-server.onrender.com/parts', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )

    const [deleteProduct, setDeleteProduct] = useState();

    if (isLoading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="overflow-x-auto mt-5 mb-40">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>InStock</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map((product, index) => <ManageProductsPro key={product._id} product={product} index={index} setDeleteProduct={setDeleteProduct}></ManageProductsPro>)
                    }

                </tbody>
            </table>
            {
                deleteProduct && <ModalofProductDelete deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct} refetch={refetch}></ModalofProductDelete>
            }
        </div>
    );
};

export default ManageProducts;