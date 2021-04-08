import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                            <Link to="/" 
                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" 
                                loggedIn={this.props.loggedIn}>
                                Home
                            </Link>
                        {this.props.loggedIn ? (
                            <>
                                <Link to="/dashboard" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Dashboard</Link>
                                <Link to="#" 
                                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                                    onClick={() => this.props.logout(this.props.history)}>
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/signup" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Signup</Link>
                                <Link to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Login</Link>
                            </>
                        )}
                    </div>
                </div>  
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

export default withRouter(connect(mapStateToProps, { logout })(Navbar));