import React from 'react';
import Banner from '../Banner/Banner';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Service from './Service/Service';
import Terms from './Terms/Terms';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Terms></Terms>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;