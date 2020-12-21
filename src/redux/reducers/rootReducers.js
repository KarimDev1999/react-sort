import { combineReducers } from 'redux';
import workers from './workers';


const rootReducer = combineReducers({
    workers,
})

export default rootReducer;