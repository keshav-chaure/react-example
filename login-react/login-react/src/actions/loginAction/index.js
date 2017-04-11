export function checkUser(dispatch){
	return function (u) {
		console.log(u);

	}

}

/*
export function getAll(dispatch){
	return function(){
		fetch('http://localhost:3001/bugs')
			.then(response => response.json())
			.then(bugs => dispatch({ type : 'INITIAL_LIST', payload : bugs}));
	}
}

export function addNew(dispatch){
	return function(bugName){
		var headers = new Headers();
		headers.append('content-type', 'application/json');
		var newBugData = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		fetch('http://localhost:3001/bugs', {
			method : 'POST',
			headers : headers,
			body : JSON.stringify(newBugData)
		})
		.then(response => response.json())
		.then(newBug => dispatch({ type : 'ADD_NEW', payload : newBug }));
    }
}

export function toggle(dispatch){
	return function(bug){
		var headers = new Headers();
		headers.append('content-type', 'application/json');
		var toggleData = {
			isClosed : !bug.isClosed
		};
		fetch(`http://localhost:3001/bugs/${bug.id}`, {
			method : 'PATCH',
			headers : headers,
			body : JSON.stringify(toggleData)
		})
		.then(response => response.json())
		.then(toggledBug => dispatch({ type : 'TOGGLE', payload : toggledBug }));

   	}
}

export function removeClosed(){
	return function(){
		return { type : 'REMOVE_CLOSED'};
	}
}
*/
