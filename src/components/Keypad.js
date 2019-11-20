import React, { Component } from 'react'

class Keypad extends Component {

    handleKeyEvent = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                <input type='password' onKeyUp={this.handleKeyEvent} />
            </div>
        )
    }

}

export default Keypad

