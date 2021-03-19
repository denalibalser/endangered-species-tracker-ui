import React, { Component } from 'react'

class Signup extends Component {

    state = {
        username: '',
        firstName: '', 
        lastName: '',
        password: '',
        passwordConfirmation: ''
    };

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        console.log(this.state)
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
                    name="firstName"
                    onChange={this.handleOnChange} 
                    value={this.state.firstName} 
                    type="text"
                    />
                    <br />
                    <label>Last Name:</label>
                    <input 
                    name="lastName"
                    onChange={this.handleOnChange} 
                    value={this.state.lastName} 
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
                    name="passwordConfirmation"
                    onChange={this.handleOnChange} 
                    value={this.state.passwordConfirmation} 
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

export default Signup;