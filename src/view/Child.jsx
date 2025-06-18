import React, { Component } from "react";

class Child extends Component{

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                <h1>{this.props.name} is Learning : {this.props.dataFromParent}</h1>
            </div>
        )
    }
}

export default Child;