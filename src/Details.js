import React, { Component } from 'react';


class Details extends Component {


    poista = () => {
        this.props.poista(this.props.id)
    }


    render() {
        return (
                 <div id="details">
               
                </div>
        )
    }
}

export default Details;
