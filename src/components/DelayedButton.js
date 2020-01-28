// Code DelayedButton Component Here
import React from 'react';
class DelayedButton extends React.Component {
    onDelayedClick = event => {
        window.setTimeout(() => {
        this.props.onDelayedClick(event);
        }, this.props.delay)
        event.persist()

    }

    render () {
        return <button onClick={this.onDelayedClick}></button> //Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout()
    }
}
export default DelayedButton;

