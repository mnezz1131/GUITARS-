import axios from "axios"
import { useEffect, useState } from "react"
import "./guitarWars.css"

const GuitarWars = () => {
  const [getGtrPlayers, setGetGtrPlayers] = useState([])
 

  useEffect(() => {
    const gtrData = async() => {
      const resp = await axios.get("https://api.airtable.com/v0/app69ZErQlRDvLFux/Table%201?api_key=key4oMm9k9ZdBAjAJ")
      // console.log(resp.data)
    setGetGtrPlayers(resp.data.records)
    }
    gtrData();
  }, [])

  const pickRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }
  let player1 = pickRandom(getGtrPlayers)
  let player2 = pickRandom(getGtrPlayers)

  // console.log(pickRandom(getGtrPlayers))
  // console.log(pickRandom(getGtrPlayers))
  let wins = 0

  function handleClick1(ev) {
    ev.preventDefault();
    console.log("Button was clicked")
    
    
  }

  function handleClick2(ev) {
    ev.preventDefault();
    console.log("Button was clicked")
  
  }
  

  return (
    <div>

      <h1>This is My Guitar Wars Page </h1>

      <div className="row">
        
        <div className="column1 gtr1">
          <div>
            {<h2>{player1?.fields.names}</h2>}
            {<img src={player1?.fields.large} alt={player1?.fields.names}/> } 
        </div>
        <button onClick={handleClick1}>VOTE</button>
        <h2>Wins _</h2>  
        </div> 
        
      <div className="column2">
        <h1>VS</h1>
        <button >Play Again</button>
      </div>
        
      <div className="column3 gtr2">
       
        <div>
           <h2>{player2?.fields.names}</h2>
           <img src={player2?.fields.large} alt={ player2?.fields.names}/>
          </div>
          <button onClick={handleClick2}>VOTE</button>
            <h2>Wins _</h2>  
      </div> 
        
    </div>
    
      










      
    </div>
  )
}
export default GuitarWars;