import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  Home  from './components/Home'
import  Dashboard  from './components/Dashboard'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { checkLoggedIn } from './redux/actions/authActions'

import { fetchAllAnimals } from './redux/actions/animalActions' //added this

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

class App extends Component {

  state = { //can move all of this loading logic to loading reducer so it can be reused
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
    if(this.state.loading){ return <h1>Loading...</h1>} //can pull in loading spinner library and render here
    return (
      <div className="App">
        <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" //use props.loggedIn to render different info on Home page here
            component={Home} />
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
            <Route path="/signup" component={Signup} /> {/* removed 'exact from route path */}
            <Route path="/login" component={Login} />

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
