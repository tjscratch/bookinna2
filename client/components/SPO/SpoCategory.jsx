import React from 'react';
import axios from 'axios'
import SpecialOffers from './SpecialOffers.jsx'
import $ from 'jquery'

import { getSpo, getBestOffers } from './GetSpo.jsx'

export class SpoCategory extends React.Component {
    constructor (props) {
        super(props);
        this.state = {offer: []}
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
                $('.best-offers-container').css("display", "none");
                $('.filters-wrapper').slideToggle(600).css("display", "flex");
                let CategoryId = props.id;
                getBestOffers(CategoryId).then(results => {
                  let specialOffers = [];
                  specialOffers = results.data.Offers;
                  return (
                    <ul className="shit">
                        {specialOffers.map(offerItem => {
                          // console.log(offerItem);
                            return  <SpecialOffers key={offerItem.DirectoryId} Country={offerItem.Country} Image={offerItem.ImageL} />

                        })}
                    </ul>
                  )


                });
            };
              return(
                      <li className='spo-offers' onClick={showFilters}>{props.offerText}</li>
                    )
        }
        return (
            <ul className="spo-container">
              <li className='spo-offers active' onClick={showBannerWall}>Горячие предложения</li>
                {this.state.offer.map(offer => {
                    return  <SpoCategory key={offer.Value} id={offer.Value} offerText={offer.Text} />
                })}
            </ul>
        )
    }
}
let showBannerWall = (element) => {
  if (element.target.className === "spo-offers") {
  $(".spo-offers.active").removeClass("active");
    element.target.className = "spo-offers active"
  }
  $('.best-offers-container').css("display", "flex");
}

export default SpoCategory;
