import React, {Component} from 'react';

import {connect} from 'react-redux';

import './header.scss'
import {Link} from "react-router-dom";

import  LinksHeader from './links/linksHeaderContainer';

class Header extends Component {

    render() {
        return (
            <div>
                <div>
                    <Link to='#'>
                        <span>Gis</span>meteo
                    </Link>
                </div>
                <LinksHeader/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {

};

export default Header = connect(mapStateToProps, mapDispatchToProps)(Header);