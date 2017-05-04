function anotherReducer(currentState = "", action){
	switch(action.type){
		case  'ACTION':
			return 'hi how are you!';
		default :
		return   currentState="another  data..";
	}
}
export default anotherReducer;
