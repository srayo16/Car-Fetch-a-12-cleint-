import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import DeveloperTools from './DeveloperTools';
import ExtraFirst from './ExtraFirst';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <ExtraFirst></ExtraFirst>
            <Parts></Parts>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
            <DeveloperTools></DeveloperTools>
        </>
    );
};

export default Home;