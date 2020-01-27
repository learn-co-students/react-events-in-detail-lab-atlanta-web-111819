// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {


    click = (e) => {
        console.log(e.pageX);
        console.log(e.pageY);
        this.props.onReceiveCoordinates([e.pageX, e.pageY])
        
    }

    render() {
        return (
            <div>
                <button onClick={this.click}>Button</button>
            </div>
        )
    }
}
