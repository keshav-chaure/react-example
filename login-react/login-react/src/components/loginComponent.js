import React , { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

import * as actions from '../actions/loginAction';
console.log("actions : ",actions);


class Login extends Component{
	constructor(){
		super();

	}
	componentDidMount(){
	//to load when the compnonet will mount
	//	this.props.getAll();
	}
	isValid(){
		console.log("isvalid");
		var name="keshav";
		this.props.checkUser(name);
	}
	render(){
		console.log(this.props);
	//	var bugs = this.props.bugs;
		return (
			<div>
        <input type="text" ref="username" placeholder="enter username here" />
        <input type="text" ref="password" placeholder="enter password here" />
        <input type="button" value="Submit" onClick={this.props.checkUser} />
			</div>
		)
	}
}


//React-Redux
/*function mapStateToProps(state){
	return {
		bugs : state.bugsData
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(bugActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);*/

function getActionCreators(actions, dispatch){
	var resultActions = {};
	for(var key in actions){
		console.log("key :",key);
		console.log("actions[key]  arry :",actions[key]);
		resultActions[key] = actions[key](dispatch);
	}
	console.log('resultActions =', resultActions);
	return resultActions;
}


export default connect(
	({loginData}) => ({login : loginData}),
	(dispatch) => getActionCreators(actions, dispatch)
)(Login);
