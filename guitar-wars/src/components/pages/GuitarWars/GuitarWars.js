import axios from "axios"
import {
  useEffect,
  useState
} from "react"
import "./GuitarWars.css"

const GuitarWars = () => {
    const [getGtrPlayers, setGetGtrPlayers] = useState([])
    const [votes1, setVotes1] = useState(0)
    const [votes2, setVotes2] = useState(0)

    useEffect(() => {
      const gtrData = async () => {
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


    function handleClick1(ev, player1Id) {
      ev.preventDefault();
      setVotes1(votes1 + 1)

      // const patch = {
      //   wins,
      // }
      // await axios.post("https://api.airtable.com/v0/appsWUAfBQp2UDLAA/Table%201?key4oMm9k9ZdBAjAJ",
      // { fields: patch }, { headers: { Authorization: "Bearer key4oMm9k9ZdBAjAJ" } })

    }

    function handleClick2(ev) {
      ev.preventDefault();
      setVotes2(votes2 + 1)

    }


    //   const patchGtr = async (playerId) => {
    //     console.log("patching")
    //     console.log(playerId)
    //     await axios.patch(`https://api.airtable.com/v0/appsWUAfBQp2UDLAA/Table%201?api_key=key4oMm9k9ZdBAjAJ&records[]=${playerId}`)
    //     // setToggleFetch(!toggleFetch)
    //  }


    return ( <
        div >

        <
        h1 > This is My Guitar Wars Page < /h1>

        <
        div className = "row" >

        <
        div className = "column1 gtr1" > {
          < h2 > {
            player1 ? .fields.names
          } < /h2>} {
            /* {<h3>ID - {player1?.id}</h3>} */ } {
            < img className = "image-size"
            src = {
              player1 ? .fields.large
            }
            alt = {
              player1 ? .fields.names
            }
            /> }

            {
              < h2 > Wins from air table - {
                  player1 ? .fields.wins
                } < /h2>} {
                  < h2 > Votes - {
                      votes1
                    } < /h2>} <
                    button onClick = {
                      () => handleClick1(player1.id)
                    } > VOTE < /button>

                    <
                    /div> 

                    <
                    div className = "column2 gtr2" >
                    <
                    h1 > VS < /h1> <
                    button > Play Again < /button> <
                    /div>

                    <
                    div className = "column3 gtr2" >
                    <
                    h2 > {
                      player2 ? .fields.names
                    } < /h2> {
                      /* {<h3>ID - {player2?.id}</h3>} */ } <
                    img className = "image-size"
                  src = {
                    player2 ? .fields.large
                  }
                  alt = {
                    player2 ? .fields.names
                  }
                  /> {
                    < h2 > Wins from air table - {
                      player2 ? .fields.wins
                    } < /h2>} {
                      < h2 > VOTES - {
                          votes2
                        } < /h2>} <
                        button onClick = {
                          () => handleClick2(player2.id)
                        } > VOTE < /button>


                        <
                        /div> 

                        <
                        /div>













                        <
                        /div>
                    )
                  }
                  export default GuitarWars;