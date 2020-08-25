import React from 'react';

function Stage(props){
    if(props.onStage === true)
    return(
        <div>
            <img src={props.avatar} alt=""/>
            {props.name}
        </div>
)}

export default Stage;