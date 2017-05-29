import React from 'react';
import './NavBar.css';
// import { Link } from 'react-router-dom'
import $ from 'jquery';

let addActive = () => {
    let link = window.location.pathname;
    $('.navbar-menu li.active').removeClass('active');
    $('.navbar-menu li a[href="'+link+'"]').parent().addClass('active');
};
export class NavBar extends React.Component {
    render() {
        return (
            <section className="navbar">
                <ul className="navbar-menu" onClick={addActive}>
                    <li className="active">
                        <a href="/">Перелет + Отель</a>
                    </li>
                    <li>
                        <a href="/tours">Туры</a>
                    </li>
                    <li>
                        <a href="/avia">Авибилеты</a>
                    </li>
                    <li>
                        <a href="/hotels">Отели</a>
                    </li>
                </ul>
            </section>
        )
    }
};