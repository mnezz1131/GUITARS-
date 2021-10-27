import { useParams } from "react-router-dom"
import "./guitarPage.css"


const GuitarPage = ({ gtrPlayers }) => {
  const { id } = useParams();
console.log(id)
  const gtrPlayer = gtrPlayers.find((element)=> element.id === id)
  
  return (
    <div className="gtrPage">
      <div className="rowgtr1" >
      <div className="columngtr">
      <h1>Guitarist Page</h1>
      <h3>Name:{gtrPlayer?.fields.names }</h3>
       <h3>Rank:{gtrPlayer?.fields.rank }</h3>
      <h3>Genre:{gtrPlayer?.fields.genre }</h3>
          <h3>Bands:{gtrPlayer?.fields.bands}</h3>
        </div>
        
        <div className="columngtr2">
          <img alt={gtrPlayer?.fields.names} src={gtrPlayer?.fields.large} />
          </div>
      </div>
    </div>
  )
  

}

export default GuitarPage;

