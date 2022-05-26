import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageProducts = () => {

    const { isLoading, error, data: products } = useQuery('productData', () =>
        fetch('http://localhost:5000/parts').then(res =>
            res.json()
        )
    )

    if (isLoading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div class="overflow-x-auto mt-5 nb-40">
            <table class="table w-full">

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

                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;