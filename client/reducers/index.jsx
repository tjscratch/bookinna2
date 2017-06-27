import {combineReducers} from 'redux';
import UserReducer from './reducer-users.jsx';
import ActiveUserReducer from './reducer-active-user.jsx';



const allReducers = combineReducers({
    users: UserReducer,
});

export default allReducers;