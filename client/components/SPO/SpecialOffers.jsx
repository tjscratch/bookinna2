import React from 'react';


const SpecialOffers = (props) => {
  console.log(props.Image)
    return(
           <li className="offer-list" style={{background: `url(${props.Image}) center/cover no-repeat`}}>
            sdfsdfsdfds
            </li>
    )
};

export default SpecialOffers;
