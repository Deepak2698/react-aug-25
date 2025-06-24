import React, { Component } from "react";

class TextState extends Component{

    constructor(){
        super();
        this.state = {
            student: 'Sakshi',
            domain : 'JAVA',
            count: 0
        }
    }

    changeDomain(event){
        this.setState(
            {
                student: 'Rutvik',
                domain: 'MERN'
            }
        )
    }
      
    increment(value){
        this.setState({count : this.state.count + value})
    }
  
    decrement(value){
        this.setState({count : this.state.count - value})
    }

    render(){
        return(
            <div>
                <h2>
                    {this.state.student} is learning {this.state.domain}    
                </h2>
                <button onClick={(event) => {this.changeDomain(event)}} >
                    Change-text
                </button>

                <h4>{this.state.count}</h4>
                <button onClick={() => {this.increment(1)}} >
                    +1
                </button>
                <button onClick={() => {this.decrement(1)}} >
                    -1
                </button>
                <button onClick={() => {this.increment(3)}} >
                    +3
                </button>
            </div>
        )
    }
}

export default TextState;