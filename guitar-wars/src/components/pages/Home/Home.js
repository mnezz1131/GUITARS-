import "./Home.css"
import {  useState } from "react"
import { Link, } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography, CssBaseline, Container, Button, Grid, Grid Item } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  
}));

const Home = ({gtrPlayers}) => {
  const [showing, SetShowing] = useState(true)
  //function is going to pass in the flipped boolean
  //going to set showing to whatever showing in not
  const toggleState = () => {
    console.log("i was clicked")
    SetShowing(!showing)
  }

  
  return (
  <div className="top">
    <main>
        <CssBaseline />
        <Button color="error" variant='contained' onClick = {toggleState}>toggle state</Button>    
        {showing && <div>
        <Container maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom>This is my Home Page
            </Typography >
            <Typography variant="h7" align="center" color="textSecondary" pararaph>
              Welcome to the Guitar list website where the debate rages over who the best, most influential guitarists of all time are!
        </Typography >
          </Container>
            <Grid container spacing={2} justify="center">
              {gtrPlayers.map((gtrPlayer) => (
                <div key={gtrPlayer.id}>
                <Link to ={`/guitarist-page/${gtrPlayer.id}`}>
                  <h2> Guitarist : {gtrPlayer?.fields?.names}</h2></Link>
                    <img alt={gtrPlayer.fields.names} src={gtrPlayer.fields.small} />
                  <h2>Rank: {gtrPlayer.fields.rank}</h2>
                </div>        
              ))}
          </Grid>



        </div>}
    </main>
  </div>
)
}

export default Home;

// GET https://api.airtable.com/v0/app69ZErQlRDvLFux/Table%201?api_key=key4oMm9k9ZdBAjAJ
