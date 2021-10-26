import { useEffect, useState } from "react"
// import "./addList.css"
import axios from "axios"

const AddList = () => {
  const [gtrPlayers, setGtrPlayers] = useState([]);
  const [names, setNames] = useState("")
  const [rank, setRank] = useState("")
  const [solo, setSolo] = useState("")
  const [toggleFetch, setToggleFetch] = useState(true)

  // setting use effect to make axios call and store data
  useEffect(() => {
    // console.log("Getting data");
    const gtrData = async () => {
      const resp = await axios.get("https://api.airtable.com/v0/appsWUAfBQp2UDLAA/Table%201?api_key=key4oMm9k9ZdBAjAJ")
      console.log(resp.data.records)
      console.log(resp.data.records[0].id)
        
      const sortedList = resp.data.records.sort((a, b) => (a.fields.rank) - (b.fields.rank))
      // const found = sortedList.find(element => element.id === id)
      // console.log(found)
      setGtrPlayers(sortedList)



      // setGtrPlayers(resp.data.records)
    }
    gtrData();
  }, [toggleFetch])


const handleSubmit = async (ev) => {
  ev.preventDefault()
  console.log("formSubmitted")
  
  const newGtr = {
    names,
    rank,
    solo,
  }
  console.log(newGtr)
 
  await axios.post("https://api.airtable.com/v0/appsWUAfBQp2UDLAA/Table%201?key4oMm9k9ZdBAjAJ",
    { fields: newGtr }, { headers: { Authorization: "Bearer key4oMm9k9ZdBAjAJ" } })
  setToggleFetch(!toggleFetch)
}
  
//   const deleteGtr = async () => {
//     console.log("deleting")
//     await axios.delete(`https://api.airtable.com/v0/appsWUAfBQp2UDLAA/Table%201?api_key=key4oMm9k9ZdBAjAJ&records[]=${playerId}`)
//  }
  
  return (
    <div className ="addList">

<form onSubmit={handleSubmit}>
        <label htmlFor="names">Guitarist</label>
        <input
          type="text"
          id="names"
          value={names}
          onChange={(ev) => setNames(ev.target.value)}
          placeholder="Enter Guitarist"
        />

        <label htmlFor="rank">Rank</label>
        <input
          type="text"
          id="rank"
          value={rank}
          onChange={(ev) => setRank(ev.target.value)}
          placeholder="Rank"
         />
        
        <label htmlFor="solo">Best Solo</label>
        <input
          type="text"
          id="solo"
          value={solo}
          onChange={(ev) => setSolo(ev.target.value)}
          placeholder="Best Solo"
        />
        <input type="submit" value="Create your Own List!"/>
    </form>
   <hr/> 
      <h1>This is my Addlist page</h1>
      {gtrPlayers.map((gtrPlayer) => (
        <div key={gtrPlayer.id}>
      
          <h2> Rank: {gtrPlayer.fields.rank}</h2>
          <h2> Guitarist : {gtrPlayer?.fields?.names}</h2>
          <h2> Solo: {gtrPlayer.fields.solo}</h2>
          {/* <img src={gtrPlayer.fields.small} /> */}
          <h2>  {gtrPlayer.id}</h2>
          {/* <button onClick={deleteGtr }>Delete</button> */}
          <hr />
        </div>        
      ))}


    </div>

  )

}
export default AddList;


   
// https://api.airtable.com/v0/appsWUAfBQp2UDLAA/Table%201?api_key=key4oMm9k9ZdBAjAJ