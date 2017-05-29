import React from 'react';

import $ from 'jquery'

import { getSpo } from './GetSpo'

export class SpoCategory extends React.Component {
    constructor (props) {
        super(props);
        this.state = {offer: []}
    }
    componentDidMount() {
        getSpo().then(results => {
            results.data.Categories.length =8;
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
                $('.filters-wrapper').slideToggle(600).css("display", "flex");   
            };
            return(
                    <li className={props.id == 1 ? 'spo-offers active': 'spo-offers'} onClick={showFilters}>{props.offerText}</li>

            )
        }
        return (
            <ul className="spo-container">
                {this.state.offer.map(offer => {
                    return  <SpoCategory key={offer.Value} id={offer.Value} offerText={offer.Text} />
                })}
            </ul>
        )
    }
}

export default SpoCategory;