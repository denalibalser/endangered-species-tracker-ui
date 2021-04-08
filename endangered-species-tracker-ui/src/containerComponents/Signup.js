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
            <div className="flex h-screen">
                <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
                    <header>
                        <img class="w-20 mx-auto mb-5" alt="Tiger Icon" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
                    </header>

                    <form onSubmit={this.handleOnSubmit}>
                        <div>
                            <label className="block mb-2 text-indigo-500" htmlFor="username">Username</label>
                            <input 
                                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                name="username"
                                onChange={this.handleOnChange} 
                                value={this.state.username} 
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-indigo-500" htmlFor="first_name">First Name</label>
                            <input 
                                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                name="first_name"
                                onChange={this.handleOnChange} 
                                value={this.state.first_name} 
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-indigo-500" htmlFor="last_name">Last Name</label>
                            <input 
                                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                name="last_name"
                                onChange={this.handleOnChange} 
                                value={this.state.last_name} 
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
                            <input 
                                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                name="password"
                                onChange={this.handleOnChange} 
                                value={this.state.password} 
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-indigo-500" htmlFor="password_confirmation">Confirm Password</label>
                            <input 
                                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                name="password_confirmation"
                                onChange={this.handleOnChange} 
                                value={this.state.password_confirmation} 
                                type="text"
                            />
                        </div>
                        <button className="btn" type="submit">Signup</button>            
                    </form>
                </div>
            </div>
        )
    }
}


export default connect(null, { signup })(Signup);