import React, { Component } from 'react'
import { LoginForm } from '../presentationalComponents/LoginForm'
import { login } from '../redux/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

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
            this.props.loggedIn ? 
            <Redirect to="/dashboard"/> :
            <LoginForm 
                username={this.state.username} 
                password={this.state.password} 
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