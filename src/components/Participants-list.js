import React from 'react';
// import ReactDOM from 'react-dom';
// import store from '././STORE';
function pariticipantsList(props){
    let onStage ='no';
    let inSession='no';
    if(props.onStage === true) {
        onStage = 'yes'
    }
    if (props.inSession===true){
        inSession='yes';
    }
    return <div>
        <section className='ParticipantsList'>
            <div>
            {props.name}
            </div>
            <img src={props.avatar} alt ='' />
            <p>Onstage: {onStage}</p>
            <p>Here: {inSession}</p>
        </section>
    </div>
}
export default pariticipantsList