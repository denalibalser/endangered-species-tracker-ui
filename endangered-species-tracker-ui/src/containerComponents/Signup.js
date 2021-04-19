import React, { Component } from 'react'
import { SignupForm } from '../presentationalComponents/SignupForm'
import { signup } from '../redux/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Signup extends Component {

    state = {
        username: '',
        first_name: '', 
        last_name: '',
        password: '',
        password_confirmation: '', 
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
            const state = {...this.state};
            delete state.errors;
            this.props.signup(state, this.props.history) 
        } 
    }

    validateForm = () => {
        let errors = {}
        let formIsValid = true

        if(!this.state.username) {
          formIsValid = false
          errors['username'] = '*Please enter a username'
        }
        if(!this.state.first_name) {
            formIsValid = false
            errors['firstName'] = '*Please enter a first name'
        }
        if(!this.state.last_name) {
            formIsValid = false
            errors['lastName'] = '*Please enter a last name'
        }
        if(!this.state.password) {
            formIsValid = false
            errors['password'] = '*Please enter your password'
        }
        if(this.state.password !== this.state.password_confirmation) {
            formIsValid = false 
            errors['passwordConfirmation'] = '*Passwords do not match'
        }
        this.setState({ errors })
        return formIsValid
    }

    render() {
        return (
            this.props.loggedIn ? 
            <Redirect to="/dashboard"/> :
            <SignupForm 
                backendErrors={this.props.errors}
                username={this.state.username}
                usernameError={this.state.errors.username} 
                firstName={this.state.first_name}
                firstNameError={this.state.errors.firstName}
                lastName={this.state.last_name}
                lastNameError={this.state.errors.lastName}
                password={this.state.password}
                passwordError={this.state.errors.password} 
                passwordConfirmation={this.state.password_confirmation}
                passwordConfirmationError={this.state.errors.passwordConfirmation} 
                handleOnChange={this.handleOnChange}
                handleOnSubmit={this.handleOnSubmit}
            /> 
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn,
        backendErrors: state.auth.errors
    }
}

export default connect(mapStateToProps, { signup })(Signup);