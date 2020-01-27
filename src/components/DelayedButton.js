// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {



    click = (e) => {
        e.persist()
        window.setTimeout(this.props.onDelayedClick(e), this.props.delay)
    }


    render() {
        return (
            <div>
                <button onClick={this.click}>Button2</button>
            </div>
        )
    }
}
