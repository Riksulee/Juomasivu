import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Oluet from './Oluet'
import Viinit from './Viinit'
import Viskit from './Viskit'
import Paasivu from './Paasivu'
import Juomat from './Juomat'
import './App.css';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div>


          <nav id="Lin">

            <Link id="Lin1" to="/">Pääsivu</Link>
            <Link id="Lin1" to="/juomat">Juomat</Link>
            <Link id="Lin1" to="/oluet">Oluet</Link>
            <Link id="Lin1" to="/viinit">Viinit</Link>
            <Link id="Lin1" to="/viskit">Viskit</Link>
          </nav>
          <Switch>
            <Route exact path="/home" component={Paasivu} />
            <Route exact path="/juomat" component={Juomat} />
            <Route exact path="/oluet" component={Oluet} />
            <Route exact path="/viinit" component={Viinit} />
            <Route exact path="/viskit" component={Viskit} />
            <Redirect exact from="/" to="/home" />
            <Route component={NotFound}></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
