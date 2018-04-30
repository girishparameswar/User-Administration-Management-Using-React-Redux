import React, {Component} from 'react';
import logo from '../logo.svg';
class Home extends Component {

    render() {
        return  <div className="text-center">
                <h1>Welcome to ReactJS App</h1>
                <img src={logo} height="250px" width="250px" className="App-logo" alt="logo" />
                </div>
    }
}
export default Home;