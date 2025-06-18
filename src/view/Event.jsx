import React, { Component } from "react";

// export default function Event(){

//     function handleClick(event){
//         alert('We are learning event handling')
//     }

//     return(
//         <div>
//             <button onClick={(event) => {handleClick(event)}}>Click me</button>
//         </div>
//     )
// }

class Event extends Component{

       handleClick(event){
        alert('We are learning event handling')
    }
    render(){
        return(
            <div>
                 <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
            </div>
        )
    }
}

export default Event;