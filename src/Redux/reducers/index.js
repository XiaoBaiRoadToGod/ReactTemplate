

import { combineReducers } from 'redux';

import { CLICK_ME } from '../actions';

export let initialState = {
    main:{
        buttonText: '默认'
    }
};

let reducers = combineReducers({
    main: (state = {}, action) => {
        switch (action.type) {
            case CLICK_ME:
                return {...state, buttonText: action.payload};
        
            default:
                return state;
        }
    }
})


export default reducers;