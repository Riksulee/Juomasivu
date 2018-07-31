import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';
// import Oluet from './Oluet'
// import Viinit from './Viinit'
// import Viskit from './Viskit'
import Details from './Details'
import Paasivu from './Paasivu'
import Juomat from './Juomat'
import Juoma from './Juoma'
import './App.css';
import NotFound from './NotFound';

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
    <Route exact path="/home" component={Paasivu}/> 
    <Route path="/juomat" component={Juomat}/> 
    <Route path="/details" component={Details}/> 
    <Redirect exact from= "/" to="/home"/>
    <Route component={NotFound}></Route>
</Switch> 

</div>
</Router>
    );
  }
}   

export default App;
