// Code CoordinatesButton Component Here
import React from 'react';

//In the components/CoordinatesButton.js file, create a CoordinatesButton React component.
class CoordinatesButton extends React.Component {
    
    click = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render() {
        return  <button onClick={this.click}>Coordinates</button>
    }
}

export default CoordinatesButton;