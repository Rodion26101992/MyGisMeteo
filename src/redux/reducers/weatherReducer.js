const initialState = {
    Zp: {
        sensation: '',
        wind: '',
        pressure: '',
        humidity: '',
        geomagnetic: '',
        temperatureWater: '',
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case '': {
            return {}
        }
        default:
            return state
    }

}