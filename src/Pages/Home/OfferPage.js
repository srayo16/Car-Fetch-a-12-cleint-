import React from 'react';
import offering from '../../Images/offer.jpg';

const OfferPage = () => {
    return (
        <div className='container mx-auto my-5' style={{ height: '700px' }}>
            <img src={offering} class="max-w-sm mx-auto rounded-lg shadow-2xl w-full h-auto" alt='offer' />
            <p className='text-center text-xl mt-10 font-semibold'>To get more and for offer please first order a products from us, Then we will reached you.</p>
        </div>
    );
};

export default OfferPage;