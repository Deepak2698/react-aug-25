import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component{
    render(){
        return(
            <div>
                <Child dataFromParent= 'passing props in class components' name='Sidhi'/>
            </div>
        )
    }
}

export default Parent;