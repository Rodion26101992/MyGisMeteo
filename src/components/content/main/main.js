import React from 'react';
import './main.scss';
import {InfoBlock} from './infoBlock/infoBlock';
export function Main() {
    return (
        <div className='main'>
         <InfoBlock/>
            <div className='advertising'>
                advertising
            </div>
        </div>
    )
}
