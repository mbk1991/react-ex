import { useState } from 'react'
import { createStore } from 'redux'
import { Provider, useDispatch, useSelector, connect } from 'react-redux'
import { createSlice } from  '@reduxjs/toolkit';
import './App.css'
import store from './store'
import counterSlice from './counterSlice'

// function reducer(state, action){
//   if(action.type === 'UP'){
//     return {...state, value:state.value + action.step}
//   }
//   return state;
// }
// const initialState = {value:0};
// const store = createStore(reducer, initialState);



function Counter(){
  const count = useSelector((state)=>{
    console.log('state', state);
    return state.counter.value;
  });
  const dispatch = useDispatch();
  return(
    <div>
      <button
        onClick={
          (e)=>{
            // dispatch({type:'counterSlice/up', step:2});
            dispatch(counterSlice.actions.up(2));  //이게 어떻게 step에 매칭되지? 순서인가?아니다. payload로 들어온다.
          }
        }
      >+</button> {count}

      <button
        onClick={
          (e)=>{
            dispatch(counterSlice.actions.down(2));
          }
        }
      >
        -
      </button>
    </div>
  );
}

function App() {

  return (
    <Provider store={store}>
      <div>
        <Counter/>
      </div>
    </Provider>
  )
}

export default App
