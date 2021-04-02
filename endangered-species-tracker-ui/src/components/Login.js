import React, { Component } from 'react'
import { login } from '../redux/actions/authActions'
import { connect } from 'react-redux'

class Login extends Component {

    state = {
        username: '',
        password: ''
    };

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.login(this.state, this.props.history)
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.handleOnSubmit}>
                    <label>Username:</label>
                    <input 
                    name="username"
                    onChange={this.handleOnChange} 
                    value={this.state.username} 
                    type="text"
                    />
                    <br />
                    <label>Password:</label>
                    <input 
                    name="password"
                    onChange={this.handleOnChange} 
                    value={this.state.password} 
                    type="text"
                    />
                    <br />
                    <button className="btn" type="submit">Login</button>
                    <br />
                </form>
            </div>
        )
    }
}

export default connect(null, { login })(Login);