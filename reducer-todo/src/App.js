import React, { useReducer } from 'react';
import { initialState, reducer } from './reducer';
import './App.css';

import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state', state);

  return (
    <div className="App">
      <TodoList todoArray={state.todoArray} />
      <TodoForm />
    </div>
  );
}

export default App;
