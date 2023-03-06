import React, {Component} from 'react'

// Functional Components
// class Componente extends Component{
//     render(){
//         return (
//         // <h2>Hi I'm a component</h2>
//         <h2>{this.props.msg}</h2>
//         )
//     }
// }


// Functional Components
function Componente (props){
    return <h2>{props.msg}</h2>
}

export default Componente