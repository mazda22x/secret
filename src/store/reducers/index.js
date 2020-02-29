import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

const app = handleActions({
    'gg': (state, actions) => ({...state}),
}, null)

export const rootReducer = combineReducers({app});