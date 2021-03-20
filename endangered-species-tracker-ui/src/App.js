import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  Home  from './components/Home'
import  Dashboard  from './components/Dashboard'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { checkLoggedIn } from './redux/actions/authActions'
import { connect } from 'react-redux'


class App extends React.Component {

  componentDidMount() {
    this.props.checkLoggedIn()
  }

  checkLoginStatus = () => {
    
  }

  render() {
    return (
      <div className="App">
        <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} /> {/* removed 'exact from route path */}
            <Route path="/signup" component={Signup} /> {/* removed 'exact from route path */}
            <Route path="/login" component={Login} />

          </Switch>
        </Router>
      </div>
    );
  }

  }
  

export default connect(null, { checkLoggedIn })(App);
