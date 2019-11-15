import React from 'react';


import './linksHeader.scss';
import {Link} from "react-router-dom";

const links = ['Погода', 'Новости', 'Карты', 'Информеры', 'Приложение'];

export function LinksHeader() {
    return (<div className='linksContainer'>
        {links.map((link) => <Link to='#' key={link}>{link}</Link>)}
    </div>)
}
