/*
 * HomePage
 *
 * The Dashboard is only visible to logged in users
 * Route: /dashboard
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
   console.log("props data in dash2: ",this.props.data.username);
    //  console.log("Dashboard : ",this.props.data.username);
    //  var {fromState} = this.props.data;
  		//console.dir(store);

  //const {fromState}=this.props.data;
  //  console.log("formState ",fromState);
    return (
      <article>
        <section className="text-section">
        <h5>Welcome:</h5>
        <InputAction></InputAction>
       <List></List>
        </section>
      </article>
    );
  }
}

class InputAction extends Component{

    render(){
        return (
            <div>
                <div className="input-action">
                    <Search></Search>
                    <Add></Add>
                </div>
            </div>

        )
    }
}

class Search extends Component{
    render(){
        return (
            <div>
            <input type="text" />
            <input type="button" value="Search" ref="search"  name="search" />
            </div>
        )
    }
}


class Add extends Component{
    render(){
        return (
            <div>
            <input type="button" value="Add New" ref="add_new" name="add_name" className="class_add_name" />
            </div>
        )
    }
}
class List extends Component{
    render(){

        return(
             <div className="listItem">
                <h3>some unique propety for this content</h3>
                <h4>some unique propety for this content</h4>
                <h5>some unique propety for this content</h5>
                <ItemOperation data={this.props.data}></ItemOperation>
            </div>
        )
    }
}
class ItemOperation extends Component{
    render(){
              return(
            <div>
                <a href="#" className="operation">Edit</a>
                <a href="#"  className="operation">Remove</a>
                <a href="#"  className="operation">Toggle</a>
            </div>
        )
    }
}


// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Dashboard);
