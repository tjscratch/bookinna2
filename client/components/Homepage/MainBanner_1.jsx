import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './homepage.css';
import { Slogan } from '../Slogan/Slogan.jsx'
import { NavBar } from '../Navbar/NavBar.jsx'
import { SearchForm } from '../SearchForm/SearchForm.jsx'
import { Benefits } from '../Benefits/Benefits.jsx'
import { B2Blogin } from '../Registration/B2Blogin.jsx'


import { getBanner } from './GetBanner.jsx'

class MainBanner_1 extends Component{
    createListItems() {
        console.log(this.props.users)
    }
    render() {
        return (
            <ul className="her">
                {this.createListItems()}
            </ul>
        )
    }
}
function mapStateToProps(state) {
     return {
         users: state.users.Data
     };
}

export default connect(mapStateToProps)(MainBanner_1);
