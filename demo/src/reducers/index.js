
import someReducer from './someReducer';
import anotherReducer from './anotherReducer';
import { combineReducers } from 'redux';

export default combineReducers({
	someData : someReducer,
	anotherData : anotherReducer
});
