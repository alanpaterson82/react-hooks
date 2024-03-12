import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HooksCounter from "./components/HooksCounter";
import ControlledFormHooks from "./components/ControlledFormHooks";
import UseStateWithArrays from "./components/UseStateWithArrays";
import UseEffectCounterContainer from "./components/UseEffectCounterContainer";


function App() {
  return <div className="App">
      <ClassCounter/>
      <HooksCounter/>
      <ControlledFormHooks />
      <UseStateWithArrays/>
      <UseEffectCounterContainer/>
      
  </div>;
}

export default App;