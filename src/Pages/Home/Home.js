import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
        </>
    );
};

export default Home;