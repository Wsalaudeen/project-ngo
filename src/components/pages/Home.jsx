import React from 'react';
import Hero from '../sections/Hero';
import ValuesStats from '../sections/ValuesStats';
import Programs from '../sections/Programs';
import Approach from '../sections/Approach';
import ImpactData from '../sections/ImpactData';
import Team from '../sections/Team';
import AudienceCards from '../sections/AudienceCards';
import Campaign from '../sections/Campaign';
import Newsletter from '../sections/Newsletter';

const Home = () => {
    return (
        <>
            <Hero />
            <ValuesStats />
            <Programs />
            <Approach />
            <ImpactData />
            <Team />
            <AudienceCards />
            <Campaign />
            <Newsletter />
        </>
    );
};

export default Home;
