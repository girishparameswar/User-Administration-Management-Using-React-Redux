import React, {Component} from 'react';

class View extends Component {

    CurrUser;
    viewUser = (id) => {
        this.props.onfetch(id);
        
    }

    getusers = () => {
        console.log(this.props.onUser);
        // CurrUser = this.props.onUser;
    }

    componentDidMount() {
      // alert(JSON.stringify(this.viewUser(this.props.match.params.id)));
        
    
    }
    


    render() {
        return <div className="panel panel-primary">
                    <div className="panel-header bg-primary">
                        <h1>User</h1>
                    
                    </div>
                    <div className="panel-body">
                        <p>{"No Details" ? "User" : this.props.onUser}</p>
                        <button onClick={()=>this.getusers()}>Get User</button>
                    </div>
                </div>
    }



}

export default View;