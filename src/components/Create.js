import React, {Component} from 'react';
import serializeForm from 'form-serialize';

class Create extends Component {

    createUser = (event) => {
        //event.preventDefault();
         console.log(event);
         console.log('Create button clicked!!');
         console.log(event.target);
         this.props.onaddusers(serializeForm(event.target, {hash:true}));
         this.props.history.push('/users');
         //console.log(this.props.history.push('/list'));

     } 

    render() {
        return <div>
                <h1>Create Form</h1>
                <hr/>
                <form className="form-inline" onSubmit={this.createUser}>
                    <input className="form-control" name="username" type="username" type="text" placeholder="Username" /><br/><br/>
                    <input className="form-control" name="location" type="location" type="text" placeholder="Location" /><br/><br/>
                    <button className="btn btn-success" type="submit">Create User</button><br/>
                </form>
                </div>
    }
  
}

export default Create;