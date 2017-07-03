import React from 'react';
import $ from 'jquery';

import { B2Blogin } from '../Registration/B2Blogin.jsx'
import './Header.css';

let hostName = location.host;
let b2bUrl = (hostName = "http://localhost:3000/") ? "http://b2b.test.inna.ru" : (hostName= "http://test.inna.ru/") ? "http://b2b.test.inna.ru" : "Бой";


export class Header extends React.Component {
    render() {
        return (
            <header className="main-header">
                <div className="header-container">
                    <div className="left-header-content">
                    <a href="/#/" className="innatour-logo">
                        <i className="icon-logo"></i>
                    </a>
                    <span className="inna-phone">+7 495 742-1212</span>
                    </div>
                    <div className="right-header-content">
                            <i className="icon-login"></i>
                            <span className="b2b-login" onClick={openRegistration}>Личный кабинет</span>
                        {/*<a href={b2bUrl} className="b2b-login">
                            <i className="icon-login"></i>
                            <span className="b2b-login" onClick={openRegistration}>Вход</span>
                        </a>*/}
                        {/*<i className="icon-menu"></i>*/}
                        <div id="burger-container" onClick={openBurgerMenu}>
                            <div id="burger">
                                <span>&nbsp;</span>
                                <span>&nbsp;</span>
                                <span>&nbsp;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
};

let openBurgerMenu = () =>{
    $("#burger-container").toggleClass("open");
};
let openRegistration = () => {
    $('.black-wrapper').css("display", "block");
    $('.login-form-container').slideToggle(300).css("display", "block");
}
