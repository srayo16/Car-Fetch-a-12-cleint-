import React, { useEffect, useState } from 'react';
import PartsPro from './PartsPro';

const Parts = () => {
    const [parts, setParts] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-center text-primary mb-12 font-semibold text-4xl'>Our products (Parts)</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
                {
                    parts.map((part, index) => <PartsPro key={index} part={part}></PartsPro>)
                }
            </div>

        </div>

    );
};

export default Parts;