import {
    CHANGE_SEARCH_FIELDS,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';


const intialStateSearch = {
    searchField: ''
}

const intialStateRobots = {
    robots: [],
    ispending: false,
    error: ''
}

export const searchRobots = (state = intialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELDS:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}



export const requestRobots = (state = intialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { ispending: true });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, ispending: false });
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, ispending: false });
        default:
            return state;
    }
}