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
                banner:  `url(http://www.kefaloniapress.gr/wp-content/uploads/2016/10/%CE%9A%CE%91%CE%A4%CE%91%CE%99%CE%93%CE%99%CE%94%CE%95%CE%A3-%CE%91%CE%9D%CE%95%CE%9C%CE%9F%CE%99.jpg) center/cover no-repeat`

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
