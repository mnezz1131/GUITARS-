import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Route } from "react-router-dom";
import GuitarPage from "../GuitarPage/GuitarPage";



const Main = () => {
  // setting state variables to hold data coming from air table
  const [gtrPlayers, setGtrPlayers] = useState([]);

  // setting use effect to make axios call and store data
  useEffect(() => {
    // console.log("Getting guitar data");
    const gtrData = async () => {
      const resp = await axios.get("https://api.airtable.com/v0/app69ZErQlRDvLFux/Table%201?api_key=key4oMm9k9ZdBAjAJ")
      // console.log(resp.data)
      // updating gtrData state
      setGtrPlayers(resp.data.records)
    }
    gtrData();
}, [])

  return (
    <div>
      <h1>Main Page</h1>
      {gtrPlayers.map((gtrPlayer) => (
        <div key={gtrPlayer.id}>
        <Link to ={`/guitarists/${gtrPlayer.id}`}>
         <h2> Guitarist : {gtrPlayer.fields.names}</h2></Link>
      
          <img alt={gtrPlayer.fields.name} src={gtrPlayer.fields.small} />
          <h2>Rank : {gtrPlayer.fields.rank}</h2>
        </div>
      ))}


<Route path = '/guitarists/:id'>
        <GuitarPage
          gtrPlayers={gtrPlayers}
        />
</Route>
      </div>
)



}

export default Main

// GET https://api.airtable.com/v0/app69ZErQlRDvLFux/Table%201?api_key=key4oMm9k9ZdBAjAJ
