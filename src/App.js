import Parent from './Parent';
import React,{useState,createContext} from 'react';

const AppContext = createContext();
//craeteContext -> context api object
//1. Provider
//2. consumer

function App() {
  // const [state, setState] = useState('Ameen');
  
  //Multiple context
  const [state, setState] = useState({name:'Ameen', age: 20});

  
  const increnetAge =() => {
    setState(prevSate => ({
      ...prevSate,
      age: state.age + 1
    }))
  }
  
  
  return (
    // <AppContext.Provider value={state}>
    <AppContext.Provider value={{state,increnetAge}}>
     <Parent />
    </AppContext.Provider>
  );
}

export  {AppContext, App};
