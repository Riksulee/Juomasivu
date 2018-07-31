import React, { Component } from 'react';

import Juomalista from './Juomalista'
import JuomanLisays from './JuomanLisays';

class Juomat extends Component {
  constructor(){
    super()
    this.state={lista: []};
  }
  
  lisaaListaan = (uusi) => {

    uusi.id = (lista.length) + 1
    lista.push(uusi)
    // fetch('http://localhost:8080/api/quotes', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(uusi)
    // })
    console.dir(lista)
    this.setState(this.state);
  }


  //     poistajuoma=(poistid)=>
  //     {
  //       var indx = this.state.lista.findIndex((q)=> q.id === poistid)
  //       this.state.lista.splice(indx, 1);
  //       this.setState(this.state) 
  //       console.dir(poistid)

  //         fetch(`http://localhost:8080/api/quotes/${95}`, {
  //         method: 'DELETE',
  //         headers: { "Content-Type": "application/json"},
  //         body: JSON.stringify()
  //       })
  //   }



  //     componentDidMount(){
  //       fetch('http://localhost:8080/api/quotes')
  //       .then(result => {
  //           return result.json();
  //       }).then(data => {   
  //         for( var i = 0; i < data.length; i ++)
  //         { 
  //           lista.push(data[i])
  //         }
  //         console.log(lista)
  //         this.setState(this.state)
  //       })  
  //   }

  render() {
    return (
      <div className="quotebox">

        <h1>Juomat</h1>
        <JuomanLisays valmisjuoma={this.lisaaListaan} />
        <Juomalista data1={lista} poisto={this.poistajuoma} />
      </div>
    );
  }


}
var lista = [{juoma_id: 0, kategoria: "Vodka", nimi: 'rompun perunavodka', valmistaja: 'romppu', hinta: 13, valmistusmaa:"transnistria", valmistusvuosi: 1991, kuvaus:"iskee q nyrggi"  },
{juoma_id: 1, kategoria: "Vodka", nimi: 'rompun perunavodka', valmistaja: 'romppu', hinta: 13, valmistusmaa:"transnistria", valmistusvuosi: 1991, kuvaus:"iskee q nyrggi"  },
{juoma_id: 2, kategoria: "Vodka", nimi: 'rompun perunavodka', valmistaja: 'romppu', hinta: 13, valmistusmaa:"transnistria", valmistusvuosi: 1991, kuvaus:"iskee q nyrggi"  },
{juoma_id: 3, kategoria: "Vodka", nimi: 'rompun perunavodka', valmistaja: 'romppu', hinta: 13, valmistusmaa:"transnistria", valmistusvuosi: 1991, kuvaus:"iskee q nyrggi"  },];

export default Juomat;
