import GuitarPage from "./components/GuitarPage/GuitarPage.js";
import NavBar from "./components/NavBar/NavBar.js"
import Home from "./components/Home/Home.js"
import {Route} from "react-router-dom"
import GuitarWars from "./components/GuitarWars/GuitarWars.js";
import AddList from "./components/AddList/AddList.js";
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
      // console.log(resp.data)
      // updating gtrData state
      const sortedList = resp.data.records.sort((a, b) => a.fields.rank - b.fields.rank)
setGtrPlayers (sortedList)
      // setGtrPlayers(resp.data.records)
    }
    gtrData();
  }, [])
  
  return (
    <div className="App">

     <NavBar />

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
        <AddList
       gtrPlayersList={gtrPlayers}
        />
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
