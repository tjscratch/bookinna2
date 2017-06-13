import React from 'react';

import { Slogan } from '../Slogan/Slogan.jsx'
import { NavBar } from '../Navbar/NavBar.jsx'
import { SearchForm } from '../SearchForm/SearchForm.jsx'
import { Benefits } from '../Benefits/Benefits.jsx'
import { B2Blogin } from '../Registration/B2Blogin.jsx'


import { getBanner } from './GetBanner.jsx'

export class MainBanner extends React.Component{
    constructor () {
        super();
        this.state = {banner: ''}
    }
    componentDidMount() {
        getBanner().then(results => {
            this.setState({
                // banner:  `url(${results.data.Slider[0].Image}) center/cover no-repeat`
                banner:  `url(http://www.womenzone.org/wp-content/uploads/2016/07/leto-3.jpg) center/cover no-repeat`

            })
        })
    }
    render() {
        return (
            <div className="banner-container" style={{background: this.state.banner}}>
                <div className="search-form-container">
                    <Slogan />
                    <NavBar />
                    <SearchForm />
                </div>
                  <Benefits />
                  <B2Blogin />
            </div>
        )
    }
}
