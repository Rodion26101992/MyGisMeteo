import {GET_CITY_WEATHER} from '../constants/index';

const city = {
    sensation: '+8',
    wind: '5 м/с,В',
    pressure: '759 мм рт. ст.',
    humidity: '87 %',
    geomagnetic: '1 балл',
    temperatureWater: '+10,7',
};

export const getCityData = city => ({
    type: GET_CITY_WEATHER,
    data: city,
});


// export const getCity = () => ({
//     return(dispatch) {
//         dispatch(getCityData(city))
//     }
// });


export const getCity = () => {
    return(dispatch) => {
        dispatch(getCityData(city))
    }
};