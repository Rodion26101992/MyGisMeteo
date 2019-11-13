import React, {Component} from 'react';
import {connect} from "react-redux";

import {Main} from "./main/main";
import './content.scss';

class Content extends Component {

    render() {
        return (
            <section className='content'>
                <nav className='subnav'></nav>
                <Main/>
            </section>
        )
    }

}


const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {

};

export default Content = connect(mapStateToProps, mapDispatchToProps)(Content);