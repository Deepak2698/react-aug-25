import React from "react";
import ChildFn from "./ChildFn";

let ParentFn = () => {
    return(
        <div>
           
            <ChildFn dataFromParent= 'passing props in functional components' name='Rutvik' />
        </div>
    )
}

export default ParentFn;