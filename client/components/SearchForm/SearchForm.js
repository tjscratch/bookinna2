import React from 'react';
import './SearchForm.css';

import { getLocation} from './GetLocation'


export class SearchForm extends React.Component {
    constructor () {
        super();
        this.state = {cityFrom: '', cityTo:'Куда: Париж, Франция', DateTo: this.getDateTo(), DateBack: this.getDateBack()}

    }
    componentDidMount() {
        getLocation().then(results => {
            this.setState({
                cityFrom: `${results.data.city}, ${results.data.country}`
            })
        })
    }
    selectText (event) {
        event.target.select();

    };
        onChangeHandler (e) {
            this.setState({[e.target.name]: e.target.value});
        };
        getDateTo () {
           let months = ['ян', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
           let weekDay = [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
           let date = new Date();
           let currentDate =`${date.getDate()} ${months[date.getMonth()]}, ${weekDay[date.getDay()]}`;
           let week = new Date(date.setDate(date.getDate() + 7));
           let inWeek = `${week.getDate()} ${months[week.getMonth()]}, ${weekDay[week.getDay()]}`;
            return `${currentDate}`
           // return `${currentDate} \u2013 ${inWeek}`
        };
    getDateBack () {
        let months = ['ян', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
        let weekDay = [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        let date = new Date();
        let currentDate =`${date.getDate()} ${months[date.getMonth()]}, ${weekDay[date.getDay()]}`;
        let week = new Date(date.setDate(date.getDate() + 7));
        let inWeek = `${week.getDate()} ${months[week.getMonth()]}, ${weekDay[week.getDay()]}`;
        return `${inWeek}`
        // return `${currentDate} \u2013 ${inWeek}`
    };

    render() {
        return (
            <form className="search-form">
                <input
                    type="text"
                    className="input_text"
                    name="cityFrom"
                    onClick={this.selectText}
                    onChange={this.onChangeHandler}
                    value={this.state.cityFrom}
                    placeholder="Откуда"
                    autoFocus="autoFocus"
                />
                <input
                    type="text"
                    className="input_text"
                    name="cityTo"
                    placeholder="Куда"
                    value={this.state.cityTo}
                    onClick={this.selectText}
                    onChange={this.onChangeHandler}
                />
                <input
                    type="text"
                    className="input_text icon-calendar"
                    placeholder={this.state.DateTo}
                    value="31 сентября, Вс"
                    readOnly
                />
                <input
                    type="text"
                    className="input_text icon-calendar"
                    placeholder={this.state.DateBack}
                    value="31 сентября, Вс"
                    readOnly
                />
                {/*<input type="text" autoComplete="off" className="input_text" placeholder="Обратно" value=""/>*/}
                <input type="text"
                       className="input_text passengers-flightclass"
                       placeholder="2 человека, эконом"
                       value=""
                       onChange={this.onChangeHandler}
                       readOnly
                />
                {/*<input type="text" autoComplete="off" className="input_text" placeholder="Эконом" value=""/>*/}
                <button className="search-submit" type="submit">Найти</button>
            </form>
        )
    }
};