import logo from './logo.svg';
import './App.css';
// import Basic1 from "./components/Basic1"
import Basic2 from "./components/Basic2"
// import BasicUseEffect from "./components/BasicUseEffect"
import TimerContainer from "./components/TimerContainer"
import ApiFetch from './components/ApiFetch';
import AppContext from "./contexts/AppContext";
import Parent from "./components/Parent"
import BasicReducer from "./components/BasicReducer"

function App() {
  return (
    <AppContext.Provider value={"value from App.js"}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic1/> */}
          <Basic2/>
          {/* <BasicUseEffect/> */}
          <TimerContainer/>
          <ApiFetch/>
          <Parent />
          <BasicReducer />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
