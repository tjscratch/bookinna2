import React, { Component } from 'react';

let Promise = require('es6-promise').polyfill();
import { Header } from '../Header/Header.jsx'
import { MainBanner } from './MainBanner.jsx'
import MainBanner_1 from './MainBanner_1.jsx'
import { SPO } from '../SPO/SPO.jsx'
import { BestOffers } from '../BestOffers/BestOffers.jsx'
import { Footer } from '../Footer/Footer.jsx'


const Homepage = () =>(
    <div className="wrapper">
        <Header />
        <MainBanner />
        <SPO />
        <BestOffers />
        <Footer />
    </div>
);

export default Homepage;