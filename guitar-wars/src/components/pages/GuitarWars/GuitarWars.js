import axios from "axios"
import { useEffect, useState } from "react"
import "./guitarWars.css"

const GuitarWars = () => {
  const [getGtrPlayers, setGetGtrPlayers] = useState([])
// const [votes1, setVotes1] = useState(0)
// const [votes2, setVotes2] = useState(0)

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
  

  function handleClick1(ev) {
    ev.preventDefault();
    // setVotes2(votes2 + 1)

  }

  function handleClick2(ev) {
    ev.preventDefault();
   
    // setVotes2(votes2 + 1)
   
 
  }


  return (
    <div>

      <h1>This is My Guitar Wars Page </h1>

      <div className="row">
  
        <div className="column1 gtr1">
        
            {<h2>{player1?.fields.names}</h2>}
            {/* {<h3>ID - {player1?.id}</h3>} */}
            {<img class="image-size" src={player1?.fields.large} alt={player1?.fields.names}/> }
            {<h2>Wins from air table - {player1?.fields.wins}</h2>}

      
        <button onClick={handleClick1}>VOTE</button>
       
        </div> 
        
      <div className="column2 gtr2">
        <h1>VS</h1>
        <button >Play Again</button>
      </div>
        
      <div className="column3 gtr2">
       
        
            <h2>{player2?.fields.names}</h2>
            {/* {<h3>ID - {player2?.id}</h3>} */}
            <img class="image-size"  src={player2?.fields.large} alt={player2?.fields.names} />
            {<h2>Wins from air table - {player2?.fields.wins}</h2>}
   
          <button onClick={handleClick2}>VOTE</button>
        
           
      </div> 
        
    </div>
    
      










      
    </div>
  )
}
export default GuitarWars;