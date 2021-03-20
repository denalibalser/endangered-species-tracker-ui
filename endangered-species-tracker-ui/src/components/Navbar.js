import React, { Component } from 'react' //MAYBE SWITCH THIS TO A FUNCTIONAL COMPONENT
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/authActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                {this.props.loggedIn ? (
                    <>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/login' onClick={() => this.props.logout(this.props.history)}>Logout</Link>
                    </> 
                ): (
                    <>
                    <Link to='/signup'>Signup</Link>
                    <Link to='#'>Login</Link>
                    </>
                )} 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default withRouter(connect(mapStateToProps, { logout })(Navbar)); //will eventually need to connect to state