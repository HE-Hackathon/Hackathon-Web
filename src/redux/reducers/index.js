import login from './login';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    login : login
});

export default allReducer;

