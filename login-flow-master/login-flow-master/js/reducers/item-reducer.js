// Takes care of changing the application state
export function itemReducer(currentState = [], action){
	switch(action.type){
		case 'INITIAL_LIST' :
			return currentState.concat(action.payload);
      brack;
		default:
			return currentState;
	}
}
export default itemReducer;
