import axios from "axios"
import { useEffect, useState } from "react"

const Guitarist = () => {
  // setting state variables to hold data coming from air table
  const [guitarists, setGuitarists] = useState([]);

  // setting use effect to make axios call and store data
  useEffect(() => {
    // console.log("Getting guitar data");
    const gtrData = async () => {
      const resp = await axios.get("https://api.airtable.com/v0/app69ZErQlRDvLFux/Table%201?api_key=key4oMm9k9ZdBAjAJ")
      // console.log(resp.data)
      // updating gtrData state
      setGuitarists(resp.data.records)
    }
    gtrData();
}, [])

  return (
    <div>
      <h1>Guitarist Page</h1>
      {guitarists.map((guitarist) => (
        <div key={guitarist.id}>
          <h2 key={guitarist.id}> Guitarist : {guitarist.fields.names}</h2>
          <img alt={guitarist.fields.name} src={guitarist.fields.small} />
          <h2>Rank : {guitarist.fields.rank}</h2>
        </div>
      ))}
      </div>
)



}

export default Guitarist

// GET https://api.airtable.com/v0/app69ZErQlRDvLFux/Table%201?api_key=key4oMm9k9ZdBAjAJ
