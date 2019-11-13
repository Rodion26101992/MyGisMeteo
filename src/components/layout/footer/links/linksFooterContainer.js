import React, {Component} from 'react';

import {connect} from 'react-redux';

import './linksFooter.scss';
import {Link} from "react-router-dom";

const links = ['Погода','Новости','Карты','Информеры','Приложение'];

class LinksFooter extends Component {

    render() {
        return (
            <div>
                <Link to='#'>
                    Погода
                </Link>
                <Link to='#'>
                    Новости
                </Link>
                <Link to='#'>
                    Карты
                </Link>
                <Link to='#'>
                    Информеры
                </Link>
                <Link to='#'>
                    Приложение
                </Link>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {

};

export default LinksFooter = connect(mapStateToProps, mapDispatchToProps)(LinksFooter);