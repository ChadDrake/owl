import React from 'react';

function chatLog({ type, list, message, participantId }) {
  let avatar = '';
  let name = '';
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === participantId) {
      name = list[i].name;
      avatar = list[i].avatar;
    }
  }
  console.log(list);
  if (type === 'message') {
    return (
      <div>
        {name} <img src={avatar} alt="" />
        {message}
      </div>
    );
  } else {
    return (
      <div>
        {name} <img src={avatar} alt="" />
        {type}
      </div>
    );
  }
}
export default chatLog;
