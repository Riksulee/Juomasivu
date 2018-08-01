import React, { Component } from 'react';


class JuomanLisays extends Component {

  nimiMuuttui=(tapahtuma)=>{
    this.setState({nimi: tapahtuma.target.value}    
     
    );
  }

      valmistajaMuuttui = (tapahtuma) => {
      this.setState({valmistaja: tapahtuma.target.value});
  }
  
  valmis = (tapahtuma) => {
    tapahtuma.preventDefault();
    this.props.valmisjuoma(this.state);
    this.setState({valmistaja: '', nimi: ''});
    
  }
  
    render() {
      return (
      <div>
         <input name ="nimi" onChange={this.nimiMuuttui}/><br/>
         <input name="valmistaja" onChange={this.valmistajaMuuttui}/><br/>
         <input type="submit" value="Arvostele" onClick={this.valmis}/>
         
      </div>
      );
    }
  }

  export default JuomanLisays;
  