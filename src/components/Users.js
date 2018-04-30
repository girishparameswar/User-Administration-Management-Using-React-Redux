import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Users extends Component {

    removeUser = (user) => {
        this.props.onRemove(user);
    }
    render() {

        const users = this.props.user;

        return <table className="table table-light">
                <thead className="thead bg-danger">
                <tr>
                    <th>Username</th>   
                    <th>Location</th>
                    <th>Products Purchased</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
               {      
                  users && users.map((users, index)=> {
                       return <tr key={index}>
                              <td>{users.username}</td>
                              <td>{users.location}</td>
                              <td>{users.products_purchased}</td>
                              <td><button className="btn btn-danger" onClick={()=>this.removeUser(users)}>Remove</button> &nbsp;&nbsp;&nbsp;
                              <Link className="btn btn-primary" to={"/view/"+index}>View</Link></td>
                        </tr>
                   })
               }
               </tbody>
        </table>
    }
}

export default Users;