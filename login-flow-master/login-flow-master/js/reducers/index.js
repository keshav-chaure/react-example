import { combineReducers } from 'redux'
import { homeReducer } from './home-reducers';
import { itemReducer } from './item-reducer';



export default combineReducers({
	loginData : homeReducer,
	itemData : itemReducer
});
