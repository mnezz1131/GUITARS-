import { useParams } from "react-router-dom"



const GuitarPage = ({ gtrPlayers }) => {
  const { id } = useParams();
console.log(id)
  const gtrPlayer = gtrPlayers.find((element)=> element.id === id)
  
  return (
    <div>
   
      <h1>This is my Guitarist Page</h1>
      <h3>Name:{gtrPlayer?.fields.names }</h3>
       <h3>Rank:{gtrPlayer?.fields.rank }</h3>
      <h3>Genre:{gtrPlayer?.fields.genre }</h3>
      <h3>Bands:{gtrPlayer?.fields.bands }</h3>
      <img alt={gtrPlayer.fields.names } src ={gtrPlayer?.fields.large }/>
    
    </div>
  )
  

}

export default GuitarPage;

