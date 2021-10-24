import axios from "axios"
import { useEffect, useState } from "react"
import "./guitarWars.css"

const GuitarWars = () => {
  const [getGtrPlayers, setGetGtrPlayers] = useState([])
  
  useEffect(() => {
    const gtrData = async() => {
  const resp = await axios.get("https://api.airtable.com/v0/app69ZErQlRDvLFux/Table%201?api_key=key4oMm9k9ZdBAjAJ" )
      console.log(resp.data)

    setGetGtrPlayers(resp.data.records)
    }
    gtrData();
  }, [])

  
  


  const pickRandom = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  }
  console.log(pickRandom(getGtrPlayers))
  console.log(pickRandom(getGtrPlayers))



  return (
    <div>

      <h1>This is My Guitar Wars Page </h1>

     

      <div className="row">
        
        <div className="column1 gtr1">
        {getGtrPlayers.map((getGtrPlayer) => (
        <div>
        <h2 key={getGtrPlayers.id}> Guitarist : {getGtrPlayer.fields.names}</h2>
          <img src={getGtrPlayer.fields.large} alt={ getGtrPlayer.fields.names}/>
          </div>
      ))}
    
        <h2>Wins _</h2>  
     </div> 
        
    <div className="column2">
          <h1>VS</h1>
       <button>Play Again</button>
    </div>
        
       <div className="column3 gtr2">
       {getGtrPlayers.map((getGtrPlayer) => (
        <div>
        <h2 key={getGtrPlayers.id}> Guitarist : {getGtrPlayer.fields.names}</h2>
          <img src={getGtrPlayer.fields.large} alt={ getGtrPlayer.fields.names}/>
          </div>
       ))}
            <h2>Wins _</h2>  
     </div> 
        
    </div>
    
      










      
    </div>
  )
}
export default GuitarWars;