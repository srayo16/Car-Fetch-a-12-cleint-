import React from 'react';
import { Link } from 'react-router-dom';
import offerImg from '../../Images/offereHome.jpg';

const ExtraFirst = () => {
    return (
        <div class="hero my-h-screen my-10 lg:my-44 bg-base-100 container mx-auto">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={offerImg} class="max-w-sm w-full h-auto rounded-lg lg:mt-20" alt='offer' />
                <div className='px-10 mt-5 '>
                    <h1 class="text-5xl font-bold">Parts Offer News!</h1>
                    <p class="py-6 text-xl">We are offering our high quality expensive rare LED Headlight parts on summer season. In this offering, you will get 40% upto discount in any other parts of headlights. Stock limited.</p>
                    <Link to='/offerpage'><button class="btn btn-primary">Go to check</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ExtraFirst;