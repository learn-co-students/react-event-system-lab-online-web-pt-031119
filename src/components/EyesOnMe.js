// Code EyesOnMe Component Here
import React, { Component } from 'react';
import Keypad from './Keypad.js';

export default class EyesOnMe extends Component {


  focus = () => {
    console.log("Good!")
  }

  blur = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <button>
      onFocus={this.focus}
      onBlur={this.blur}
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
