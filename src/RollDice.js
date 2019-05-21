
//a parent component (rendered by App) that renders the dice and a button to roll. 

import React, {Component} from 'react';
import Die from './Die';
import { runInThisContext } from 'vm';

class RollDice extends Component{
        //default props
        static defaultProps = {
            sides: [
                {one: "one"},
                {two: "two"},
                {three: "three"},
                {four: "four"},
            ]
        };


    constructor(props){
        super(props);
        this.state = {die1:"one", die2:"one"}
        this.roll = this.roll.bind(this);
    }


    roll(){
        let rand = Math.floor(Math.random() * this.props.face.length);
        return this.props.face[rand];
    }

    render(){
        console.log(this.roll());
        return(
            <div>
                <Die face={this.state.die1}/>  <Die face={this.state.die2}/>

            </div >
        );
    }
}


export default RollDice;
