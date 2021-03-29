import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals'
// import ReduxCounter from './components/ReduxCounter';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import DisplayMessages from './DisplayMessages'


const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}


const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <DisplayMessages />
    <ReduxCounter />
  </Provider>
  </React.StrictMode>, 
  document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

