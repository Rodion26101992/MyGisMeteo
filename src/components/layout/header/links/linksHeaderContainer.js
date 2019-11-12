import React, {Component} from 'react';

import {connect} from 'react-redux';

import './linksHeader.scss';
import {Link} from "react-router-dom";

class LinksHeader extends Component {

    render() {
        return (
            <div className='linksContainer'>
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

export default LinksHeader = connect(mapStateToProps, mapDispatchToProps)(LinksHeader);