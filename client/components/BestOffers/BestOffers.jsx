import React from 'react';
// import { Link } from 'react-router'

import './BestOffers.css';
import Layouts from './Layouts.jsx'

import '../fonts/font-awesome/css/font-awesome.css';

import { getBanner } from '../Homepage/GetBanner.jsx'


export class BestOffers extends React.Component {
    constructor (props) {
        super(props);
        this.state = {bestOffer: []}
    }
    componentDidMount() {
        getBanner().then(results => {
            // results.data.SectionLayouts[0].OfferLayouts.length =12;
            this.setState({
                bestOffer: results.data.SectionLayouts[0].OfferLayouts
            })
        })
    }
getLayout(props, key) {
       return(
           <ul key={key} className="best-offer">
               {
                   Object.keys(props).map((item, key) => {
                       if (props[item].Image === undefined){
                           return null
                       }
                       else {
                           return (
                                <a key={key} href={`${props[item].Url}`} target="_blank" className={props[item].TypeName === "M" ? "best-offers middle" : "best-offers large"} >
                                    <li className={props[item].TypeName === "M" ? "offer-list offer-middle" : "offer-list offer-large"} style = {{background:  `url(${props[item].Image}) center/cover no-repeat`}}>
                                        <div className="offer-data-container">
                                            <span className="offer-big">{props[item].FrontTitleRow1}</span>
                                            <span className="offer-big">{props[item].FrontTitleRow2}</span>
                                            <span className="offer-small">{props[item].FrontSubTitleRow1}</span>
                                        </div>
                                        <div className="offer-price-container">
                                            <span className="offer-small">от</span>
                                            <span className="offer-big">{props[item].FrontPrice} <i className="offer-big fa fa-rub"></i></span>
                                        </div>
                                    </li>
                                </a>
                           )
                       }

                   })
               }
           </ul>
       )
   }
    render() {
        return (
              <div className="best-offers-container">
               {this.state.bestOffer.map( (bestOffer, key) => {
                   return this.getLayout(bestOffer, key)
               })}
           </div>
        )
    }
}
