import { useEffect, useState } from "react";
// import "./addList.css"
import axios from "axios";
import "./AddList.css";
const AddList = () => {
  const [gtrPlayers, setGtrPlayers] = useState([]);
  const [names, setNames] = useState("");
  const [rank, setRank] = useState("");
  const [solo, setSolo] = useState("");
  const [toggleFetch, setToggleFetch] = useState(true);

  // setting use effect to make axios call and store data
  useEffect(() => {
    const gtrData = async () => {
      const resp = await axios.get(
        "https://api.airtable.com/v0/appsWUAfBQp2UDLAA/Table%201?api_key=key4oMm9k9ZdBAjAJ"
      );

      const sortedList = resp.data.records.sort(
        (a, b) => a.fields.rank - b.fields.rank
      );

      setGtrPlayers(sortedList);
    };
    gtrData();
  }, [toggleFetch]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log("formSubmitted");

    const newGtr = {
      names,
      rank,
      solo,
    };

    await axios.post(
      "https://api.airtable.com/v0/appsWUAfBQp2UDLAA/Table%201?key4oMm9k9ZdBAjAJ",
      { fields: newGtr },
      { headers: { Authorization: "Bearer key4oMm9k9ZdBAjAJ" } }
    );
    setToggleFetch(!toggleFetch);
  };

  const deleteGtr = async (playerId) => {
    await axios.delete(
      `https://api.airtable.com/v0/appsWUAfBQp2UDLAA/Table%201?api_key=key4oMm9k9ZdBAjAJ&records[]=${playerId}`
    );
    setToggleFetch(!toggleFetch);
  };

  return (
    <div className="addList">
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
        <input type="submit" value="Create your Own List!" />
      </form>
      <hr />
      <h1 className="h1List">Add or Delete Gutiarists</h1>
      {gtrPlayers.map((gtrPlayer) => (
        <div className="rowList" key={gtrPlayer.id}>
          <div className="column">
            <h2> Rank: {gtrPlayer.fields.rank}</h2>
          </div>
          <div className="column">
            <h2>{gtrPlayer?.fields?.names}</h2>
          </div>
          <div className="column">
            <h2> Solo: {gtrPlayer?.fields?.solo}</h2>
          </div>

          <button
            className="buttonList"
            onClick={() => deleteGtr(gtrPlayer.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default AddList;
