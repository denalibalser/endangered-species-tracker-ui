import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  Home  from './presentationalComponents/Home'
import  Dashboard  from './containerComponents/Dashboard'
import Signup from './containerComponents/Signup'
import Login from './containerComponents/Login'
import Navbar from './containerComponents/Navbar'
import { checkLoggedIn } from './redux/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import Error from './presentationalComponents/Error'

//MAYBE ADD COMPONENTWILLUNMOUNT TO CLEAR STORE'S STATE WHEN USER LOGS OUT 

class App extends Component {

  state = { 
    loading: true
  }

  toggleLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }

  componentDidMount() {
    this.props.checkLoggedIn(this.toggleLoading)
  }

  render() {
    if(this.state.loading){ return <h1>Loading...</h1>} 
    return (
      <div className="App">
        <Router>
        <Navbar/>
          <Switch> 
            <Route exact path="/" 
              render={(props) => (
                <Home {...props} loggedIn={this.props.loggedIn} />
              )} />
            <Route
              path="/dashboard"
              render={(props) => {
                if (this.props.loggedIn) {
                  return <Dashboard {...props} />;
                } else {
                  return (<Redirect to="/login" />);
                }
              }}
            />
            <Route path="/signup" component={Signup} /> 
            <Route path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};
  
export default connect(mapStateToProps, { checkLoggedIn })(App); 
