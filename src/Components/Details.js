import React, { Component } from 'react';
import {MuokkaaJuoma} from './Palvelu'

const urlHaeKaikki = 'http://localhost:1595/api/juomat/'

class Details extends Component {
    constructor({ match }) {
        super();
        this.state = {
            urlid: match.params.id,
            juoma: {}
        }
    }

    componentDidMount() {
        this.HaeJuomanDetails();
    }

    HaeJuomanDetails = () => {
        fetch((urlHaeKaikki + this.state.urlid))
            .then(result => result.json())
            .then(data => this.setState({
                juoma: data
            }));
    }

    //VALIDOINTIA ON LISÄTTÄVÄ
    Muokkaa = () => {
        if (this.refs.nimi.value == '' || this.refs.kategoria.value == '' || this.refs.hinta.value == '' ||
        this.refs.valmistaja.value == '' || this.refs.valmistusmaa.value == '' || this.refs.valmistusvuosi.value == '' ||
        this.refs.kuvaus.value == '') {
            alert('Täytä kaikki kentät, kiitos.');
        } else {
            let juomaTemp = {juoma_id: this.state.juoma.juoma_id, kategoria: this.refs.kategoria.value,
                nimi: this.refs.nimi.value, valmistaja: this.refs.valmistaja.value, hinta: this.refs.hinta.value,
                valmistusmaa: this.refs.valmistusmaa.value, valmistusvuosi: this.refs.valmistusvuosi.value,
                kuvaus: this.refs.kuvaus.value };

            MuokkaaJuoma(juomaTemp);
            this.setState({juoma: juomaTemp});
            console.log(this.state)
        }
        
    }

    render() {
        return (
            <div>
                <h2>Details</h2>
                <label>Tuote ID: </label>
                <input ref="juoma_id" type="number" readOnly="readonly" defaultValue={this.state.juoma.juoma_id}/><br/>
                <label>Nimi: </label>
                <input ref="nimi" type="text" defaultValue={this.state.juoma.nimi}/><br/>
                <label>Kategoria: </label>
                <input ref="kategoria" type="text" defaultValue={this.state.juoma.kategoria}/><br/>
                <label>Hinta: </label>
                <input ref="hinta" type="number" defaultValue={this.state.juoma.hinta}/><br/>
                <label>Valmistaja: </label>
                <input ref="valmistaja" type="text" defaultValue={this.state.juoma.valmistaja}/><br/>
                <label>Valmistusmaa: </label>
                <input ref="valmistusmaa" type="text" defaultValue={this.state.juoma.valmistusmaa}/><br/>
                <label>Valmistusvuosi: </label>
                <input ref="valmistusvuosi" type="number" defaultValue={this.state.juoma.valmistusvuosi}/><br/>
                <label>Kuvaus: </label>
                <input ref="kuvaus" type="text" defaultValue={this.state.juoma.kuvaus}/><br/>
                <button onClick={this.Muokkaa} type="button">Päivitä</button>
            </div>
        )
    }
}



export default Details;
