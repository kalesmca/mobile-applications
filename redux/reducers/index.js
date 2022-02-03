import {combineReducers} from 'redux';
import customers from './customers';
import productReducer from './products';


const rootReducer = combineReducers({
    customers
})

export default rootReducer;

