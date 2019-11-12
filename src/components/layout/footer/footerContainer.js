import React, {Component} from 'react';

import {connect} from 'react-redux';

import './footer.scss';

import {Link} from "react-router-dom";

import LinksFooter from './links/linksFooterContainer';

class Footer extends Component {

    render() {
        return (
            <div>
                Footer
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {

};

export default Footer = connect(mapStateToProps, mapDispatchToProps)(Footer);