import React, { Component } from 'react';
import Juoma from './Juoma';
import Details from './Details'


class Juomalista extends Component {
     render () {
       
          var juomanodes = this.props.data1.map((juoma)=> {
               return (
                   
                    <Juoma juoma={juoma} key={juoma.juoma_id}  > </Juoma>
                    
                   
                 )
                 });
                  return (
                       <div>
                       <h2>Lista</h2>
                        {juomanodes} 
                        </div> 
                        ); 
                    } 
                }
                
    export default Juomalista;