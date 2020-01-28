import React, { Component } from 'react'

export default class CoordinatesButton extends Component{
    handleClick = (e) => {
        let x = e.clientX
        let y = e.clientY

        return this.props.onReceiveCoordinates([x,y])
    }
    
    render(){
        return(
            <button onClick={this.handleClick}></button>
        )
    }
}
