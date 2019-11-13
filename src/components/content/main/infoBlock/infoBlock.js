import React from 'react';

import './infoBlock.scss';

import WeatherCurrent from './weatherCurrent/weatherCurrent';

export function InfoBlock() {
    return (
        <div className='infoBlock'>
            <WeatherCurrent/>
        </div>
    )
}
