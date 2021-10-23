
import Navvie from "./components/Nav/Navvie.js"
import Home from "./components/Home/Home.js"
import './App.css';

import {Link, Route} from "react-router-dom"
import GuitarWars from "./components/GuitarWars/GuitarWars.js";
import AddList from "./components/AddList/AddList.js";


function App() {
  return (
    <div className="App">
      <Navvie />

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/guitar-wars">
        <GuitarWars />
      </Route>
  
      <Route path="/add-list">
        <AddList />
      </Route>
    </div>
  );
}

export default App;
