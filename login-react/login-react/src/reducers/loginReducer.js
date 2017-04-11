function loginReducer(currentState = [], action){
	switch(action.type){
		case 'INITIAL_LIST' :
			return currentState.concat(action.payload);
		case 'ADD_NEW':
			var newBug = action.payload;
			return currentState.concat([newBug]);

		case 'TOGGLE':
			var toggledBug = action.payload;
			return currentState.map(bug =>
				bug.id === toggledBug.id ? toggledBug : bug
			);
		case 'REMOVE_CLOSED':
			return currentState.filter(bug => !bug.isClosed);
		default:
			return currentState;
	}
}
export default loginReducer;
