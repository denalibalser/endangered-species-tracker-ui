import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            <Link to="/">Home</Link>
                        </a>
                        {this.props.loggedIn ? (
                            <>
                                <a href="/dashboard" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                    <Link to="/dashboard">Dashboard</Link>
                                </a>
                                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                    <Link to="#" onClick={() => this.props.logout(this.props.history)}>
                                        Logout
                                    </Link>
                                </a>
                            </>
                        ) : (
                            <>
                                <a href="/signup" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                    <Link to="/signup">Signup</Link>
                                </a>
                                <a href="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                    <Link to="/login">Login</Link>
                                </a>
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
    loggedIn: state.auth.loggedIn,
  };
};

export default withRouter(connect(mapStateToProps, { logout })(Navbar));