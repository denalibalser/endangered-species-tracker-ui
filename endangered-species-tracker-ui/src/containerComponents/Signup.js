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
        password_confirmation: ''
    };

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.signup(this.state, this.props.history)
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
            this.props.loggedIn ? 
            <Redirect to="/dashboard"/> :
            <SignupForm 
                username={this.state.username}
                firstName={this.state.first_name}
                lastName={this.state.last_name}
                password={this.state.password}
                passwordConfirmation={this.state.password_confirmation}
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