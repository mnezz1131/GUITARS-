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
       <h4>Rank: {gtrPlayer?.fields.rank }</h4>
      <h4>Genre: {gtrPlayer?.fields.genre }</h4>
          <h5>Bands: {gtrPlayer?.fields.bands}</h5>
        </div>
        
        <div className="columngtr2">
          <img alt={gtrPlayer?.fields.names} src={gtrPlayer?.fields.large} />
          </div>
      </div>
    </div>
  )
  

}

export default GuitarPage;

