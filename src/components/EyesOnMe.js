// Code EyesOnMe Component Here
import React, { Component } from 'react';
import Keypad from './Keypad.js';

export default class EyesOnMe extends Component {


  focusNow = () => {
    return console.log("Good!")
  }

  blurNow = () => {
    return console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <button
      onFocus={this.focusNow}
      onBlur={this.blurNow}>
      </button>
    )
  }

}

//
// tickle = () => {
//    console.log('Tee hee!');
//  }
//
//  <button onClick={this.tickle}>Tickle me!</button>
