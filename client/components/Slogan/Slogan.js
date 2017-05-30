import React from 'react';

import './Slogan.css';

export class Slogan extends React.Component {
    render() {
        return (
<div className="slogan-container">
    <span className="dp-slogan">ПОИСК ТУРОВ НА РЕГУЛЯРНЫХ РЕЙСА</span>
    <span className="dp-slogan-small">АВИАБИЛЕТ + ОТЕЛЬ = ВМЕСТЕ ВЫГОДНЕЙ</span>
</div>
        )
    }
};
