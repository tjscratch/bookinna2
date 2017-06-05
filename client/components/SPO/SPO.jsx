import React from 'react';

import './SPO.css';

import SpoCategory from './SpoCategory.jsx'
import SpoFilters from './SpoFilters.jsx'

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
