import { useState, createContext, useContext } from 'react'
import './App.css'
import Sub4 from './components/Sub4.jsx';

const themeDefault = { 
    border: '10px solid green'
};

const themeContext = createContext(themeDefault);

function App() {
  
  const theme = useContext(themeContext);

  return (
    <div className='root' >
      <h1>Hello World!!!</h1>
      <themeContext.Provider value={{ border: '10px solid green' }}>
        <Sub1/>
      </themeContext.Provider>
    </div>

  );
}

const Sub1 = (props)=>{

  const theme = useContext(themeContext);

  return(
    <div style={theme}>
      <h1 >Sub1</h1>
      <Sub2></Sub2>
    </div>

  );
}

const Sub2 = (props)=>{
  return(
    <div>
      <h1>Sub2</h1>
      <Sub3></Sub3>
    </div>
  );
}

const Sub3 = (props)=>{
  return(
    <div>
      <h1>Sub3</h1>
      <Sub4 themeContext={themeContext}></Sub4>
    </div>
  );
}

export default App
