import { configureStore } from "@reduxjs/toolkit";

const defaultState = {
    arrayMes: []
}

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case 'SET_ARRAYMES':
            return {...state, arrayMes: action.payload}
        default:
            return state
    }
}

export default configureStore({
    reducer: reducer
})