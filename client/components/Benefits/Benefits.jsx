import React from 'react';
import './Benefits.css';

export class Benefits extends React.Component {
    render() {
        return (
            <div className="benefits-container">
                <div className="benefit-wrapper">
                    <h2>ВЫГОДА</h2>
                    <span className="dp-benefits">Экономия до 30% за счет<br /> пециальных пакетных цен.<br /> Страховка в подарок</span>
                </div>
                <div className="benefit-wrapper">
                    <h2>СВОБОДА</h2>
                    <span className="dp-benefits">200 стран 670 000 отелей <br />500 авиакомпаний. <br />Сам себе турагент</span>
                </div>
                <div className="benefit-wrapper">
                    <h2>НАДЕЖНОСТЬ</h2>
                    <span className="dp-benefits">Перелет на регулярных рейсах. <br />Моментальная оплата поставщикам.<br /> Гарантия поездки</span>
                </div>

          </div>
        )
    }
}
