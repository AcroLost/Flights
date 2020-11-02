import {
    CHANGE_FAVOURITE, REQUEST_FLIGHTS, SET_FLIGHTS,
    SET_FLIGHTS_ID, SET_PLACES, UPDATE_LOADING
} from "./constants";

const initialState = {
    flights: [],
    places: [],
    loading: false
}

const flightReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_FLIGHTS: {
            return { ...state, flights: [...state.flights, ...action.flights] }
        }
        case SET_FLIGHTS_ID: {
            let id = 1;
            return {
                ...state, flights: state.flights.map(item => {
                    return { ...item, checked: false, id: id++ }
                })
            }
        }

        case SET_PLACES: {
            return { ...state, places: action.places }
        }

        case CHANGE_FAVOURITE:
            return {
                ...state,
                flights: state.flights.map(item => {
                    if (item.id === action.id) {
                        return { ...item, checked: !item.checked }
                    }
                    return item
                })
            }

        case UPDATE_LOADING:
            return {
                ...state,
                loading: action.loading
            }

        default:
            return state;

    }
}

export const changeFavouriteAC = (id) => {
    return { type: CHANGE_FAVOURITE, id }
}

export const updateLoadingAC = (loading) => {
    return { type: UPDATE_LOADING, loading }
}

export const setFlightsAC = (flights) => {
    return { type: SET_FLIGHTS, flights }
}
export function setFlights() {
    return { type: REQUEST_FLIGHTS }
}
export const setFlightsIdAC = () => {
    return { type: SET_FLIGHTS_ID }
}

export const setPlacesAC = (places) => {
    return { type: SET_PLACES, places }
}

export const setLoadingAC = (loading) => {
    return { type: UPDATE_LOADING, loading }
}

export default flightReducer;