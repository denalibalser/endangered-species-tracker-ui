import React, { Component } from 'react' //MAYBE SWITCH THIS TO A FUNCTIONAL COMPONENT
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/authActions'
import { connect } from 'react-redux'

class Navbar extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/signup'>Signup</Link>
                <Link to='/login'>Login</Link>
                <Link to='' onClick={() => this.props.logout()}>Logout</Link>

            </div>
        )
    }
}

export default connect(null, { logout })(Navbar); //will eventually need to connect to state