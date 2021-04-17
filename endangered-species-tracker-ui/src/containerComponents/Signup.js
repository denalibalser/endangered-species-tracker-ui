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
            this.props.signup(this.state, this.props.history)
            // this.setState({
            //     username: '',
            //     first_name: '', 
            //     last_name: '', 
            //     password: '',
            //     password_confirmation: '' 
            // })
        } 
    }

    validateForm = () => {
        let errors = {}
        let formIsValid = true

        if(!this.state.username) {
          formIsValid = false
          errors['username'] = '*Please enter your username'
        }
        if(this.state.username) {
            if(!this.state.username.match(/^\w+$/)) {
                formIsValid = false
                errors['username'] = '*Please use alphanumeric characters only'
            }
        }
        if(!this.state.password) {
            formIsValid = false
            errors['password'] = '*Please enter your password'
        }
        if(this.state.password !== this.state.password_confirmation) {
            formIsValid = false 
            errors['password_confirmation'] = '*Password do not match'
        }
        this.setState({ errors })
        return formIsValid
    }

    render() {
        return (
            this.props.loggedIn ? 
            <Redirect to="/dashboard"/> :
            <SignupForm 
                username={this.state.username}
                usernameError={this.state.errors.username} //added
                firstName={this.state.first_name}
                lastName={this.state.last_name}
                password={this.state.password}
                passwordError={this.state.errors.password} //added
                passwordConfirmation={this.state.password_confirmation}
                passwordConfirmationError={this.state.errors.password_confirmation} //added
                handleOnChange={this.handleOnChange}
                handleOnSubmit={this.handleOnSubmit}
            /> 
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps, { signup })(Signup);