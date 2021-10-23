import GuitarPage from "./components/pages/GuitarPage/GuitarPage.js";
import Navbar from "./components/Nav/Navbar.js"
import Home from "./components/pages/Home/Home.js"
import {Route} from "react-router-dom"
import GuitarWars from "./components/pages/GuitarWars/GuitarWars.js";
import AddList from "./components/pages/AddList/AddList.js";
import './App.css';




function App() {
  return (
    <div className="App">
     <Navbar />

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/guitar-wars">
        <GuitarWars />
      </Route>
  
      <Route path="/add-list">
        <AddList />
      </Route>

      <Route path = "/guitarist-page/:id">
        <GuitarPage
        />
      </Route>
    </div>
  );
}

export default App;
