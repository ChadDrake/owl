import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Stage from './components/Stage';
import STORE from './STORE';
import { render } from '@testing-library/react';


class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };
  render() {
    return(
    <main className = 'App'>
    <div className='result'>
    {STORE.participants.map(participant =>(
    <Stage 
    id = {participant.id}
    name ={participant.name}
    avatar={participant.avatar}
    inSession ={participant.InSession}
    onStage= {participant.onStage}
    />
    ))}
    
    </div>
    </main>
    
    )}
}

export default App;
