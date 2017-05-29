import React from 'react';

import './SPO.css';

import SpoCategory from './SpoCategory'
import SpoFilters from './SpoFilters'

export class SPO extends React.Component {
    render() {
        return (
           <div className="spo-categories">
               <SpoCategory />
               <SpoFilters />
           </div>
        )
    }
}