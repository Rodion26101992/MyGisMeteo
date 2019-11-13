import React, {Component} from 'react';

import {connect} from 'react-redux';

import './header.scss';

import {Link} from "react-router-dom";

import {LinksHeader} from './links/linksHeaderContainer';
import {FecaBooklink} from "./faceBook/faceBookContainer";

class Header extends Component {

    render() {
        return (
            <div className='navContainer'>
                <div className='logoLinkContainer'>
                    <Link to='#'>
                        <span>Gis</span>meteo
                    </Link>
                </div>
                <LinksHeader/>
                <FecaBooklink/>
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