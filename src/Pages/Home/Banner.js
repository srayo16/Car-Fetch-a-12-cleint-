import React from 'react';
import banner from './../../Images/banner.jpg';

const Banner = () => {

    return (
        <div>
            <img src={banner} alt="Banner" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    );
};


export default Banner;