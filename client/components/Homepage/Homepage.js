import React from 'react';

// var Promise = require('es6-promise').polyfill();
import { Header } from '../Header/Header'
import { MainBanner } from './MainBanner'
import { SPO } from '../SPO/SPO'
import { BestOffers } from '../BestOffers/BestOffers'
import { Footer } from '../Footer/Footer'


export class Homepage extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <MainBanner />
                <SPO />
                <BestOffers />
                <Footer />
            </div>
        )
    }
}
