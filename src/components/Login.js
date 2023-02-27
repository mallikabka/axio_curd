import React, { Component } from 'react';
import ProductService from '../services/ProductService';
class Login extends Component {
    state = {
        username: "",
        password: "",
        users: []
    }
    componentDidMount() {
        ProductService.getusers().then((res) => {
            this.setState({ users: res.data });
        });
    }
    verifyUser =(e)=> {
        e.preventDefault();
        let count = 0
        this.state.users.filter((user) => {
            
            if ((this.state.username == user.username) && (this.state.password == user.password)) {
                window.location.href = "/viewall";
                count++;
            }
         } )
    
        if (count === 0) {
            alert("Invalid Username or password....!!!");
        }
    }
    render() {
        return (
            <div className='container'>
                <h2>Login Form</h2>
                <div>
                    <label className='form-label'>UserName</label>
                    <input className='form-control' type="text" onChange={(e) => {this.setState({username:e.target.value})}}></input>
                </div>
                <div>
                    <label className='form-label'>Password</label>
                    <input className='form-control' type="text"  onChange={(e) =>{ this.setState({password:e.target.value}) }}></input>

                </div><br />
                <button className='btn btn-primary' type="submit" onClick={(e) => this.verifyUser(e)}>Login</button>


            </div>
        )
    }
}
export default Login;