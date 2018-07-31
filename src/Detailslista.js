import React, { Component } from 'react';

import Details from './Details'


class Detailslista extends Component {
     render () {
       
          var juomanodes = this.props.data1.map((juoma)=> {
               return (
                   
                    <Details juoma={juoma} key={juoma.juoma_id}  > </Details>
                    
                   
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
                
    export default Detailslista;