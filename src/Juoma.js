import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import Details from './Details';
import ReactDOM from 'react-dom';


class Juoma extends Component  {
    constructor(){
        super();
        this.state = {}
    }

    details = () => {
        //renderöi uusi näkymä eli component.
        //ReactDOM.render(<Details juoma={this.props.juoma.nimi} />, document.getElementById('details'));
        
    }


   poista = () =>
    { 
        this.props.poista(this.props.id)
    }
render(){
    return( <div>
        <p>Juoma: {this.props.juoma.nimi}</p>
        <p>Valmistaja: {this.props.juoma.valmistaja}</p>
        <p>Kategoria: {this.props.juoma.kategoria}</p>
        <p>Hinta: {this.props.juoma.hinta}€</p>
        <Link  to= {`/details/${this.props.juoma.juoma_id}`}>Details</Link>
        <input type="submit" onClick={this.details}/>
        <hr/>
        {/* <input value="poista" type="submit" onClick={this.poista}/> */}
    </div>) 
}
}

export default Juoma;
  