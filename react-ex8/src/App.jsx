import { useState, createContext, useContext } from 'react'
import { styled } from 'styled-components'
import './App.css'
import Left1 from './components/Left1'
import Right1 from './components/Right1'

function App() {
  const [number, setNumber] = useState(1);

  return (
    <div id='container'>
      <h1>Root: {number}</h1>
      <div id='grid'>
        <Left1 number={number}></Left1>
        <Right1 onButton = {function(_number){
          setNumber(number + _number);
        }}></Right1>
      </div>
    </div>
  );
}

export default App;
