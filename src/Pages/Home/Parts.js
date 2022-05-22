import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import PartsPro from './PartsPro';

const Parts = () => {
    const [parts, setParts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    if (parts.length <= 0) {
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-center text-primary mb-12 font-semibold text-4xl'>Our products (Parts)</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
                {
                    parts.map(part => <PartsPro key={part._id} part={part}></PartsPro>)
                }
            </div>

        </div>

    );
};

export default Parts;