import React from "react";

export default function ChildFn(props){
    return(
        <div>
            <h3>{props.name} is Learning : {props.dataFromParent} </h3>
        </div>
    )
}