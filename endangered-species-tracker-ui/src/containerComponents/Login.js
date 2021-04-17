import React, { Component } from 'react'
import { LoginForm } from '../presentationalComponents/LoginForm'
import { login } from '../redux/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends Component {

    state = {
        username: '',
        password: '', 
        errors: {}
    };

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        if(this.validateForm()) {
            this.props.login(this.state, this.props.history)
        } 
    }

    validateForm = () => {
        let errors = {}
        let formIsValid = true

        if (!this.state.username) {
          formIsValid = false
          errors['username'] = '*Please enter your username'
        }
        if (!this.state.password) {
            formIsValid = false
            errors['password'] = '*Please enter your password'
        }
        this.setState({ errors })
        return formIsValid
    }

    render() {
        return (
            this.props.loggedIn ? 
            <Redirect to="/dashboard"/> :
            <LoginForm 
                username={this.state.username}
                usernameError={this.state.errors.username} 
                password={this.state.password} 
                passwordError={this.state.errors.password} 
                handleOnSubmit={this.handleOnSubmit} 
                handleOnChange={this.handleOnChange}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps, { login })(Login);