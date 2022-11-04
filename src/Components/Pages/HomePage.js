import React from 'react';
import Banner from './Banner';
import DemoProjectGrid from './DemoProjectGrid';
import Experiences from './Experiences';
import FeaturedProjects from './FeaturedProjects';
import OfferServices from './OfferServices';
import Services from './Services';

const HomePage = () => {
    return (
        <>
            <Banner></Banner>
            <OfferServices></OfferServices>
            <Experiences></Experiences>
            <FeaturedProjects></FeaturedProjects>
            <DemoProjectGrid></DemoProjectGrid>
        </>
    );
};

export default HomePage;