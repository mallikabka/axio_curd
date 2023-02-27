import React, { Component } from 'react';
import ProductService from '../services/ProductService';
class CreateUser extends Component {
    state = {
        id: "",
        username: "",
        password: "",
        
    }
    addUser = (e) => {
        e.preventDefault();
        let user = {
            id: this.state.id,
            username: this.state.username,
            password: this.state.password,
        }
        ProductService.createUser(user)
           
            .then(() => {
                window.location.href = "/viewall"
            })
    }
    render() {
        return (
            <div className='container'>
                <div className="mb-3">
                    <div className='card'>
                        <div className='card-header'>
                            <h3 style={{ color: 'green' }}><u>Add User</u></h3>
                            <div className='card-body'>
                                <label className="form-label">Enter user Id</label>
                                <input type="text" className="form-control" onChange={(e) => this.setState({ id: e.target.value })} />
                                <label className="form-label">Enter  UserName</label>
                                <input type="text" className='form-control' onChange={(e) => this.setState({ username: e.target.value })} />
                                <label className="form-label">Enter Password</label>
                                <input type="text" className='form-control' onChange={(e) => this.setState({ password: e.target.value })} /><br/>
                                <button className="btn btn-primary" onClick={(e) => this.addUser(e)}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateUser;