import React from 'react';
import axios from 'axios'
// import SpecialOffers from './SpecialOffers.jsx'
import $ from 'jquery'

import { getSpo, getBestOffers } from './GetSpo.jsx'

export class SpoCategory extends React.Component {
    constructor (props) {
        super(props);
        this.state = {offer: [], specialoffers: []}
    }
    componentDidMount() {
        getSpo().then(results => {
            results.data.Categories.length =7;
            this.setState({
                offer: results.data.Categories
            })
        })
    }
    render() {
        const SpoCategory = (props) => {
            let showFilters = function (element) {
               if (element.target.className === "spo-offers") {
               $(".spo-offers.active").removeClass("active");
                 element.target.className = "spo-offers active"
               }
                $('.best-offers-container').fadeOut(600);
                $('.filters-wrapper').slideToggle(600).css("display", "flex");
                let CategoryId = props.id;
                getBestOffers(CategoryId).then(results => {
                    console.log(results.data.Offers)
                        this.setState({
                            specialoffers: results.data.Offers
                    });

                });
            };
              return(
                      <li className='spo-offers' onClick={showFilters.bind(this)}>{props.offerText}</li>
                    )
        };
        const SpecialOffers = (props) => {
            return(
                <li className="offer-list" style={{background: `url(${props.offerImage}) center/cover no-repeat`}}>
                </li>
            )
        };
        return (
              <div className="banner-wall">
                  <ul className="spo-container">
                      <li className='spo-offers active' onClick={showBannerWall}>Горящие туры</li>
                      {this.state.offer.map(offer => {
                          return  <SpoCategory key={offer.Value} id={offer.Value} offerText={offer.Text} />
                      })}
                  </ul>
                  <ul className="">
                      {this.state.specialoffers.map((offer, index) => {
                          return  <SpecialOffers key={index} offerImage={offer.ImageL} />
                      })}
                  </ul>
              </div>
        )
    }

}
let showBannerWall = (element) => {
  if (element.target.className === "spo-offers") {
  $(".spo-offers.active").removeClass("active");
    element.target.className = "spo-offers active"
  }
  $('.filters-wrapper').slideUp(600);
  $('.best-offers-container').css("display", "flex");
};

export default SpoCategory;
