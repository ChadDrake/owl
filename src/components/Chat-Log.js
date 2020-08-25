import React from 'react';

function chatLog(props) {
  let avatar = '';
  let name = '';
  for (let i = 0; i < props.list.length; i++) {
    if (props.list[i].id === props.participantId) {
      name = props.list[i].name;
      avatar = props.list[i].avatar;
    }
  }
  console.log(name);
  if (props.type === 'message') {
    return (
      <div>
        {name} <img src={avatar} alt="" />
        {props.message}
      </div>
    );
  } else {
    return (
      <div>
        {name} <img src={avatar} alt="" />
        {props.type}
      </div>
    );
  }
}
export default chatLog;
