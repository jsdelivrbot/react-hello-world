import {FETCH_WEATHER} from '../actions/index'

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state]; // es6 syntax -> [city, city, city, ...]
            // return state.concat([action.payload.data]); - almost the same
            // concat instead of push - we don't manipulate state, we create new one (it prevents many errors)
    }

    return state;
}