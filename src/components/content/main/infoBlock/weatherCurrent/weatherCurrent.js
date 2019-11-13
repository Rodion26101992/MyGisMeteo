import React, {Component} from 'react';
import {connect} from "react-redux";
import {getCity} from "../../../../../redux/actions";
import './weatherCurrent.scss';

class WeatherCurrent extends Component {
    // componentDidMount() {
    //     debugger
    //     this.props.getCity();
    //     debugger
    // }

    componentDidMount() {
        this.props.getCity();
    }

    render() {
        const {city:{data}}=this.props;
        return (
            <div className='weatherCurrent'>
                <div className='infoWeather'>
                    <div className='headerWeather'>Zp</div>
                    <div className='detailedInfo'>
                        <div className='details'>
                            <h3>По ощущунию  <span>{data.sensation}</span></h3>
                            <h3>Ветер <span>{data.wind}</span></h3>
                            <h3>Давление <span>{data.pressure}</span></h3>
                            <h3>Влажность <span>{data.humidity}</span></h3>
                            <h3>Геомагнитная активность <span>{data.geomagnetic}</span></h3>
                            <h3>Температтура воды <span>{data.temperatureWater}</span></h3>
                        </div>
                        <div className='hoursWeather'>
                            hoursWeather
                        </div>
                    </div>
                    <div className='daysWeather'>Zp</div>
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