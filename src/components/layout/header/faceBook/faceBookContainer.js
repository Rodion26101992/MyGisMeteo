import React from 'react';
import {Link} from "react-router-dom";

import "./faceBook.scss";

export function FecaBooklink() {

    return (
        <div className='wrapper'>
            <div className="faceBookContainer">
                <Link to='https://www.facebook.com/gismeteo.ua/'>Мы в FaceBook</Link>
                подписывайтесь, ставте лайки
            </div>
            <select>
                <option value="RU">RU</option>
                <option value="UA">UA</option>
            </select>
        </div>
    )
}