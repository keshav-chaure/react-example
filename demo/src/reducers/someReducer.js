function someReducer(currentState = "", action){
	switch(action.type){
		case  'ACTION':
			return 'hi how are you!';
		default :
			return currentState="some Data ..";
	}
}
export default someReducer;
