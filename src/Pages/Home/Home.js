import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Parts></Parts>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
        </>
    );
};

export default Home;