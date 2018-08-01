import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

class Lisaauusi extends Component {
    constructor() {
        super()
        this.state = {
            juoma : {}
        }
    }



    Lisaauusi = () => {
        let juomaTemp = { kategoria: this.refs.kategoria.value,
            nimi: this.refs.nimi.value, valmistaja: this.refs.valmistaja.value, hinta: this.refs.hinta.value,
            valmistusmaa: this.refs.valmistusmaa.value, valmistusvuosi: this.refs.valmistusvuosi.value,
            kuvaus: this.refs.kuvaus.value };
        
        
    }

    render() {
        return (
            <div>
                <p>Uusi toimii</p>
                <label>Nimi: </label>
                <input required="required" ref="nimi" type="text" /><br />
                <label>Kategoria: </label>
                <input ref="kategoria" type="text" /><br />
                <label>Hinta: </label>
                <input ref="hinta" type="number" /><br />
                <label>Valmistaja: </label>
                <input ref="valmistaja" type="text" /><br />
                <label>Valmistusmaa: </label>
                <input ref="valmistusmaa" type="text" /><br />
                <label>Valmistusvuosi: </label>
                <input ref="valmistusvuosi" type="number" /><br />
                <label>Kuvaus: </label>
                <input ref="kuvaus" type="text"/><br />
                <button onClick={null} type="button">Luo</button>
            </div>
        );
    }
}

export default Lisaauusi;