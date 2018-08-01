import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Details from './Details';
import ReactDOM from 'react-dom';
import {PoistaJuomaApista} from './Palvelu'

class Juoma extends Component {
    constructor() {
        super();
        this.state = {}
    }

    PoistaJuomaListalta = () => {
        this.props.PoistaJuomaListalta(this.props.juoma.juoma_id)
        PoistaJuomaApista(this.props.juoma.juoma_id)
    }

    render() {
        return (<div>
            <li>Nimi: {this.props.juoma.nimi}</li>
            <li>Valmistaja: {this.props.juoma.valmistaja}</li>
            <li>Kategoria: {this.props.juoma.kategoria}</li>
            <li>Hinta: {this.props.juoma.hinta}€</li>

            <Link to={`/details/${this.props.juoma.juoma_id}`}>Details</Link><button onClick={this.PoistaJuomaListalta}>  Poista</button>
            <hr />
        </div>)
    }
}

export default Juoma;
