import React, { Component } from 'react'
import { signup } from '../redux/actions/authActions'
import { connect } from 'react-redux'

class Signup extends Component {

    state = {
        username: '',
        first_name: '', 
        last_name: '',
        password: '',
        password_confirmation: ''
    };

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.signup(this.state)
        this.setState({
            username: '',
            first_name: '', 
            last_name: '', 
            password: '',
            password_confirmation: '' 
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Username:</label>
                    <input 
                    name="username"
                    onChange={this.handleOnChange} 
                    value={this.state.username} 
                    type="text"
                    />
                    <br />
                    <label>First Name:</label>
                    <input 
                    name="first_name"
                    onChange={this.handleOnChange} 
                    value={this.state.first_name} 
                    type="text"
                    />
                    <br />
                    <label>Last Name:</label>
                    <input 
                    name="last_name"
                    onChange={this.handleOnChange} 
                    value={this.state.last_name} 
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
                    <label>Confirm Password:</label>
                    <input 
                    name="password_confirmation"
                    onChange={this.handleOnChange} 
                    value={this.state.password_confirmation} 
                    type="text"
                    />
                    <br />
                    <button type="submit">Signup</button>
                    <br />
                </form>
            </div>
        )
    }
}


export default connect(null, { signup })(Signup);