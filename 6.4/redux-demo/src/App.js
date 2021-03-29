import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function App() {
  return (
    <div >
      
    </div>
  );
}

export default App;


const defaultState = {
  welcome: 'Hi',
  otherState: 'some stuff'
}

const greeting = (state = defaultState, action) => {
  switch(action.type) {
    case 'GREET_ME':
      return { welcome: 'Hello Victor' };
    case 'GREET_WORLD':
      return { welcome: 'Hello World' };
    default:
      return state;
  }
};

const store = createStore(greeting);

console.log(store.getState());

store.dispatch({
  type: 'GREET_ME'
})


console.log(store.getState());