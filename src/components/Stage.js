import React from "react";

function Stage(props) {
  if (props.onStage) {
    return (
      <div>
        <img src={props.avatar} alt="" />
        {props.name}
      </div>
    );
  }
  return null;
}

export default Stage;
