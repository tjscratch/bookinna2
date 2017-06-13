import React from 'react';

let Promise = require('es6-promise').polyfill();
import { Header } from '../Header/Header.jsx'
import { MainBanner } from './MainBanner.jsx'
import { SPO } from '../SPO/SPO.jsx'
import { BestOffers } from '../BestOffers/BestOffers.jsx'
import { Footer } from '../Footer/Footer.jsx'


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
