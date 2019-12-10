// Code Keypad Component Here
import React, { Component } from 'react';
import EyesOnMe from './EyesOnMe.js';

export default class Keypad extends Component {


  enterPassword = () => {
    return console.log("Entering password...")
  }


  render() {
    return(
      <input type="password" keyUp={this.enterPassword}></input>
    )
  }

}
