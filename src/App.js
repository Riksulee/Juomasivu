import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Details from './Components/Details'
import Paasivu from './Components/Paasivu'
import Juomat from './Components/Juomat'
import Juoma from './Components/Juoma'
import './App.css';
import NotFound from './Components/NotFound';
import Lisaauusi from './Components/Lisaauusi';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav id="Lin">
            <Link id="Lin1" to="/">Etusivu</Link>
            <Link id="Lin1" to="/juomat">Juomat</Link>
          </nav>
          
          <Switch>
            <Route exact path="/home" component={Paasivu} />
            <Route exact path="/juomat" component={Juomat} />
            <Route exact path="/uusijuoma" component={Lisaauusi} />
            <Route exact path="/details/:id" component={Details} />
            <Redirect exact from="/" to="/home" />
            <Route component={NotFound}></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
