import React from 'react';

import { getPeriods } from './getPeriods.jsx'
import './SPO.css';

import $ from 'jquery'


class SpoFilters extends React.Component {
    constructor () {
        super();
        this.state = {Period: [], Month: []}

    }
    componentDidMount() {
        getPeriods().then(results => {
            this.setState({
                Period: results.data.Period,
                Month: results.data.Month
            })
        })
    }

   inputLength (event) {
       if (event.target.value > 8) {
           event.target.value = event.target.value.slice(0,8);
       }
};
    render() {
        return (
            <div className="filters-wrapper">
                <div className="spo-filters-container">
                    <div className="spo-filter-block">
                        <select name="tourtime">
                            {this.state.Period.map( (item, key) => {
                                return <option key={key} value={item.Value} label={item.Text}>{item.Text}</option>
                            })}
                        </select>
                        <select  name="tourtime">
                            {this.state.Month.map( (item, key) => {
                                return <option key={key} value={item.Value} label={item.Text}>{item.Text}</option>
                            })}
                        </select>
                        <div className="filter-budget">
                            <input
                                type="number"
                                className="input-text-budget"
                                name="PriceFilter"
                                placeholder="Бюджет"
                                onInput={this.inputLength}
                            />
                            <i className="budget-ruble fa fa-rub"></i>
                        </div>
                    </div>
                    <div className="spo-sort-block">
                        <button className="spo-sort-button">Скидка</button>
                        <button className="spo-sort-button">Лучшие</button>
                        <button className="spo-sort-button">Цена</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SpoFilters;
