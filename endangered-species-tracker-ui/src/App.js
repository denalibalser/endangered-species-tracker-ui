import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  Home  from './components/Home'
import  Dashboard  from './components/Dashboard'
import Signup from './components/Signup'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} /> {/* removed 'exact from route path */}
            <Route path="/signup" component={Signup} /> {/* removed 'exact from route path */}

          </Switch>
        </Router>
      </div>
    );
  }

  }
  

export default App;