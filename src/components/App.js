import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import Create from './Create';
import View from './View';
import add_user from '../actions/add';
import rem_user  from '../actions/remove';
import view_user from '../actions/viewdetails';

class App extends Component {

  state = {
    users_data: null
  };

  componentDidMount() {
    this.setState({
      users_data: this.props.store.getState()
    });
    this.props.store.subscribe(() => {
    this.setState({
      users_data: this.props.store.getState()
    });
  });
  }
  

  getUser = (id) => {
    this.props.store.dispatch(view_user(id));
    /* this.setState((state) => {
      return {
        obj : state.users_data[id]
      }
    }) */
    //console.log(this.state.obj);
  }

createUser = (newUser) => {
  this.props.store.dispatch(add_user(newUser));
 /* this.setState((state)=> {
   return {
     users_data: state.users_data.concat(newUser)
   }
 }); */
}

removeparentElem = (user) => {
  this.props.store.dispatch(rem_user(user));
  console.log("User selected for del: ",rem_user(user));
 /*  this.setState((state) => {
    return {
      users_data: state.users_data.filter((item) => item.username!==user.username)
    }
  }) */
}
  
  render() {
       return(
        <div>
           <nav className="navbar navbar-inverse">
            <div className="fluid-container">
              <div className="navbar-header">
                <ul className="nav navbar-nav">
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/users">Users</Link></li>
                  <li><Link to="/create">Create</Link></li>
                </ul>
              </div>
            </div>  
          </nav>
           <Route path="/home" component={Home} />
           
           <Route path="/users" render={({history}) =>{
             return <Users 
             user = {this.state.users_data} 
             history={history} 
             onRemove = {this.removeparentElem} />
           }}/>

           <Route path="/create" render={({history}) =>{
             return <Create 
             onaddusers = {this.createUser} 
             history={history}/>
           }} />

           <Route path="/view/:id" render={({match}) => {
             return <View 
             onfetch = {this.getUser} 
             onUser = {this.state.obj} 
             match={match} />
           }} />

        </div>
       );
  }
}

export default App;
