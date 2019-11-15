import React, {Component} from 'react';
import {connect} from "react-redux";
import Moment from 'react-moment';

import Rainy from '../../../../../assets/images/rainyWeather.png';
import Clear from '../../../../../assets/images/clearWheather.png';
import Cloud from '../../../../../assets/images/cloudWeather.jpeg';

import Airplane from '../../../../../assets/images/airplane.png';


import {Link} from "react-router-dom";

import {getCity} from "../../../../../redux/actions";


import './weatherCurrent.scss';

const arrDays = [
    'Сегодня', 'Завтра', "3 дня", "10 дней", "2 недели", "Месяц",
];

class WeatherCurrent extends Component {
    componentDidMount() {
        this.props.getCity();
    }

    render() {
        const {city: {data}} = this.props;
        return (
            <div className='weatherCurrent'>
                <div className='infoWeather'>
                    <div className='headerWeather'>
                        <div className='checkCity'><img src={Airplane} alt='airplane'/>
                            <Link to='#'>Запорожье(Мокрая)</Link></div>
                        <Link to='#'>Изменить пункт</Link>
                    </div>
                    <div className='detailedInfo'>
                        <div className='details'>
                            <div className='dateNow'>
                                <Moment format="dd, DD MMM, HH:mm">{new Date()}</Moment>
                            </div>
                            <div className='temperatureDetails'>
                                <div className='temperature'>
                                    {data.temperature}
                                </div>
                                <div className='vieWeather'>
                                    <img
                                        src={data.visibility === 'clear' ? Clear : data.visibility === 'rainy' ? Rainy : Cloud}
                                        alt='visibility'/>
                                    <h4>{data.visibility === 'clear' ? 'Ясно' : data.visibility === 'rainy' ? "Дождливо" : 'Пасмурно'}</h4>
                                </div>
                            </div>
                            <div className='itemDetails'><h3>По ощущению</h3><h3>{data.sensation}</h3></div>
                            <div className='itemDetails'><h3>Ветер</h3><h3>{data.wind}</h3></div>
                            <div className='itemDetails'><h3>Давление </h3><h3>{data.pressure}</h3></div>
                            <div className='itemDetails'><h3>Влажность </h3><h3>{data.humidity}</h3></div>
                            <div className='itemDetails'><h3>Геомагнитная активность </h3><h3>{data.geomagnetic}</h3>
                            </div>
                            <div className='itemDetails'><h3>Температтура воды </h3><h3>{data.temperatureWater}</h3>
                            </div>
                        </div>
                        <div className='hoursWeather'>
                            hoursWeather
                        </div>
                    </div>
                    <div className='daysWeather'>
                        {arrDays.map((day) =>
                            <div className='dayWrapper' key={day}>
                                <Link to='#'>{day}</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }

}


const mapStateToProps = state => {
    return {
        city: state.weatherReducer.city,
    }
};
const mapDispatchToProps = (dispatch) => ({
    getCity: () => dispatch(getCity()),
});

export default WeatherCurrent = connect(mapStateToProps, mapDispatchToProps)(WeatherCurrent);