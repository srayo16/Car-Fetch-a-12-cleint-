import React from 'react';
import UseParts from '../../Components/Hooks/UseParts';
import Loading from '../Shared/Loading';
import ProductsPro from './ProductsPro';

const Products = () => {
    const [parts, setParts] = UseParts();

    if (parts.length <= 0) {
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto mt-8 mb-40'>
            <h1 className='text-center text-primary pb-5 font-bold text-4xl'>Our products (Parts)</h1>
            <hr className='mb-24' />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-20'>
                {
                    parts.map(part => <ProductsPro key={part._id} part={part}></ProductsPro>)
                }
            </div>

        </div>
    );
};

export default Products;