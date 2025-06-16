import React from "react";

function Intro(){
    let name = 'Rutvik';
    console.log(name);

    let domain = {
        student: 'Vedant',
        tech: 'JAVA'
    }

    return(
        <div>
            <h2>{name} is Learning react</h2>
            <h4>
                {domain.student} is learning {domain.tech}
            </h4>
        </div>
    )
}

export default Intro;