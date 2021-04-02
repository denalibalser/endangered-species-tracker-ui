import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
            <nav id="navbar">
                <ul id="navbar-ul">
                    <li><Link to="/">Home</Link></li>
                    {this.props.loggedIn ? (
                    <>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="#" onClick={() => this.props.logout(this.props.history)}>
                        Logout
                        </Link></li>
                    </>
                    ) : (
                    <>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>
                    )}
                </ul>
            </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

export default withRouter(connect(mapStateToProps, { logout })(Navbar));