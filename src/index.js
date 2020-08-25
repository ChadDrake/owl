import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import STORE from './STORE'

ReactDOM.render(
  
    <App store={STORE}/>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
