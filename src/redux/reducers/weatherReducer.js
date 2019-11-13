const initialState = {
    city: {
        isLoaded: false,
        data: [],
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CITY_WEATHER': {

            return {
                ...state,
                city: {
                    isLoaded: true,
                    data: action.data
                }
            }
        }
        default:
            return state
    }

}