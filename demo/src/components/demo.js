import React, { Component } from 'react';
import { connect } from 'react-redux';
import someReducer from '../reducers'

class Demo extends Component {
  render() {
    console.log("this.pops : ",this.props);
    var str=this.props.data;
    var str1=this.props.another;
    return (
      <div className="App">
        <p>some data:{str}</p>
        <p>some data:{str1}</p>
      </div>
    );
  }
}


export default connect(	function ({someData}){
  console.log(someData);
return ({data : someData});
})(Demo);
