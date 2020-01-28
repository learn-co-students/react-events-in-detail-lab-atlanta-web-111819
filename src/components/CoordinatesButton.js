import React from 'react';


// function CoordinatesButton(props) {
//     console.log(props)
//     // debugger
//     return (
//         <button
//             onClick={event => {
//                 const data = [event.clientX, event.clientY]
//                 props.onReceivedCoordinates(data)
//             }}
//         >Coordinates Button</button>
//     )
// }

class CoordinatesButton extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <button onClick={event => {
                const loc = [event.clientX, event.clientY]
                this.props.onReceiveCoordinates(loc)
            }}>
                Coordinates Button
            </button>
        )
    }
}

export default CoordinatesButton