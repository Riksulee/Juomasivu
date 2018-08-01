import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Juomalista from './Juomalista';

const urlHaeKaikki = 'http://localhost:1595/api/juomat/';


class Juomat extends Component {
  constructor() {
    super()
    this.state = {
      lista: []
    };
  }

  PoistaJuomaListalta = (juoma_id) => {
    let templista = this.state.lista.filter(x => x.juoma_id != juoma_id);
    this.setState({lista : templista})
  }

  componentDidMount() {
    this.HaeKaikkiJuomat();
  }

  HaeKaikkiJuomat = () => {
    fetch((urlHaeKaikki))
      .then(result => result.json())
      .then(data => this.setState({
        lista: data
      }));
  }

  render() {
    return (
      <div>
        <h1>Juomat</h1>
        <Link to="/uusijuoma">Lisää uusi juoma</Link>
        
        <Juomalista data1={this.state.lista} PoistaJuomaListalta={this.PoistaJuomaListalta} />
      </div>
    );
  }
}

export default Juomat;
