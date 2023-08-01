import form from "./componentes/Vigilante"
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Vigilante' component={form}/>
      </Routes>
    </div>
  );
}

export default App;
