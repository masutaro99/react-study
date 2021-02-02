import logo from './logo.svg';
import './App.css';
// import Basic1 from "./components/Basic1"
import Basic2 from "./components/Basic2"
// import BasicUseEffect from "./components/BasicUseEffect"
import TimerContainer from "./components/TimerContainer"
import ApiFetch from './components/ApiFetch';
import AppContext from "./contexts/AppContext";
import Parent from "./components/Parent"
// import BasicReducer from "./components/BasicReducer"

import {useReducer} from 'react'

const initialState = 0
const reducer = (currentState, action) => {
  switch(action) {
    case "add_1":
      return currentState + 1;
    case "multiple_3":
      return currentState * 3;
    case "reset":
      return initialState
    default:
      return currentState
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{countProvided: count, dispatchProvided: dispatch}}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic1/> */}
          <Basic2/>
          {/* <BasicUseEffect/> */}
          <TimerContainer/>
          <ApiFetch/>
          <Parent />
          Count {count}
          {/* <BasicReducer /> */}
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
