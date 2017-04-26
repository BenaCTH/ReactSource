import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import {  Provider } from 'react-redux';
import Counter from './components/Counter';
import counter from './reducers/counterReducer'
const counterStore = createStore(counter);



ReactDOM.render(
  <div>
    <App />
    <Provider store={counterStore}>
      <Counter></Counter>
    </Provider>
  </div>,
  document.getElementById('root')
);
