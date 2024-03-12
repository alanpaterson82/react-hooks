import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HooksCounter from "./components/HooksCounter";
import ControlledFormHooks from "./components/ControlledFormHooks";
import UseStateWithArrays from "./components/UseStateWithArrays";
import UseEffectCounter from "./components/UseEffectCounter";


function App() {
  return <div className="App">
      <ClassCounter/>
      <HooksCounter/>
      <ControlledFormHooks />
      <UseStateWithArrays/>
      <UseEffectCounter/>
      
  </div>;
}

export default App;