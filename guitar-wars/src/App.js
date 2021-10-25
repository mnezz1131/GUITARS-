import GuitarPage from "./components/pages/GuitarPage/GuitarPage.js";
import Navbar from "./components/Nav/Navbar.js"
import Home from "./components/pages/Home/Home.js"
import {Route} from "react-router-dom"
import GuitarWars from "./components/pages/GuitarWars/GuitarWars.js";
import AddList from "./components/pages/AddList/AddList.js";
import './App.css';
import { useEffect, useState } from "react"
import axios from "axios"


function App() {
  const [gtrPlayers, setGtrPlayers] = useState([]);

  // setting use effect to make axios call and store data
  useEffect(() => {
    // console.log("Getting data");
    const gtrData = async () => {
      const resp = await axios.get("https://api.airtable.com/v0/app69ZErQlRDvLFux/Table%201?api_key=key4oMm9k9ZdBAjAJ")
      console.log(resp.data)
      // updating gtrData state
      const sortedList = resp.data.records.sort((a, b) => a.fields.rank - b.fields.rank)
setGtrPlayers (sortedList)
      // setGtrPlayers(resp.data.records)
    }
    gtrData();
}, [])

  return (
    <div className="App">
     <Navbar />

      <Route path="/" exact>
        <Home
        gtrPlayers = {gtrPlayers}
        />
      </Route>

      <Route path="/guitar-wars">
        <GuitarWars
          gtrPlayers = {gtrPlayers}
        />
      </Route>
  
      <Route path="/add-list">
        <AddList />
      </Route>

      <Route path = "/guitarist-page/:id">
        <GuitarPage
            gtrPlayers = {gtrPlayers}
        />
      </Route>
    </div>
  );
}

export default App;
