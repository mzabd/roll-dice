
//a parent component (rendered by App) that renders the dice and a button to roll. 

import React, {Component} from 'react';
import Die from './Die';
import { runInThisContext } from 'vm';

class RollDice extends Component{
        //default props
        static defaultProps = {
            sides: ["one", "two", "three", "four", "five", "six"]
        };


    constructor(props){
        super(props);
        this.state = {die1:"one", die2:"one"}
        this.roll = this.roll.bind(this);
    }


    roll(){
        //pick two rolls
        let rand = Math.floor(Math.random() * this.props.sides.length);
        const newDie1 =  this.props.sides[rand];
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        //set new state
        this.setState({ die1: newDie1, die2: newDie2});
    }

    render(){

        return(
            <div>
                <div>
                    {/* passing state as props */}
                    <Die face={this.state.die1}/>  
                    <Die face={this.state.die2}/>
                    
                </div >
                <div>
                    <button onClick={this.roll}>Roll</button>
                </div>
            </div>
 

        );
    }
}


export default RollDice;
