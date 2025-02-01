import { useState, useReducer } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [stateW, setStateW] = useState(0);
  const [reducerW, setReducerW] = useState(0);

  const StateCnt=()=>{

    let n = stateW?stateW:1;

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

      let n = (reducerW)? reducerW:1;

      if(action === 'up'){
        return oldState + n;
      }else if(action === 'down'){
        return oldState - n;
      }else if(action === 'init'){
        return 0;
      }

  },0)
  const ReducerCnt=()=>{
    return(
      <>
        <div>Reducer Cnt: {state}</div>
        <button onClick={function(){
          dispatch('up');
        }}>up</button>
        <button onClick={function(){
          dispatch('down');
        }}>down</button>
        <button onClick={function(){
          dispatch('init');
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
