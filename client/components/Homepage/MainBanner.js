import React from 'react';

import { Slogan } from '../Slogan/Slogan'
import { NavBar } from '../Navbar/NavBar'
import { SearchForm } from '../SearchForm/SearchForm'
import { Benefits } from '../Benefits/Benefits'
import { B2Blogin } from '../Registration/B2Blogin'


import { getBanner } from './GetBanner'

export class MainBanner extends React.Component{
    constructor () {
        super();
        this.state = {banner: ''}
    }
    componentDidMount() {
        getBanner().then(results => {
            this.setState({
                banner:  `url(${results.data.Slider[0].Image}) center/cover no-repeat`
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