import { useState, useReducer } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [stateW, setStateW] = useState(0);
  const [reducerW, setReducerW] = useState(0);

  const StateCnt=()=>{

    let n = stateW;

    return(
      <>
      <div>State Cnt: {count}</div>
      <button
        onClick={function(){
          setCount(count+n);
        }}
      >up</button>

      <button
        onClick={function(){
          setCount(count-n);
        }}
      >down</button>

      <button
        onClick={function(){
          setCount(0);
        }}
      >init</button>
      <input type='text' value={stateW}
        onChange={
          (e)=>{
            setStateW(Number(e.target.value));
          }
        }
      ></input>
    </>
    ); 
  };

  const [state, dispatch] = useReducer((oldState, action)=>{
      if(action.type === 'up'){
        return oldState + action.n;
      }else if(action.type === 'down'){
        return oldState - action.n;
      }else if(action.type === 'init'){
        return 0;
      }

  },0);
  const ReducerCnt=()=>{
    return(
      <>
        <div>Reducer Cnt: {state}</div>
        <button onClick={function(){
          dispatch( {type:'up', n:reducerW} );
        }}>up</button>
        <button onClick={function(){
          dispatch( {type:'down', n:reducerW} );
        }}>down</button>
        <button onClick={function(){
          dispatch( {type:'init', n:reducerW} );
        }}>init</button>
        <input type='text' value={reducerW}
          onChange={(e)=>{
            setReducerW(Number(e.target.value));
          }}
        ></input>
      </>
    );
  }

  return (
    <>
      <StateCnt/>
      <ReducerCnt/>
    </>
  )
}

export default App
