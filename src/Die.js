//an individual die that takes props and displays the correct face of the die based on props. 

import React, {Component} from 'react';
import './Die.css';

class Die extends Component{

    render(){
        console.log(this.props.rolling);
        return(
            <div>
                <i className={`Die fas fa-dice-${this.props.face}`} ></i>
            </div>
        );
    }
}


export default Die;

