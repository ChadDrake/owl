import React, { Component } from 'react';
import ChatEvent from './components/Chat-Log';
import STORE from './STORE';

class App extends Component {
  render() {
    return (
      <main className="App">
        <div className="result">
          {STORE.chatEvents.map((chat) => (
            <ChatEvent
              participantId={chat.participantId}
              list={STORE.participants}
              type={chat.type}
              message={chat.message}
              time={chat.time}
              timestamp={chat.timestamp}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
