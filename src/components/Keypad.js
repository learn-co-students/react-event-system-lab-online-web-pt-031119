// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

    constructor() {
        super();
        this.logPassword = this.keyUpHandler.bind(this, 'input')
    }
  

    keyUpHandler(refName, e) {
        console.log("Entering password...")
    }


    render() {
        return(
            <div id="input">
                <input type="password" ref="input" onKeyUp={this.logPassword}/>
            </div>
        )
    }
}