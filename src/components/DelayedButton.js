import React from 'react'

function DelayedButton(props) {
    return (
        <button
            onClick={event => {
                event.persist()
                setTimeout(() => {
                    props.onDelayedClick(event)
                }, props.delay)
            }}
        >
            Delayed Button
        </button>
    )
}

export default DelayedButton
