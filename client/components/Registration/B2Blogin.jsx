import React from 'react';
import './LoginForm.css';
import $ from 'jquery';

export class B2Blogin extends React.Component {
    render() {
        return (
            <div className="black-wrapper">
                <div className="login-form-container">
                    <form className="login-form">
                        <i className="icon-close" onClick={closeRegistration}/>
                        <div className="input-container">
                            <h1>Личный кабинет</h1>
                            <input
                                type="email"
                                name="email"
                                className="login-input"
                                placeholder="E-mail адрес"
                                autoFocus="autoFocus"
                            />
                            <input
                                type="password"
                                name="password"
                                className="login-input"
                                placeholder="Пароль"
                            />
                            <div className="remember-me">
                                <span className="remember-me-check"></span>
                                <label>Запомнить меня</label>
                            </div>
                            <button className="login-submit" type="submit">ВОЙТИ</button>
                        </div>
                        <div className="login-help-container">
                            <div className="login-help">
                                <span>Помощь:</span>
                                <a href="">Не могу зайти, я забыл свой логин/пароль</a>
                            </div>
                            <div className="login-help">
                                <span>Еще не зарегистрировались?</span>
                                <a href="">Регистрация агентства</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

let closeRegistration = () => {
    $('.login-form-container').css("display", "none");
};