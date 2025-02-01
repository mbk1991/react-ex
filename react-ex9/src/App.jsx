import { useState } from 'react'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch, connect} from 'react-redux'
import './App.css'
import Left1 from './components/Left1'
import Right1 from './components/Right1'

const store = createStore((currState, action)=>{
  if(currState === undefined){
    return {number:1};
  }
  const newState = {...currState};
  if (action.type === 'PLUS'){
    newState.number++;
  }
  return newState;
});

function App() {
  return (
    <div id='container'>
      <h1>Root </h1>
      <div id='grid'>
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  )
}

export default App
