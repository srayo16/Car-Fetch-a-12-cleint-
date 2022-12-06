import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import PartsPro from './PartsPro';
import UseParts from '../../Components/Hooks/UseParts';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Parts = () => {
    const [parts, setParts] = UseParts()

    if (parts.length <= 0) {
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto mt-20 mb-0 lg:mb-8'>
            <h1 className='text-center text-primary mb-12 font-semibold text-4xl'>Our products (Parts)</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-20'>
                {
                    parts.slice(0, 6).map(part => <PartsPro key={part._id} part={part}></PartsPro>)
                }
            </div>
            <div className='w-fit lg:w-20 mx-auto lg:ml-auto mt-12 lg:mr-8'>
                <Link to='/allproducts' className='font-bold text-primary'>Show All <HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight></Link>
            </div>
        </div>

    );
};

export default Parts;