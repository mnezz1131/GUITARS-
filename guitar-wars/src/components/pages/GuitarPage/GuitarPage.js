import { useParams } from "react-router-dom"



const GuitarPage = () => {

  
  return (
    <div>
   
      <h1>This is my Guitarist Page</h1>
      <h3>Name:</h3>
      <h3>Rank:</h3>
      <h3>Genre:</h3>
      <h3>Bands:</h3>
    
    </div>
  )

}

export default GuitarPage;

//   const { id } = useParams();
// console.log(id)
//   const gtrPlayer = gtrPlayers.find((gtrPlayer)=> gtrPlayer.id === id)

   /* <h3>Name:{gtrPlayer.name }</h3>
      <h3>Rank:{gtrPlayer.rank }</h3>
      <h3>Genre:{gtrPlayer.genre }</h3>
      <h3>Bands:{gtrPlayer.bands }</h3> */